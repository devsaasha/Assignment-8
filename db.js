const students=[
    {
        name:'S A Asha',
        roll:1,
        class:'Five',
        bn:90,
        en:85,
        math:95,
        sc:91,
        ss:99,
        rn:85
    },
    {
        name:'Tithi Paul',
        roll:2,
        class:'Five',
        bn:95,
        en:80,
        math:90,
        sc:91,
        ss:95,
        rn:81
    },
    {
        name:'Arman Rafi',
        roll:3,
        class:'Five',
        bn:85,
        en:78,
        math:80,
        sc:88,
        ss:85,
        rn:81
    },
    {
        name:'Sohag Candra',
        roll:4,
        class:'Five',
        bn:95,
        en:87,
        math:85,
        sc:88,
        ss:90,
        rn:83
    },
    {
        name:'Nourin Akter',
        roll:5,
        class:'Five',
        bn:85,
        en:82,
        math:85,
        sc:88,
        ss:90,
        rn:86
    },
]

// GPA_______________________________________________________
const getGpa =(marks)=>{


    let gpa;
    
    
    if( marks >= 0 && marks < 33 ){
        gpa = 0 ;
    }else if(marks >= 33 && marks < 40 ){
        gpa = 1 ;
    }else if( marks >= 40 && marks < 50 ){
        gpa = 2 ;
    }else if(marks >= 50 && marks < 60 ){
        gpa = 3 ;
    }else if( marks >= 60 && marks < 70 ){
        gpa = 3.5 ;
    }else if( marks >= 70 && marks < 80 ){
        gpa = 4 ;
    }else if( marks >= 80 && marks <= 100 ){
        gpa = 5 ;
    }else{
        gpa = 'Invalid' ;
       
    }
     return gpa;
    
    }
    // GRADE=================================================
    const getGrade =(marks) =>{
    
    
    let grade;
    
    
    if( marks >= 0 && marks < 33 ){
        grade = 'F';
    }else if(marks >= 33 && marks < 40 ){
        grade = 'D';
    }else if( marks >= 40 && marks < 50 ){
        grade = 'c';
    }else if(marks >= 50 && marks < 60 ){
        grade = 'B';
    }else if( marks >= 60 && marks < 70 ){
        grade = 'A-';
    }else if( marks >= 70 && marks < 80 ){
        grade = 'A';
    }else if( marks >= 80 && marks <= 100 ){
        grade = 'A+';
    }else{
        grade = 'Invalid' ;
    }
     return grade;
    };
    console.log(`

    Name                    : ${ data.name }
    Class                   : ${ data.class }
    Roll                    : ${ data.roll }
    ----------------------------------------------------------------->
    
    Subject              Marks           GPA         Grade                            CGPA     
    Result
    Bangla                ${ data.bn }              ${ getGpa(bn) }           ${ getGrade(bn) }
    English               ${ data.en }              ${ getGpa(en) }           ${ getGrade(en) }
    Science               ${ data.sc }              ${ getGpa(sc) }           ${ getGrade(sc) } ${((data.bn)+(data.en)+(data.sc)+(data.math)+(data.ss)+(data.rn)/6)}
    Mathematics           ${ data.math }              ${ getGpa(math) }           ${ getGrade(math) }
    Social Science        ${ data.ss }              ${ getGpa(ss) }           ${ getGrade(ss) }
    Religion              ${ data.rn }              ${ getGpa(rn) }           ${ getGrade(rn) }
    
    
    `);
    