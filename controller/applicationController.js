import { getConnectionObject } from "../config/database.js";
export const s = (req, res) => {
    const data = req.body;
    const db = getConnectionObject();

    const query = `
        INSERT INTO application (name, phone, email, cv, cover_letter) 
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [data.name, data.phone, data.email, data.cv, data.cover_letter];

    db.query(query, values, (error, result) => {
        if (error) {
            console.error('Database error:', error); // Log the error for better debugging
            res.status(500).send({ message: 'Error occurred while inserting data', error: error.message });
        } else {
            res.status(200).send({ message: "Application submitted successfully", result });
        }
    });
};
export const s1 = (req, res) => {
    const db = getConnectionObject();
    db.query(`select * from application`, (error, result) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(result);
        }
    })
};
export const s2 = (req, res) => {
    const db = getConnectionObject();

    const query = `DELETE FROM application WHERE id = ?`;
    const values = [req.params.id];

    db.query(query, values, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send({ message: "Record deleted successfully", result });
        }
    });
};
export const s3 = (req, res) => {
    const db = getConnectionObject();
    const data = req.body;
    const query = `
        UPDATE application 
        SET name = ?, phone = ?, email = ?, cv = ?, cover_letter = ? 
        WHERE id = ?
    `;
    const values = [data.name, data.phone, data.email, data.cv, data.cover_letter, req.params.id];

    db.query(query, values, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send({ message: "Application updated successfully", result });
        }
    });
};
export const s4 = (req, res) => {
    const db = getConnectionObject();
    const id = req.params.id;
    db.query(`select * from application where id = ?`, [id], (error, result) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(result);
        }
    })
};