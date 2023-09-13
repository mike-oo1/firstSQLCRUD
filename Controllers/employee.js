const express= require("express")
const {db}=require("../db")

exports.getAll= async(req,res)=>{
    try{
       const [allEmp] =await db.query("SELECT * FROM employees")
       if(!allEmp){
        return res.status(404).json({
            message:"employees not found"
        })
       }else{
        return res.status(200).json({
            message:"here are all the employees",
            data: allEmp
        })

       }
    }catch(error){
        return res.status(500).json({
            message:error.message
        })

    } 
}
exports.getOne = async(req,res)=>{
    try {
        const id =req.params.id
        const [affectedRows]= await db.query("SELECT * FROM employees WHERE id = ?", [id])
        if(!affectedRows){
            return res.status(404).json({
                message:"employee not found"
            })
        }else if(affectedRows.length ==0){
            return res.status(404).json({
                message:`no employee with the given id ${id}`
            })

        }else{
            return res.status(200).json({
                message:`here is the employee with id ${id}`,
                // data:getOne,
                data:affectedRows

            })
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message        
        })
        
    }
}
exports.deleteEmployee = async(req,res)=>{
    try {
        const id = req.params.id
        const [[deleteOne]] = await db.query("DELETE FROM  employees WHERE id = ?",[id])
        if(!deleteOne){
            return res.status(400).json({
                message:`cannot delete employee with id ${id}`
            })
        }else if(!id){
            return res.status(404).json({
                message:`employee with id ${id} not found in the database`
            })
        }
        else{
            return res.status(200).json({
                message:"employee sucessfully deleted",
                data:deleteOne
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

exports.newEmployee= async(req,res,obj, id = 0)=>{
    try {
        const [[newUser]]= await db.query("CALL usp_employee_add_or_edit(?,?,?,?)" ,[id,obj.name,obj.employee_code,obj.salary],)
        if(!newUser){
            return res.status(400).json({
                message:"cannot create this employee"
            })
        }else{
            res.status(201).json({
                message:"employee created successfully",
                data:newUser
            })
        }
    } catch (error) {
   return res.status(500).json({
    message:error.message
   })
    }
}

