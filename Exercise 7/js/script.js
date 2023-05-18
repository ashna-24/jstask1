    const GLConfig = {'CO' : { type: 'REQUIRED'},'MAJ': { type: 'NORMAL'},'SET': { type: 'NORMAL'},'MIN': { type: 'REQUIRED'}};
    const GLSegments = {'CO' : '01','MAJ': '111','SET': '111','MIN': '000'};
    const GLSegmentsFail = {'CO' : '','MAJ': '222','SET': '222','MIN': '111'};

    const configparse = JSON.parse(JSON.stringify(GLConfig));
    /* console.log(configparse) */
    /* const config = Object.keys(configparse); */
    for(let i in configparse){
        const configseg = configparse[i];
        /* console.log(configseg); */
        if(configseg.type == 'REQUIRED'){
            for(let i in GLSegments){
                let constseg = GLSegments[i];
                if(constseg == ''){
                    console.log("Failed");
                }
                else{
                    console.log("Had value");
                }
            }
            for(let i in GLSegmentsFail){
                let constsegfail = GLSegmentsFail[i];
                if(constsegfail == ''){
                    console.log("Failed");
                }
                else{
                    console.log("Had value");
                }
            }
        }
    }

    /*if(configparse.config.type=='REQUIRED'){
        console.log('hi')
    } */
    /* for(let i in GLSegments){
        const configseg = GLSegments[i];
        if(config.type == 'REQUIRED'){
            if(configseg == ''){
                console.log("Failed");
            }
            else{
                console.log("Had value");
            }
        }
    } */

    /* for(let i in config){
        const segment = config[i].toString();
        console.log(segment);
        /* if(Object.values(segment)=='REQUIRED'){
            console.log('hi')
        } 
    } 
    /* let configfail = JSON.parse(JSON.stringify(GLSegmentsFail)); */
    