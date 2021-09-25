const Recipe = require("../models/recipe.js");
const express = require('express');
const app = express();
app.use(express.json());

const userController = {

    getRecipe: async (request, response) => {
        await Recipe.find()
        .then((res) => {
            response.json(res);
        })
        .catch(error => {
            response.json(error);
        })
    },

    addRecipe: async (request, response) => {
        try {
            const { name, ingredients, procedure, src } = request.body;

            console.log("test",name);
            if(!name || !ingredients || !procedure || !src ) {
                return response.status(400).json({message:"All Fields are required"});
            }

            const recip = await Recipe.findOne({name:name})
            if(recip) return response.status(400).json({message:"Recipe already exist"});

            const saveRecipe = new Recipe({
                name,
                ingredients,
                procedure,
                src,
            })

            await saveRecipe.save()
            return response.status(200).json(saveRecipe);

        } catch(error) {
            return response.status(404).json({message: error.message})           
        }
    },

    removeRecipe: async (request, response) => {
        try {
            // const { name } = request.body;

            console.log("backend req", request.params.name);
            // const rec = Recipe.findOne({name:name});
            // console.log("The recordthat need to be deleted",rec)
            // if(!rec) return response.status(400).json({message:"Recipe does not exist"})

            await Recipe.deleteOne({name:request.params.name});
            // console.log("The Removed item",rem);

            return response.status(200).json({message:"Deleted Successfully"});

        } catch (error){
            return response.status(404).json({message: error.message}) 
        }
    }
}

module.exports = { userController }