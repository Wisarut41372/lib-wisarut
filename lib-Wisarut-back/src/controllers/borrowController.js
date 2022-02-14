const Borrow = require("../models/borrowModel");

exports.getBorrow = async (req, res) => {

    Borrow.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.borrowBook = async(req, res) => {
    try {
        let borrow = new Borrow(req.body);
        let createdBorrow = await borrow.save();
        let dDate = new Date(createdBorrow.borrowDate)
        let data = { 
            dueDate : dDate.setDate(dDate.getDate()+120)    
        };
     
        Borrow.findByIdAndUpdate(createdBorrow._id, data).exec((err, result)=>{
            Borrow.findById(createdBorrow._id)
                .exec((err, result)=>{
                    res.status(200).json({
                        msg: "บันทึก",
                        data: result
                    });
                });
        });
    } catch (error) {
   
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};


exports.returnBook = async(req, res) => {
    let data = { 
            returnDate : new Date(),
            receiver: req.body.receiver
        }; 
    Borrow.findByIdAndUpdate(req.params.id, data).exec((err, result)=>{
            Borrow.findById(req.params.id)
                .exec((err, result)=>{
                    res.status(200).json({
                        msg: "บันทึกการคืนเรีบยร้อย",
                        data: result
                    });
                });
        });
};


exports.getBorrowDataByMember = async (req, res) => {
    let memberId = req.params.id;
    console.log(memberId);
    Borrow.find({ "borrower.memberId": memberId })
        .exec((err, result) => {
            res.status(200).json({
                msg: "สำเร็จ",
                data: result
            });
        });
};


exports.getBorrowDataByBook = async (req, res) => {
    let bookId = req.params.id;
    console.log(bookId);
    Borrow.find({ "book.bookId": bookId })
        .exec((err, result) => {
            res.status(200).json({
                msg: "สำเร็จ",
                data: result
            });
        });
};