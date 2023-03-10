import React from 'react';
import Card from './Card';
import Data from './Dataa';


function Netflix() {

    
return(
    Data.map((each)=>{

            if(each.cat === "Netflix Original Series")
            {

        return(
              
              <Card 
                key = {each.id}
                ims = {each.imgs}
                cat = {each.cat}
                nam = {each.nam}
                lin = {each.lin}
              />
              )
        }
      })
)



}

export default Netflix;
