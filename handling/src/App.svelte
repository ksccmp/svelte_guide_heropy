<script>
	const clickHandler = (e) => {
		console.log(e.target);
		console.log(e.currentTarget);
	}

	const wheelHandler = (e) => {
		console.log(e);
	}
</script>

<main>
	<section>
		<h2>preventDefault</h2>
		<a href="https://naver.com"
		   target="_blank"
		   on:click|preventDefault={clickHandler}>
			Naver
		</a>
	</section>

	<section>
		<!-- 최초 실행 후 핸들러 삭제 -->
		<h2>Once</h2>
		<a href="https://naver.com"
		   target="_blank"
		   on:click|preventDefault|once={clickHandler}>
			Naver
		</a>
	</section>

	<section>
		<!-- 버블링 방지 -->
		<h2>stopPropagation</h2>
		<div class="parent"
			 on:click={clickHandler}>
			<div class="child"
				 on:click|stopPropagation={clickHandler}></div>
		</div>
	</section>

	<section>
		<!-- 캡처링 방지 -->
		<h2>capture</h2>
		<div class="parent"
			 on:click|capture={clickHandler}>
			<div class="child"
				 on:click={clickHandler}></div>
		</div>
	</section>

	<section>
		<!-- event의 target과 currentTarget이 일치하는 경우 -->
		<h2>self</h2>
		<div class="parent"
			 on:click|self={clickHandler}>
			<div class="child"></div>
		</div>
	</section>

	<section>
		<!-- 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤, passive: true-->
		<h2>passive</h2>
		<div class="parent wheel"
			 on:wheel|passive={wheelHandler}>
			<div class="child"></div>
		</div>
	</section>
</main>

<style>
	.parent {
		background-color: blueviolet;
		width: 200px;
		height: 150px;
	}

	.child {
		background-color: orange;
		width: 100px;
		height: 75px;
	}

	.wheel, .parent {
		overflow: auto;
	}

	.wheel, .child {
		height: 100px;
	}
</style>