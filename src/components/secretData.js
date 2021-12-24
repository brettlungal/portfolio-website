import { useEffect, useState } from 'react';
import React, {Component} from 'react';
import {Grid,Cell,Textfield, Button} from 'react-mdl';


const SecretData = () =>{
    const fs = require('fs');
    const dir = "./";
    const [files,setFiles] = useState([]);

    const fetchFiles = () =>{
        console.log("fetching files");
        //console.log(files);
    }

    return(
        <div>
            <Button onClick={() => fetchFiles()}>Find</Button>
        </div>
    );
    
    
}

export default SecretData;