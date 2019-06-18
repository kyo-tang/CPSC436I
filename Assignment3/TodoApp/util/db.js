class Database {
  constructor(initialData) {
    this._id = 0;
    this._db = [];
    if (initialData.length > 0) {
      initialData.forEach(entry => {
        const obj = {
          id: this._id,
          data: entry
        };
        this._db.push(obj);
        this._id++;
      });
    }
  }

  add(entry) {
    const obj = {
      id: this._id,
      data: entry
    };
    this._id++;
    this._db.push(obj);
    return obj;
  }

  delete(id) {
    if (this._db.find(entry => entry.id === id)) {
      this._db = this._db.filter(entry => entry.id !== id);
      return true;
    } else {
      return false;
    }
  }

  clearAll() {
    this._id = 0;
    this._db = [];
  }

  getAll() {
    return this._db;
  }
}

module.exports = Database;
