const db = require("./db");
const helper = require("../helper");
const config = require("../config");


async function getInterestById(id) {
    const row = await db.query(
        "SELECT interest_count FROM entries WHERE id = ?", [id]
        );
        const data = helper.emptyOrRows(row);

        if (data.length === 0) {
        const error = new Error(`Entry with id ${id} not found`);
        error.code = 'Not Found'
        throw error;
        }

        return data[0].interest_count;
}

async function getInterestCount(id) {

    const row = await db.query(
    "SELECT id, createdOn, createdBy, softwareVersion, customer, entry_type, entry_address, entry_size, entry_comment, entry_shortHand, interest_count FROM entries WHERE id = ?", [id]
    );
    const data = helper.emptyOrRows(row);

    if (data.length === 0) {
    const error = new Error(`Entry with id ${id} not found`);
    error.code = 'Not Found'
    throw error;
    }

    return data[0];
}
    
/*async function addInterest(id) {
    const result = await db.query(
    "UPDATE entries SET interest_count = interest_count + 1 WHERE id = ?",
    [id]
    );
    return result.affectedRows ? true : false;
*/

async function addInterest(id) {
    const result = await db.query(
        "UPDATE entries SET interest_count = interest_count + 1 WHERE id = ?",
        [id]
    );
    if (result.affectedRows) {
        const row = await db.query(
            "SELECT interest_count FROM entries WHERE id = ?",
            [id]
        );
        const data = helper.emptyOrRows(row);
        return { success: true, interestCount: data[0].interest_count };
    } else {
        return { success: false, interestCount: null };
    }
}


async function removeInterest(id) {
    const interestCount = await getInterestById(id);
        
    if (interestCount <= 0) {
        return { success: false, interestCount: 0 }; // interest_count kann nicht unter 0 gehen
    }

    const result = await db.query(
        "UPDATE entries SET interest_count = ? WHERE id = ?",
        [interestCount - 1, id]
    );
    return { success: result.affectedRows ? true : false, interestCount: interestCount - 1 };
}
  
    

   
module.exports = {
getInterestById,    
getInterestCount,
addInterest,
removeInterest
};