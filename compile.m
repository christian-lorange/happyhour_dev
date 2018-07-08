clear all

data=readtable('database_working.xlsx');

s1='<div class=@venue@ data-id=@aloe@ data-category=@';  %add in categories
s2='@ onclick=@openModal();currentSlide('; %add in index number
s3=')@> <span class=@location@>'; %add in location name
s4='</span><span class=@area@>'; %add in area
s5='</span> <span class=@sunday hh_t@>'; %add in sunday
s6='</span><span class=@monday hh_t@>'; %add in monday
s7='</span><span class=@tuesday hh_t@>'; %add in tues
s8='</span><span class=@wednesday hh_t@>'; %add in wed
s9='</span><span class=@thursday hh_t@>'; %add in thurs
s10='</span><span class=@friday hh_t@>'; %add in Frid
s11='</span><span class=@saturday hh_t@>'; %add in sat
s12='</span><span class=@icon@>'; %add in icons
s13='</span></div>';



v=[];

for i=1:height(data)
  
    
    venues=strcat(s1,char(table2array(data(i,56))),s2,num2str(i),s3,char(table2array(data(i,1))),s4,char(table2array(data(i,57))),s5,char(table2array(data(i,36))),s6,char(table2array(data(i,37))),s7,char(table2array(data(i,38))),s8,char(table2array(data(i,39))),s9,char(table2array(data(i,40))),s10,char(table2array(data(i,41))),s11,char(table2array(data(i,42))),s12,char(table2array(data(i,55))),s13);
    
    v=[v;{venues}];
    
end




s1='var hh = {0: {    0: {        1:';
s2=',2:';
s3=',3:';
s4=',4:';
s5=',5:';
s6=',6:';

hhjs=[];
 
for i=1:height(data)
    
    i;
    hh=[];
    for j=1:7
    
        
        
    hh_t=strcat(num2str(j-1),': {1:',num2str(table2array(data(i,20+(j*2)))),',2:',num2str(table2array(data(i,21+(j*2)))),'}');
     
    if j==1
    hh=[hh,hh_t];
    else
    hh=[hh,',',hh_t];   
    end
    
    
    end
    
    hhjs=[hhjs,num2str(i-1),':{',hh,'},'];
    
    
end

hhjs=strcat('var hh = {',hhjs,'};');



s1='<b>Name:</b>'; %{Name}
s2='<br><b>Address:</b><a href="http://maps.google.com/?q=';% {Location}
s2b='" target="_system" title="Directions">';
s3='</a><br><b>Happy Hour Times:</b><br>Sunday:';%{Sun Start}-{Sun End}
s4='<br>Monday:';%{Mon Start}-{Mon End}
s5='<br>Tuesday:';%{Tues Start}-{Tues End}
s6='<br>Wednesday:';%{Wed Start}-{Wed End}
s7='<br>Thursday:';%{Thur Start}-{Thur End}
s8='<br>Friday:';%{Fri Start}-{Fri End}
s9='<br>Saturday:';%{Sat Start}-{Sat End}
s10='<br><b>Happy Hour Deals:</b><br>';%{Description}
s11='';

complete=[];
modal=[];

for i=1:height(data)
  
    
    cards=strcat(s1,char(table2array(data(i,1))),s2,char(table2array(data(i,6))),s2b,char(table2array(data(i,6))),s3,char(table2array(data(i,36))),s4,char(table2array(data(i,37))),s5,char(table2array(data(i,38))),s6,char(table2array(data(i,39))),s7,char(table2array(data(i,40))),s8,char(table2array(data(i,41))),s9,char(table2array(data(i,42))),s10,char(table2array(data(i,21))),s11,",");
    
    complete=[complete;{cards}];
    
    modal=[modal;{strcat('<div class="mySlides">',cards,'</div>')}];
    
    end

  

