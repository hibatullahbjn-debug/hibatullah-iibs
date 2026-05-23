/**
 * Database Firebase terpusat — semua koleksi website
 */
window.HibatullahDB = (function () {
  var db = null;

  function cols() {
    return window.firebaseCollections || {
      pendaftar: 'pendaftar',
      berita: 'berita',
      galeri: 'galeri',
      pengaturan: 'pengaturan',
      hero: 'hero',
      halaman: 'halaman',
    };
  }

  function isReady() {
    var cfg = window.firebaseConfig;
    if (!cfg || !cfg.apiKey || !cfg.projectId) return false;
    return String(cfg.apiKey).indexOf('ISI_') === -1;
  }

  function init() {
    if (!isReady() || typeof firebase === 'undefined') return null;
    if (!firebase.apps.length) {
      firebase.initializeApp(window.firebaseConfig);
    }
    db = firebase.firestore();
    return db;
  }

  function getDb() {
    if (!db) init();
    return db;
  }

  function col(name) {
    var database = getDb();
    if (!database) return null;
    return database.collection(name);
  }

  async function getAll(collectionName, options) {
    options = options || {};
    var ref = col(collectionName);
    if (!ref) return [];

    var q = ref;
    if (options.where) {
      options.where.forEach(function (w) {
        q = q.where(w.field, w.op, w.value);
      });
    }
    if (options.orderBy) {
      q = q.orderBy(options.orderBy, options.orderDir || 'desc');
    }
    if (options.limit) {
      q = q.limit(options.limit);
    }

    var snap = await q.get();
    return snap.docs.map(function (d) {
      var data = d.data();
      data.id = d.id;
      return data;
    });
  }

  async function getDoc(collectionName, docId) {
    var ref = col(collectionName);
    if (!ref) return null;
    var snap = await ref.doc(docId).get();
    if (!snap.exists) return null;
    var data = snap.data();
    data.id = snap.id;
    return data;
  }

  async function add(collectionName, data) {
    var ref = col(collectionName);
    if (!ref) throw new Error('Firebase belum dikonfigurasi');
    var payload = Object.assign({}, data);
    if (!payload.createdAt && typeof firebase !== 'undefined') {
      payload.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    }
    return ref.add(payload);
  }

  async function set(collectionName, docId, data, merge) {
    var ref = col(collectionName);
    if (!ref) throw new Error('Firebase belum dikonfigurasi');
    return ref.doc(docId).set(data, { merge: merge !== false });
  }

  async function count(collectionName) {
    var ref = col(collectionName);
    if (!ref) return 0;
    var snap = await ref.get();
    return snap.size;
  }

  return {
    isReady: isReady,
    init: init,
    getDb: getDb,
    cols: cols,
    getAll: getAll,
    getDoc: getDoc,
    add: add,
    set: set,
    count: count,
  };
})();
