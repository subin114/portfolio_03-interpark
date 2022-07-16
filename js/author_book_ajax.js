/* 저자의 다른책 */

$(function() {

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"프레드릭 배크만" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );



		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author1=str.substring(0,28);

			$(".author_book1 .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book1 .author_textbox").eq(i).append('<p><a href="#">' + author1 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});

});




/* 역자의 다른책 */

$(function() {

	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"생존자들" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(1) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(1) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"세상의 한 조각" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(2) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(2) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"우리와 당신들" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(3) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(3) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"나보다 소중한 사람이 생겨버렸다" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(4) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(4) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"인스티튜트1" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(5) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(5) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});


	$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query:"키르케" },
		headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
	})
	.done(function( msg ) {

		console.log( msg.documents[1].title );
		console.log( msg.documents[1].thumbnail );




		var divs = document.getElementsByTagName('div');

		for(var i=0; i<divs.length; i++){

			var str=msg.documents[i].title;
			var author2=str.substring(0,28);

			$(".author_book2 li:nth-child(6) .author_imgbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
			$(".author_book2 li:nth-child(6) .author_textbox").eq(i).append('<p><a href="#">' + author2 + "</a><p>" + '<h5>' + msg.documents[i].price+"원" + '</h5>');

		}

	});

});