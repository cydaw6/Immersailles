var _0x3fcc=['\x27);colorClickedLink(\x27','leftTimeline','#leftTimeline','identifier','\x22\x20class=\x22core\x22><span>','Floors','Maps',':before\x20{background-color:\x20white;border:2px\x20solid\x20#C8AD7F;transition:\x20background-color\x200.5s\x20ease;}','bold','year','<div\x20class=\x22entry\x22><a\x20href=\x22#\x22\x20id=\x22','style','#core_','open','innerHTML','etage','Years','</span></div></a></div>','appendChild','normal','GET','fontWeight','getElementById','head','label','createElement','parse','annee','length','undefined','send'];(function(_0x5a8409,_0x5c6322){var _0x3fccec=function(_0x2c92ca){while(--_0x2c92ca){_0x5a8409['push'](_0x5a8409['shift']());}};_0x3fccec(++_0x5c6322);}(_0x3fcc,0xd5));var _0x2c92=function(_0x5a8409,_0x5c6322){_0x5a8409=_0x5a8409-0x110;var _0x3fccec=_0x3fcc[_0x5a8409];return _0x3fccec;};var _0x477d28=_0x2c92,request=new XMLHttpRequest();request[_0x477d28(0x121)](_0x477d28(0x128),'././api.php',![]),request[_0x477d28(0x113)](null);var jsonInterprete=JSON[_0x477d28(0x12e)](request['responseText']),jsonFloors=jsonInterprete[_0x477d28(0x119)],jsonMaps=jsonInterprete[_0x477d28(0x11a)],jsonYears=jsonInterprete[_0x477d28(0x124)],linkClicked,lastHovered;function unClickLink(){var _0x101177=_0x477d28;if(typeof linkClicked!=_0x101177(0x112)){linkClicked[_0x101177(0x11f)][_0x101177(0x129)]=_0x101177(0x127);var _0xdc662b=document[_0x101177(0x12b)][_0x101177(0x126)](document[_0x101177(0x12d)](_0x101177(0x11f)));_0xdc662b[_0x101177(0x122)]=_0x101177(0x120)+lastHovered+_0x101177(0x11b);}}function hoverLeftButton(){var _0x26cec1=_0x477d28,_0x2cd32e=document[_0x26cec1(0x12b)]['appendChild'](document['createElement'](_0x26cec1(0x11f)));_0x2cd32e[_0x26cec1(0x122)]=_0x26cec1(0x120)+lastHovered+':before\x20{background-color:\x20#C8AD7F;border:2px\x20solid\x20white;transition:\x20background-color\x200.5s\x20ease;}';}var first_value=!![],minimum_date=0x270f,id_year;for(let i=0x0;i<jsonYears[_0x477d28(0x111)];i++){var yearObj=jsonYears[i];yearObj['year']<minimum_date&&(minimum_date=yearObj[_0x477d28(0x11d)],id_year=yearObj['id']);}getFloorsByYear(id_year);function getFloorsByYear(_0x494fed){var _0x4e15e5=_0x477d28;for(let _0x353f08=0x0;_0x353f08<jsonMaps[_0x4e15e5(0x111)];_0x353f08++){var _0x139053=jsonMaps[_0x353f08],_0x1ac88f=document[_0x4e15e5(0x12a)](_0x4e15e5(0x115));$(_0x4e15e5(0x116))['empty']();if(_0x494fed==_0x139053[_0x4e15e5(0x110)]){for(let _0xf282e1=0x0;_0xf282e1<jsonFloors[_0x4e15e5(0x111)];_0xf282e1++){var _0x53ffa6=jsonFloors[_0xf282e1];_0x53ffa6['id']==_0x139053[_0x4e15e5(0x123)]&&(_0x1ac88f['innerHTML']+=_0x4e15e5(0x11e)+_0x53ffa6['identifier']+'\x22\x20style=\x22display:\x20block;height:\x20100%;outline:\x20none;color:#C8AD7F\x20!important;\x22\x20onclick=\x22changeMapLayer(\x27'+_0x139053['id']+_0x4e15e5(0x114)+_0x53ffa6[_0x4e15e5(0x117)]+'\x27)\x22><div\x20id=\x22core_'+_0x53ffa6[_0x4e15e5(0x117)]+_0x4e15e5(0x118)+_0x53ffa6[_0x4e15e5(0x12c)]+_0x4e15e5(0x125));}break;}}}function colorClickedLink(_0x1d25d6){var _0x5406a6=_0x477d28;unClickLink(),document[_0x5406a6(0x12a)](_0x1d25d6)[_0x5406a6(0x11f)][_0x5406a6(0x129)]=_0x5406a6(0x11c),linkClicked=document['getElementById'](_0x1d25d6),lastHovered=_0x1d25d6,hoverLeftButton();}