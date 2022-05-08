


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
