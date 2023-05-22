    const GLConfig = {'CO' : { type: 'REQUIRED'},'MAJ': { type: 'NORMAL'},'SET': { type: 'NORMAL'},'MIN': { type: 'REQUIRED'}};
    const GLSegments = {'CO' : '01','MAJ': '111','SET': '111','MIN': '000'};
    const GLSegmentsFail = {'CO' : '','MAJ': '2233','SET': '222','MIN': '111'};

    const configparse = JSON.parse(JSON.stringify(GLConfig));
    let cofigGl = (segments) =>{
        if((configparse.CO.type  == 'REQUIRED') && (segments.CO == '') || (configparse.MAJ.type  == 'REQUIRED') && (segments.MAJ == '') || (configparse.MIN.type  == 'REQUIRED') && (segments.MIN == '') || (configparse.SET.type  == 'REQUIRED') && (segments.SET == '')){
            return false;
        }
        else{
            return true;
        }
    };

    let cofiglength = (seglength) =>{
        if((seglength.CO.length <= Object.keys(seglength)[0].toString().length) &&
        (seglength.MAJ.length <= Object.keys(seglength)[1].toString().length) &&
        (seglength.SET.length <= Object.keys(seglength)[2].toString().length) &&
        (seglength.MIN.length <= Object.keys(seglength)[3].toString().length))
        {
            return true;
        }
        else{
            return false;
        }
    };

    function validateGL(glvalidation){
        if(cofigGl(glvalidation) == true){
            console.log("true");
        }
        else{
            console.log("false");
        }
    } 

    validateGL(GLSegments);
    validateGL(GLSegmentsFail);

    function validateGLlength(glvalidation){
        if(cofiglength(glvalidation) == true){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }

    validateGLlength(GLSegments);
    validateGLlength(GLSegmentsFail);