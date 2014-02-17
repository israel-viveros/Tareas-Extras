$(document).ready(function(){
	var combo1 = 0, combo2, url="http://stats.televisadeportes.esmas.com/futbol/torneo/",id=0,id_gral=0;
	var url_gral=window.location.href;
	//var url_gral="http://stats.televisadeportes.esmas.com/futbol/torneo/calendario-mundial-fifa-historico/124/Mexico-30";
	//http://televisadeportes.esmas.com/copa-mundial-fifa-brasil-2014/torneos-anteriores/667311/mundial-uruguay-1930/
	var arrt=url_gral.split("/"), nombre2="",nom1,nom2;
	//console.log("arrt[5]: "+arrt[5]);
	//console.log("url_gral: "+url_gral);
	var arrt1=url_gral.split("/"), nombre;
	//console.log(arrt1);	
	if (parseInt(arrt.length)==10)
	{
		nombre2="Equipos";
		$(".seleccionado-hist2").html(nombre2);		
		//console.log(arrt);
		
		var longitud=arrt[6].length, anio;
		//console.log("longitud: "+longitud);
		//anio=substring(String(arrt[6]),parseInt(longitud-4),4)
		anio=String(arrt[6]).substr(parseInt(longitud-4),4);
		//alert ("anio: "+anio);
		
		switch (parseInt(anio))
		{
			case 2014:
				nom1="Brasil 2014";
				id=359;
				break;
			case 2010:
				nom1="Sud&aacute;frica 2010";
				id=101;
				break;
			case 2006:
				nom1="Alemania 2006";
				id=21;
				break;
			case 2002:
				nom1="Corea Jap&oacute;n 2002";
				id=124;
				break;
			case 1998:
				nom1="Francia 1998";
				id=123;
				break;
			case 1994:
				nom1="E.U.A. 1994";
				id=122;
				break;
			case 1990:
				nom1="Italia 1990";
				id=121;
				break;
			case 1986:
				nom1="M&eacute;xico 1986";
				id=120;
				break;
			case 1982:
				nom1="Espa&ntilde;a 1982";
				id=119;
				break;
			case 1978:
				nom1="Argentina 1978";			
				id=118;
				break;
			case 1974:
				nom1="Alemania 1974";
				id=114;
				break;
			case 1970:
				nom1="M&eacute;xico 1970";
				id=113;
				break;
			case 1966:
				nom1="Inglaterra 1966";
				id=112;
				break;
			case 1962:
				nom1="Chile 1962";
				id=111;
				break;
			case 1958:
				nom1="Suecia 1958";			
				id=110;
				break;
			case 1954:
				nom1="Suiza 1954";
				id=109;
				break;
			case 1950:
				nom1="Brasil 1950";
				id=108;
				break;
			case 1938:
				nom1="Francia 1938";
				id=107;
				break;
			case 1934:
				nom1="Italia 1934";
				id=106;
				break;
			case 1930:
				nom1="Uruguay 1930";
				id=105;
				break;		
		}
		$(".seleccionado-hist").html(nom1);
	}
	else
	{							
		if (arrt[7]=="" || arrt[7]==null)
		{
			//nom1="Uruguay 1930";
			//$(".seleccionado-hist").html(nom1);
			nombre2="Equipos";
			$(".seleccionado-hist2").html(nombre2);		
			
			var longitud=arrt[6].length, anio;
			anio=String(arrt[6]).substr(parseInt(longitud-4),4);
					
			switch (parseInt(anio))
			{
				case 2014:
					nom1="Brasil 2014";
					id=359;
					break;
				case 2010:
					nom1="Sud&aacute;frica 2010";
					id=101;
					break;
				case 2006:
					nom1="Alemania 2006";
					id=21;
					break;
				case 2002:
					nom1="Corea Jap&oacute;n 2002";
					id=124;
					break;
				case 1998:
					nom1="Francia 1998";
					id=123;
					break;
				case 1994:
					nom1="E.U.A. 1994";
					id=122;
					break;
				case 1990:
					nom1="Italia 1990";
					id=121;
					break;
				case 1986:
					nom1="M&eacute;xico 1986";
					id=120;
					break;
				case 1982:
					nom1="Espa&ntilde;a 1982";
					id=119;
					break;
				case 1978:
					nom1="Argentina 1978";			
					id=118;
					break;
				case 1974:
					nom1="Alemania 1974";
					id=114;
					break;
				case 1970:
					nom1="M&eacute;xico 1970";
					id=113;
					break;
				case 1966:
					nom1="Inglaterra 1966";
					id=112;
					break;
				case 1962:
					nom1="Chile 1962";
					id=111;
					break;
				case 1958:
					nom1="Suecia 1958";			
					id=110;
					break;
				case 1954:
					nom1="Suiza 1954";
					id=109;
					break;
				case 1950:
					nom1="Brasil 1950";
					id=108;
					break;
				case 1938:
					nom1="Francia 1938";
					id=107;
					break;
				case 1934:
					nom1="Italia 1934";
					id=106;
					break;
				case 1930:
					nom1="Uruguay 1930";
					id=105;
					break;		
			}
			/*nom1="Uruguay 1930";
			$(".seleccionado-hist").html(nom1);*/
			$(".seleccionado-hist").html(nom1);
			
			
		}
		else
		{
		id_gral=arrt[6];
		
		nombre=arrt[7].split("-");
							
		if (nombre.length==3)
		{							
			nom1="Corea/Jap&oacute;n 2002";
		}
		else
		{
			nom1=nombre[0]+' ';
			if (nombre[1].length==2)
			{
				nom1+='19'+nombre[1];
			}
			else
			{
				nom1+=nombre[1];
			}							
		}
		//console.log("nom1: "+nom1);
		//$("content2 p").html(nom1);
		$(".seleccionado-hist").html(nom1);
		//Document.write('<p>'+nom1);
		
		switch (arrt[5])
		{			
			case "selecciones-mundial-fifa-historico":
				nombre2="Equipos";
				break;
			case "calendario-mundial-fifa-historico":
				nombre2="Estad&iacute;sticas";
				break;
			case "equipos-mundial-fifa-historico":
				nombre2="Equipos";
				break;
			case "goleo-mundial-fifa-historico":
				nombre2="Goleo por Equipo";
				break;
			case "goleo-recibido-mundial-fifa-historico":
				nombre2="Goles Recibidos";
				break;
			case "goleo-individual-mundial-fifa-historico":
				nombre2="Goleo Individual";
				break;
			case "tarjetas-mundial-fifa-historico":
				nombre2="Tarjetas";
				break;
			case "porteros-mundial-fifa-historico":
				nombre2="Porteros";
				break;
			case "expulsados-mundial-fifa-historico":
				nombre2="Expulsados";			
				break;
			case "autogoles-mundial-fifa-historico":
				nombre2="Autogoles";
				break;
			case "penales-mundial-fifa-historico":
				nombre2="Penales";
				break;
			case "arbitros-mundial-fifa-historico":
				nombre2="&Aacute;rbitros";
				break;
		}	
		//console.log("nombre2: "+nombre2);
		//$("content2 p").html(nombre2);
		$(".seleccionado-hist2").html(nombre2);
	}
	}//document.write('<p>'+nombre2);
	
	$( ".list1 li" ).click(function () { 
		url="http://stats.televisadeportes.esmas.com/futbol/torneo/";
		var id_combo1;
		if (arrt[7]=="" || arrt[7]==null)
		{
			id_combo1=20;		
			arrt[5]="selecciones-mundial-fifa-historico";
		}
		else
		{
		combo1=$(this).children("p").html();
		combo2=$(".seleccionado-hist2").html();
		combo2=combo2.replace(/\s/g,'');
		id_combo1=$(this).attr("id");
		}
		//console.log("combo2:"+combo2);
		 		//combo2="Estadísticas";	
		//alert("combo2: "+combo2);
		/*switch (arrt[5])
		{					
			case "selecciones-mundial-fifa-historico":
				url+="selecciones-mundial-fifa-historico";
				break;
			case "":
				url+="calendario-mundial-fifa-historico";
				break;
			case "Equipos":
				url+="equipos-mundial-fifa-historico";
				break;
			case "GoleoporEquipo":
				url+="goleo-mundial-fifa-historico";
				break;
			case "GolesRecibidos":
				url+="goleo-recibido-mundial-fifa-historico";
				break;
			case "GoleoIndividual":
				url+="goleo-individual-mundial-fifa-historico";
				break;
			case "Tarjetas":
				url+="tarjetas-mundial-fifa-historico";
				break;
			case "Porteros":
				url+="porteros-mundial-fifa-historico";
				break;
			case "Expulsados":
				url+="expulsados-mundial-fifa-historico";			
				break;
			case "Autogoles":
				url+="autogoles-mundial-fifa-historico";
				break;
			case "Penales":
				url+="penales-mundial-fifa-historico";
				break;
			case "Arbitros":
				url+="arbitros-mundial-fifa-historico";
				break;
				
		}*/
		url+=arrt[5];
		/*switch (combo2)
		{					
			case "GruposyPartidos":
				url+="selecciones-mundial-fifa-historico";
				break;
			case "Estadísticas":
				url+="calendario-mundial-fifa-historico";
				break;
			case "Equipos":
				url+="equipos-mundial-fifa-historico";
				break;
			case "GoleoporEquipo":
				url+="goleo-mundial-fifa-historico";
				break;
			case "GolesRecibidos":
				url+="goleo-recibido-mundial-fifa-historico";
				break;
			case "GoleoIndividual":
				url+="goleo-individual-mundial-fifa-historico";
				break;
			case "Tarjetas":
				url+="tarjetas-mundial-fifa-historico";
				break;
			case "Porteros":
				url+="porteros-mundial-fifa-historico";
				break;
			case "Expulsados":
				url+="expulsados-mundial-fifa-historico";			
				break;
			case "Autogoles":
				url+="autogoles-mundial-fifa-historico";
				break;
			case "Penales":
				url+="penales-mundial-fifa-historico";
				break;
			case "Arbitros":
				url+="arbitros-mundial-fifa-historico";
				break;
				
		}*/
		//console.log("url antes del combo1: "+url);
		/*switch (combo1)
		{
			case "Brasil 2014":
				url+="/359/Brasil-2014";
				id=359;
				break;
			case "Sudáfrica 2010":
				url+="/101/Sudafrica-2010";
				id=101;
				break;
			case "Alemania 2006":
				url+="/21/Alemania-2006";
				id=21;
				break;
			case "Corea/Japón 2002":
				url+="/124/Corea-Japon-2002";
				id=124;
				break;
			case "Francia 1998":
				url+="/123/Francia-98";
				id=123;
				break;
			case "E.U.A. 1994":
				url+="/122/E.U.A.-94";
				id=122;
				break;
			case "Italia 1990":
				url+="/121/Italia-90";
				id=121;
				break;
			case "México 1986":
				url+="/120/México-86";
				id=120;
				break;
			case "España 1982":
				url+="/119/Espana-82";
				id=119;
				break;
			case "Argentina 1978":
				url+="/118/Argentina-78";			
				id=118;
				break;
			case "Alemania 1974":
				url+="/114/Alemania-74";
				id=114;
				break;
			case "México 1970":
				url+="/113/Mexico-70";
				id=113;
				break;
			case "Inglaterra 1966":
				url+="/112/Inglaterra-66";
				id=112;
				break;
			case "Chile 1962":
				url+="/111/Chile-62";
				id=111;
				break;
			case "Suecia 1958":
				url+="/110/Suecia-58";			
				id=110;
				break;
			case "Suiza 1954":
				url+="/109/Suiza-54";
				id=109;
				break;
			case "Brasil 1950":
				url+="/108/Brasil-50";
				id=108;
				break;
			case "Francia 1938":
				url+="/107/Francia-38";
				id=107;
				break;
			case "Italia 1934":
				url+="/106/Italia-34";
				id=106;
				break;
			case "Uruguay 1930":
				url+="/105/Uruguay-30";
				id=105;
				break;		
		}*/
		switch (parseInt(id_combo1))
		{
			case 1:
				url+="/359/Brasil-2014";
				id=359;
				break;
			case 2:
				url+="/101/Sudafrica-2010";
				id=101;
				break;
			case 3:
				url+="/21/Alemania-2006";
				id=21;
				break;
			case 4:
				url+="/124/Corea-Japon-2002";
				id=124;
				break;
			case 5:
				url+="/123/Francia-98";
				id=123;
				break;
			case 6:
				url+="/122/E.U.A.-94";
				id=122;
				break;
			case 7:
				url+="/121/Italia-90";
				id=121;
				break;
			case 8:
				url+="/120/Mexico-86";
				id=120;
				break;
			case 9:
				url+="/119/Espana-82";
				id=119;
				break;
			case 10:
				url+="/118/Argentina-78";			
				id=118;
				break;
			case 11:
				url+="/114/Alemania-74";
				id=114;
				break;
			case 12:
				url+="/113/Mexico-70";
				id=113;
				break;
			case 13:
				url+="/112/Inglaterra-66";
				id=112;
				break;
			case 14:
				url+="/111/Chile-62";
				id=111;
				break;
			case 15:
				url+="/110/Suecia-58";			
				id=110;
				break;
			case 16:
				url+="/109/Suiza-54";
				id=109;
				break;
			case 17:
				url+="/108/Brasil-50";
				id=108;
				break;
			case 18:
				url+="/107/Francia-38";
				id=107;
				break;
			case 19:
				url+="/106/Italia-34";
				id=106;
				break;
			case 20:
				url+="/105/Uruguay-30";
				id=105;
				break;		
		}
		window.location = url;		
		//console.log("url: "+url);
	});
	
	$( ".list2 li" ).click( function () {
		url="http://stats.televisadeportes.esmas.com/futbol/torneo/";		
		var id_combo2;
		
		if (arrt[7]=="" || arrt[7]==null)
		{
			id_combo2=1;		
			id_gral=105;
		}
		else
		{
		id_combo2=$(this).attr("id");
		/*
		url="http://stats.televisadeportes.esmas.com/futbol/torneo/";
		combo1=$(this).children("p").html();
		combo2=$(".seleccionado-hist2").html();
		combo2=combo2.replace(/\s/g,'');
		*/
		
		//alert($(this).attr("id"));
		
		combo2=$(this).children("p").html();
		combo1=$(".seleccionado-hist").html();		
		combo1=combo1.replace(/\s/g,'');
		}
		//console.log("combo1: "+combo1);
		switch (parseInt(id_combo2))
		{			
			case 1:
				url+="selecciones-mundial-fifa-historico";
				break;
			case 2:
				url+="calendario-mundial-fifa-historico";
				break;
			case 3:
				url+="equipos-mundial-fifa-historico";
				break;
			case 4:
				url+="goleo-mundial-fifa-historico";
				break;
			case 5:
				url+="goleo-recibido-mundial-fifa-historico";
				break;
			case 6:
				url+="goleo-individual-mundial-fifa-historico";
				break;
			case 7:
				url+="tarjetas-mundial-fifa-historico";
				break;
			case 8:
				url+="porteros-mundial-fifa-historico";
				break;
			case 9:
				url+="expulsados-mundial-fifa-historico";			
				break;
			case 10:
				url+="autogoles-mundial-fifa-historico";
				break;
			case 11:
				url+="penales-mundial-fifa-historico";
				break;
			case 12:
				url+="arbitros-mundial-fifa-historico";
				break;
		}
		
		/*switch (combo2)
		{			
			case "Grupos y Partidos":
				url+="selecciones-mundial-fifa-historico";
				break;
			case "Estadísticas":
				url+="calendario-mundial-fifa-historico";
				break;
			case "Equipos":
				url+="equipos-mundial-fifa-historico";
				break;
			case "Goleo por Equipo":
				url+="goleo-mundial-fifa-historico";
				break;
			case "Goles Recibidos":
				url+="goleo-recibido-mundial-fifa-historico";
				break;
			case "Goleo Individual":
				url+="goleo-individual-mundial-fifa-historico";
				break;
			case "Tarjetas":
				url+="tarjetas-mundial-fifa-historico";
				break;
			case "Porteros":
				url+="porteros-mundial-fifa-historico";
				break;
			case "Expulsados":
				url+="expulsados-mundial-fifa-historico";			
				break;
			case "Autogoles":
				url+="autogoles-mundial-fifa-historico";
				break;
			case "Penales":
				url+="penales-mundial-fifa-historico";
				break;
			case "Arbitros":
				url+="arbitros-mundial-fifa-historico";
				break;
		}*/
		switch (parseInt(id_gral))
		{
			case 359:
				url+="/359/Brasil-2014";
				id=359;
				break;
			case 101:
				url+="/101/Sudafrica-2010";
				id=101;
				break;
			case 21:
				url+="/21/Alemania-2006";
				id=21;
				break;
			case 124:
				url+="/124/Corea-Japon-2002";
				id=124;
				break;
			case 123:
				url+="/123/Francia-98";
				id=123;
				break;
			case 122:
				url+="/122/E.U.A.-94";
				id=122;
				break;
			case 121:
				url+="/121/Italia-90";
				id=121;
				break;
			case 120:
				url+="/120/Mexico-86";
				id=120;
				break;
			case 119:
				url+="/119/Espana-82";
				id=119;
				break;
			case 118:
				url+="/118/Argentina-78";			
				id=118;
				break;
			case 114:
				url+="/114/Alemania-74";
				id=114;
				break;
			case 113:
				url+="/113/Mexico-70";
				id=113;
				break;
			case 112:
				url+="/112/Inglaterra-66";
				id=112;
				break;
			case 111:
				url+="/111/Chile-62";
				id=111;
				break;
			case 110:
				url+="/110/Suecia-58";			
				id=110;
				break;
			case 109:
				url+="/109/Suiza-54";
				id=109;
				break;
			case 108:
				url+="/108/Brasil-50";
				id=108;
				break;
			case 107:
				url+="/107/Francia-38";
				id=107;
				break;
			case 106:
				url+="/106/Italia-34";
				id=106;
				break;
			case 105:
				url+="/105/Uruguay-30";
				id=105;
				break;		
		}
		/*switch (combo1)
		{
			case "Brasil2014":
				url+="/359/Brasil-2014";
				id=359;
				break;
			case "Sudáfrica2010":
				url+="/101/Sudafrica-2010";
				id=101;
				break;
			case "Alemania2006":
				url+="/21/Alemania-2006";
				id=21;
				break;
			case "Corea/Japón2002":
				url+="/124/Corea-Japon-2002";
				id=124;
				break;
			case "Francia1998":
				url+="/123/Francia-98";
				id=123;
				break;
			case "E.U.A.1994":
				url+="/122/E.U.A.-94";
				id=122;
				break;
			case "Italia1990":
				url+="/121/Italia-90";
				id=121;
				break;
			case "México1986":
				url+="/120/México-86";
				id=120;
				break;
			case "España1982":
				url+="/119/Espana-82";
				id=119;
				break;
			case "Argentina1978":
				url+="/118/Argentina-78";			
				id=118;
				break;
			case "Alemania1974":
				url+="/114/Alemania-74";
				id=114;
				break;
			case "México1970":
				url+="/113/Mexico-70";
				id=113;
				break;
			case "Inglaterra1966":
				url+="/112/Inglaterra-66";
				id=112;
				break;
			case "Chile1962":
				url+="/111/Chile-62";
				id=111;
				break;
			case "Suecia1958":
				url+="/110/Suecia-58";			
				id=110;
				break;
			case "Suiza1954":
				url+="/109/Suiza-54";
				id=109;
				break;
			case "Brasil1950":
				url+="/108/Brasil-50";
				id=108;
				break;
			case "Francia1938":
				url+="/107/Francia-38";
				id=107;
				break;
			case "Italia1934":
				url+="/106/Italia-34";
				id=106;
				break;
			case "Uruguay1930":
				url+="/105/Uruguay-30";
				id=105;
				break;		
		}*/
		window.location = url;		
		//console.log("url: "+url);
	});	
});