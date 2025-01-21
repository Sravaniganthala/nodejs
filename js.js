const db = require('./db');

class User {
  static async findAll() {
    const [users] = await db.execute('SELECT * FROM users');
    return users;
  }

  static async create(name, email) {
    const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return result.insertId;
  }

  static async update(id, name, email) {
    const [result] = await db.execute('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows;
  }
}
module.exports = User;
