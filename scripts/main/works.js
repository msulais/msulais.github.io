(() => {
'use strict'
const NON_ACTIVE_WORK_WIDTH = 192
const MAX_WORKS_SHOW = 4
const IMAGE_SOURCE_FALLBACK = '/images/no-image.png'
const animation_options = {
	duration: 300,
	easing: 'cubic-bezier(.15, 0, 0, 1)',
}

/** @type {{id: string, name: string, images: string[], link: string, description: string, tags: string[]}[]} */
const works = [
	{
		id: generate_id(),
		name: 'Redmerah',
		images: [
			'/images/works/redmerah/redmerah-cover.png',
			'/images/works/redmerah/redmerah-1.png',
			'/images/works/redmerah/redmerah-2.png',
			'/images/works/redmerah/redmerah-3.png',
		],
		description: `<p>
	<span lang="en">
		Redmerah is a comprehensive web application designed to bring together a suite of powerful
		tools into one efficient and user-friendly platform. From an advanced calculator and todo
		tasks to a color maker, gradient generator, QR code reader/scanner, randomizer, and more,
		Redmerah simplifies everyday tasks without the clutter and frustrations of traditional apps.
	</span>
	<span lang="id">
		Redmerah adalah aplikasi web komprehensif yang dirancang untuk menyatukan serangkaian alat
		canggih ke dalam satu platform yang efisien dan ramah pengguna. Mulai dari kalkulator
		canggih, tugas todo, pembuat warna, generator gradien, pembaca/pemindai QR code, pengacak,
		dan banyak lagi, Redmerah menyederhanakan tugas sehari-hari tanpa kekacauan dan frustrasi
		yang sering ditemui pada aplikasi tradisional.
	</span>
</p>
<p>
	<span lang="en">
		Frustrated with apps that charge fees for basic features, overwhelm users with ads, or have
		clunky interfaces, I built Redmerah to be different: <strong>fast, intuitive, and free of
			unnecessary distractions.</strong>
	</span>
	<span lang="id">
		Frustrasi dengan aplikasi yang mengenakan biaya untuk fitur dasar, membanjiri pengguna
		dengan iklan, atau memiliki antarmuka yang kikuk, saya membangun Redmerah untuk menjadi
		berbeda: <strong>cepat, intuitif, dan bebas dari gangguan yang tidak perlu.</strong>
	</span>
</p>
<p>
	<span lang="en">Key features:</span>
	<span lang="id">Fitur utama:</span>
</p>
<ul>
	<li>
		<span lang="en">
			<strong>Local-First Approach:</strong> All data is stored and processed locally in your
			browser using the <strong>IndexedDB API</strong>, ensuring lightning-fast performance
			and enhanced privacy. No server-side operations mean no delays or constant page reloads.
		</span>
		<span lang="id">
			<strong>Pendekatan Lokal:</strong> Semua data disimpan dan diproses secara lokal di
			browser Anda menggunakan <strong>API IndexedDB</strong>, memastikan kinerja yang sangat
			cepat dan privasi yang lebih baik. Tanpa operasi di sisi server berarti tidak ada
			penundaan atau pemuatan halaman yang terus menerus.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Handcrafted UI:</strong> Every component is custom-built by me using
			<strong>Astro</strong> and <strong>SolidJS</strong>, with no reliance on third-party
			libraries. This results in a seamless, lightweight, and highly intuitive user
			experience.
		</span>
		<span lang="id">
			<strong>Antarmuka Buatan Tangan:</strong>
			Setiap komponen dibuat secara khusus oleh saya menggunakan <strong>Astro</strong> dan
			<strong>SolidJS</strong>, tanpa ketergantungan pada pustaka pihak ketiga. Hasilnya
			adalah pengalaman pengguna yang mulus, ringan, dan sangat intuitif.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Versatile Tools:</strong> A growing collection of utilities, including:
		</span>
		<span lang="id">
			<strong>Alat Serbaguna:</strong> Koleksi utilitas yang terus berkembang, termasuk:
		</span>
		<ul>
			<li>Advanced calculator</li>
			<li>TODO Tasks</li>
			<li>Color maker, picker, and gradient generator</li>
			<li>QR code reader/scanner</li>
			<li>Randomizer</li>
			<li>
				<span lang="en">And much more!</span>
				<span lang="id">Dan banyak lagi!</span>
			</li>
		</ul>
	</li>
</ul>
<p>
	<span lang="en">
		Redmerah is a testament to my passion for creating efficient, user-centric applications that
		prioritize performance, privacy, and simplicity. It’s a project born out of the desire to
		solve real-world problems and provide a better alternative to bloated, ad-ridden tools.
	</span>
	<span lang="id">
		Redmerah adalah bukti hasrat saya dalam menciptakan aplikasi efisien yang berfokus pada
		pengguna dengan mengutamakan kinerja, privasi, dan kesederhanaan. Ini adalah proyek yang
		lahir dari keinginan untuk memecahkan masalah dunia nyata dan memberikan alternatif yang
		lebih baik dari alat yang penuh dengan iklan dan tidak efisien.
	</span>
</p>`,
		link: 'https://redmerah.com',
		tags: [
			'Astro',
			'SolidJS',
			'SCSS'
		]
	},
	{
		id: generate_id(),
		name: 'Artic',
		images: [
			'/images/works/artic/artic-cover.png',
			'/images/works/artic/artic-1.png',
			'/images/works/artic/artic-2.png',
			'/images/works/artic/artic-3.png',
		],
		description: `<p>
	<span lang="en">
		Artic is a fully responsive and modern blog/magazine template built with
		<strong>Next.js</strong>, designed to cater to content creators, news platforms, and online
		publications. This template offers a sleek and user-friendly interface with a focus on
		customization and functionality.
	</span>
	<span lang="id">
		Artic adalah template blog/majalah yang sepenuhnya responsif dan modern, dibangun dengan
		<strong>Next.js</strong>, dirancang untuk memenuhi kebutuhan pembuat konten, platform
		berita, dan publikasi online. Template ini menawarkan antarmuka yang elegan dan ramah
		pengguna dengan fokus pada kustomisasi dan fungsionalitas.
	</span>
</p>
<p>
	<span lang="en">Key features:</span>
	<span lang="id">Fitur utama:</span>
</p>
<ul>
	<li>
		<span lang="en">
			<strong>Dark/Light Theme:</strong> Seamless theme switching for enhanced user
			experience.
		</span>
		<span lang="id">
			<strong>Tema Gelap/Terang:</strong> Pergantian tema yang mulus untuk pengalaman pengguna
			yang lebih baik.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Advanced Search & Filters:</strong> Robust search functionality with filtering
			options for categories and tags.
		</span>
		<span lang="id">
			<strong>Pencarian & Filter Lanjutan:</strong> Fungsi pencarian yang kuat dengan opsi
			penyaringan berdasarkan kategori dan tag.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Dynamic Content Organization:</strong> Easily categorize and tag posts for
			better content discoverability.
		</span>
		<span lang="id">
			<strong>Pengaturan Konten Dinamis:</strong> Mudah mengategorikan dan menandai postingan
			untuk meningkatkan penemuan konten.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Responsive Design:</strong> Optimized for all devices, ensuring a smooth
			experience across desktops, tablets, and mobile devices.
		</span>
		<span lang="id">
			<strong>Desain Responsif:</strong> Dioptimalkan untuk semua perangkat, memastikan
			pengalaman yang lancar di desktop, tablet, dan perangkat seluler.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Modern UI/UX:</strong> Clean and intuitive design tailored for readability and
			engagement.
		</span>
		<span lang="id">
			<strong>UI/UX Modern:</strong> Desain bersih dan intuitif yang dirancang untuk
			keterbacaan dan keterlibatan.
		</span>
	</li>
</ul>
<p>
	<span lang="en">
		This project was initially developed as a premium template for sale. However, it was not
		accepted by certain template marketplaces due to their specific guidelines or requirements.
		Despite this, Artic remains a showcase of my expertise in front-end development, Next.js,
		and creating reusable, modular components. It’s a testament to my ability to build scalable,
		feature-rich web applications with a focus on user experience.
	</span>
	<span lang="id">
		Proyek ini awalnya dikembangkan sebagai template premium untuk dijual. Namun, template ini
		tidak diterima oleh beberapa pasar template tertentu karena pedoman atau persyaratan khusus
		mereka. Meskipun demikian, Artic tetap menjadi bukti keahlian saya dalam pengembangan
		front-end, Next.js, dan pembuatan komponen yang dapat digunakan kembali serta modular.
		Ini adalah bukti kemampuan saya dalam membangun aplikasi web yang kaya fitur dan dapat
		diskalakan dengan fokus pada pengalaman pengguna.
	</span>
</p>`,
		link: 'https://artic-delta.vercel.app',
		tags: [
			'Next.js',
			'React',
			'SCSS'
		]
	},
	{
		id: generate_id(),
		name: 'Portfolio',
	  	images: [
			'/images/works/portfolio/portfolio-cover.png',
			'/images/works/portfolio/portfolio-1.png',
			'/images/works/portfolio/portfolio-2.png',
			'/images/works/portfolio/portfolio-3.png',
		],
		description: `<p>
	<span lang="en">
		This portfolio website is a reflection of my skills and expertise as a front-end web
		developer. Built entirely from scratch using vanilla <strong>HTML</strong>,
		<strong>CSS</strong>, and <strong>JavaScript</strong>, it showcases my ability to create
		clean, responsive, and interactive web experiences without relying on any third-party
		libraries or frameworks.
	</span>
	<span lang="id">
		Website portofolio ini merupakan cerminan dari keterampilan dan keahlian saya sebagai
		seorang front-end web developer. Dibangun sepenuhnya dari awal menggunakan
		<strong>HTML</strong>, <strong>CSS</strong>, dan <strong>JavaScript</strong> murni,
		portofolio ini menunjukkan kemampuan saya dalam menciptakan pengalaman web yang bersih,
		responsif, dan interaktif tanpa bergantung pada library atau framework pihak ketiga.
	</span>
</p>
<p>
	<span lang="en">Key features:</span>
	<span lang="id">Fitur utama:</span>
</p>
<ul>
	<li>
		<span lang="en">
			<strong>Custom Animations & Transitions:</strong> All animations and transitions are
			handcrafted using <strong>JavaScript</strong> and <strong>CSS</strong>, demonstrating my
			deep understanding of front-end development and creativity in enhancing user experience.
		</span>
		<span lang="id">
			<strong>Animasi & Transisi Kustom:</strong> Semua animasi dan transisi dibuat secara
			manual menggunakan <strong>JavaScript</strong> dan <strong>CSS</strong>, menunjukkan
			pemahaman mendalam saya tentang pengembangan front-end dan kreativitas dalam
			meningkatkan pengalaman pengguna.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Multi-Theme Support:</strong> Includes a dynamic theme switcher with options for
			<strong>light, dark, and system theme</strong>, ensuring a personalized and visually
			appealing experience for every user.
		</span>
		<span lang="id">
			<strong>Dukungan Multi-Tema:</strong> Dilengkapi dengan fitur pengganti tema dinamis
			yang mencakup opsi <strong>tema terang</strong>, <strong>gelap</strong>, dan
			<strong>tema sistem</strong>, memastikan pengalaman yang personal dan menarik secara
			visual untuk setiap pengguna.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Bilingual Support:</strong> supports <strong>English</strong> and
			<strong>Indonesian</strong> languages, showcasing my ability to create multilingual and
			accessible web applications.
		</span>
		<span lang="id">
			<strong>Dukungan Bahasa Ganda:</strong> Mendukung penuh bahasa <strong>Inggris</strong>
			dan <strong>Indonesia</strong>, menampilkan kemampuan saya dalam membuat aplikasi web
			yang multilingual dan mudah diakses.
		</span>
	</li>
	<li>
		<span lang="en">
			<strong>Responsive Design:</strong> Optimized for all devices, providing a seamless
			experience across desktops, tablets, and mobile devices.
		</span>
		<span lang="id">
			<strong>Desain Responsif:</strong> Dioptimalkan untuk semua perangkat, memberikan
			pengalaman yang mulus di desktop, tablet, dan ponsel.
		</span>
	</li>
</ul>
<p>
	<span lang="en">
		This portfolio is more than just a showcase of my work—it’s a testament to my proficiency in
		front-end development, attention to detail, and commitment to delivering high-quality,
		user-centric web solutions. It’s designed to give visitors a clear understanding of my
		skills, projects, and what I bring to the table as a developer.
	</span>
	<span lang="id">
		Portofolio ini lebih dari sekadar pameran karya saya—ini adalah bukti kemahiran saya dalam
		pengembangan front-end, perhatian terhadap detail, dan komitmen untuk memberikan solusi web
		berkualitas tinggi yang berfokus pada pengguna. Portofolio ini dirancang untuk memberikan
		pemahaman yang jelas tentang keterampilan, proyek, dan nilai yang saya tawarkan sebagai
		seorang developer.
	</span>
</p>`,
		link: 'https://msulais.github.io',
		tags: [
			'HTML',
			'CSS',
			'JavaScript'
		]
	},
	{
		id: generate_id(),
		name: 'UI/UX Design',
		images: [
			'/images/works/ui-ux-design/ui-ux-design-cover.png',
		],
		description: `<p>
	<span lang="en">
		As a front-end developer with a passion for design, I use <strong>Figma</strong> to create
		UI/UX designs that range from fun, conceptual ideas to practical interfaces for apps I
		develop. This section showcases my creativity and ability to think through user experiences,
		whether I’m designing for a real-world project or simply exploring new ideas for fun.
	</span>
	<span lang="id">
		Sebagai seorang front-end developer yang memiliki passion dalam desain, saya menggunakan
		<strong>Figma</strong> untuk membuat desain UI/UX yang mencakup berbagai ide konsep yang
		menyenangkan hingga antarmuka praktis untuk aplikasi yang saya kembangkan. Bagian ini
		menampilkan kreativitas dan kemampuan saya dalam memikirkan pengalaman pengguna, baik saat
		mendesain untuk proyek nyata maupun sekadar mengeksplorasi ide-ide baru untuk
		bersenang-senang.
	</span>
</p>
<p>
	<span lang="en">Key highlights:</span>
	<span lang="id">Highlight utama:</span>
</p>
<ul>
	<li>
		<span lang="en">
			<strong>A Mix of Concepts & Real Projects:</strong> Some designs are playful
			explorations of app ideas I may not develop due to complexity, while others are
			practical blueprints for apps I’ve built or plan to build.
		</span>
		<span lang="id">
			<strong>Kombinasi Konsep & Proyek Nyata:</strong> Beberapa desain adalah eksplorasi
			kreatif dari ide aplikasi yang mungkin tidak saya kembangkan karena kompleksitasnya,
			sementara yang lain adalah desain praktis untuk aplikasi yang sudah atau akan saya buat.
		</span>
	</li>
	<li>
		<span lang="en"><strong>Tools & Workflow:</strong></span>
		<span lang="id"><strong>Alat & Workflow</strong></span>
		<ul>
			<li>
				<span lang="en">
					<strong>Figma:</strong> Used for creating wireframes, mockups, and interactive
					prototypes.
				</span>
				<span lang="id">
					<strong>Figma:</strong> Digunakan untuk membuat wireframe, mockup, dan prototipe
					interaktif.
				</span>
			</li>
			<li>
				<span lang="en">
					<strong>Design Systems:</strong> I establish consistent typography, color
					palettes, and reusable components to maintain visual coherence.
				</span>
				<span lang="id">
					<strong>Sistem Desain:</strong> Saya menetapkan tipografi, palet warna, dan
					komponen yang dapat digunakan kembali untuk menjaga konsistensi visual.
				</span>
			</li>
			<li>
				<span lang="en">
					<strong>Developer-Friendly Designs:</strong> When designing for real projects,
					I ensure the designs are practical to implement and optimized for performance.
				</span>
				<span lang="id">
					<strong>Desain yang Ramah Developer:</strong> Saat mendesain untuk proyek nyata,
					saya memastikan desain tersebut praktis untuk diimplementasikan dan dioptimalkan
					untuk performa.
				</span>
			</li>
		</ul>
	</li>
	<li>
		<span lang="en"><strong>Focus Areas:</strong></span>
		<span lang="id"><strong>Fokus Utama</strong></span>
		<ul>
			<li>
				<span lang="en">
					<strong>Responsive Design:</strong> Interfaces designed to work flawlessly
					across devices, from mobile to desktop.
				</span>
				<span lang="id">
					<strong>Desain Responsif:</strong> Antarmuka yang dirancang untuk bekerja dengan
					mulus di berbagai perangkat, dari mobile hingga desktop.
				</span>
			</li>
			<li>
				<span lang="en">
					<strong>User-Centered Approach:</strong> Designs that prioritize usability,
					accessibility, and intuitive navigation.
				</span>
				<span lang="id">
					<strong>Pendekatan Berpusat pada Pengguna:</strong> Desain yang mengutamakan
					kegunaan, aksesibilitas, dan navigasi yang intuitif.
				</span>
			</li>
			<li>
				<span lang="en">
					<strong>Microinteractions:</strong> Thoughtful animations and transitions that
					enhance user engagement and bring interfaces to life.
				</span>
				<span lang="id">
					<strong>Microinteractions:</strong> Animasi dan transisi yang dipikirkan dengan
					matang untuk meningkatkan keterlibatan pengguna dan menghidupkan antarmuka.
				</span>
			</li>
		</ul>
	</li>
</ul>
<p>
	<span lang="en">
		Designing for fun allows me to experiment with new ideas, push creative boundaries, and stay
		inspired. At the same time, designing for real projects ensures I can bridge the gap between
		design and development, creating cohesive and polished digital experiences. This balance of
		creativity and practicality is what makes my work unique.
	</span>
	<span lang="id">
		Mendesain untuk kesenangan memungkinkan saya bereksperimen dengan ide-ide baru, mendorong
		batas kreativitas, dan tetap terinspirasi. Sementara itu, mendesain untuk proyek nyata
		memastikan saya dapat menjembatani kesenjangan antara desain dan pengembangan, menciptakan
		pengalaman digital yang kohesif dan berkualitas. Keseimbangan antara kreativitas dan
		kepraktisan inilah yang membuat karya saya unik.
	</span>
</p>
<p>
	<span lang="en">
		This collection is a testament to my love for design and my ability to think through user
		experiences, whether I’m building an app or just exploring a cool concept. Explore my
		designs to see how I combine creativity, technical skills, and user empathy to bring ideas
		to life—even if they’re just for fun!
	</span>
	<span lang="id">
		Koleksi ini adalah bukti kecintaan saya pada desain dan kemampuan saya dalam memikirkan
		pengalaman pengguna, baik saat membangun aplikasi maupun sekadar mengeksplorasi konsep yang
		keren. Jelajahi desain saya untuk melihat bagaimana saya menggabungkan kreativitas,
		keterampilan teknis, dan empati pengguna untuk menghidupkan ide—bahkan jika itu hanya untuk
		bersenang-senang!
	</span>
</p>`,
		link: 'https://pin.it/Mjb3lapM2',
		tags: [
			'Figma'
		]
	},
]

/**@type HTMLDivElement[] */
const containers = []

/**@type HTMLDivElement */
const div = document.querySelector('.mp-works-portfolio')
let is_animating = false

/**@type HTMLDialogElement */
const dialog = document.getElementById('mp-works-dialog')

/**
 * @param {string} id
 */
function show_detail_work(id) {
	const work = works.find(v => v.id === id)
	const images = dialog.firstElementChild.firstElementChild
	const images_indicator = images.nextElementSibling
	const h2 = images_indicator.nextElementSibling
	const ul = h2.nextElementSibling

	/**@type HTMLAnchorElement */
	const a = ul.nextElementSibling
	const description = a.nextElementSibling

	/**@type HTMLImageElement[] */
	const images_elements = []

	/**@type HTMLButtonElement */
	let selected_image_indicator

	/**@type number */
	let selected_image_index = 0

	let is_image_animating = false

	images.replaceChildren(...work.images.map((v, i) => {
		const img = document.createElement('img')
		img.src = v
		images_elements.push(img)
		if (i == 0) {
			img.setAttribute('data-selected', '')
		}

		return img
	}))
	images_indicator.replaceChildren(...work.images.map((v, i) => {
		const button = document.createElement('button')
		const img = document.createElement('img')
		img.src = v
		button.onclick = () => {
			if (selected_image_indicator === button || is_image_animating) return

			selected_image_indicator.removeAttribute('data-selected')
			button.setAttribute('data-selected', '')
			selected_image_indicator = button
			is_image_animating = true

			let image = images_elements[selected_image_index]
			const reverse = i < selected_image_index
			const width = image.clientWidth
			image.animate({
				left: ['0px', reverse? width + 'px' : '0x'],
				width: [width + 'px', '0px']
			}, animation_options).finished.then(() => {
				image.removeAttribute('data-selected')
				selected_image_index = i
				image = images_elements[selected_image_index]
				image.setAttribute('data-selected', '')
				const width = image.clientWidth
				image.animate({
					left: [reverse? '0x' : width + 'px', '0px'],
					width: ['0px', width + 'px']
				}, animation_options).finished.then(() => is_image_animating = false)
			})
		}
		if (i === 0) {
			button.setAttribute('data-selected', '')
			selected_image_indicator = button
		}

		button.appendChild(img)
		return button
	}))
	h2.textContent = work.name
	ul.replaceChildren(...work.tags.map(v => {
		const li = document.createElement('li')
		li.textContent = v
		return li
	}))
	a.href = work.link
	description.innerHTML = work.description
	dialog.showModal()
	dialog.animate({
		top: ['100%', '50%'],
		translate: ['-50% 0', '-50% -50%'],
	}, animation_options)
}

/**
 * @param {MouseEvent} ev
 */
function handle_click(ev) {
	/**@type HTMLDivElement */
	const active = document.activeElement
	if (!active || !div.contains(active)) return

	const children = div.children
	const child1 = children.item(0)
	const work_id = active.dataset.workId
	if (!child1) return
	if (child1 === active) {
		ev.stopImmediatePropagation()
		show_detail_work(work_id)
		return
	}

	const index = [...children].findIndex(el => el === active)
	if (index < 0 || is_animating) return

	if (window.matchMedia("(max-width: 700px)").matches) {
		ev.stopImmediatePropagation()
		show_detail_work(work_id)
		return
	}

	is_animating = true
	const non_active_width = children.item(1)?.clientWidth ?? NON_ACTIVE_WORK_WIDTH
	const width_child1 = child1.clientWidth
	const width = non_active_width
	for (let i = 1; i < children.length; i++) {
		/** @type HTMLElement */
		const c = children.item(i)

		if (c === active) continue
		c.style.setProperty('min-width', non_active_width + 'px')
		c.style.setProperty('max-width', non_active_width + 'px')
	}

	active.style.setProperty('min-width', width_child1 + 'px')
	active.style.setProperty('max-width', width_child1 + 'px')
	active.animate({
		minWidth: [width + 'px', width_child1 + 'px'],
		maxWidth: [width + 'px', width_child1 + 'px'],
	}, animation_options)

	let j = 0
	let k = 0

	/**
	 * @param {HTMLElement} child
	 */
	function animate_done_1(child){
		++j
		child.remove()
		div.append(child)

		const is_last = j == index

		if (is_last && containers.length > MAX_WORKS_SHOW) {
			const children = div.children
			const start_index = MAX_WORKS_SHOW - index
			const leftover = containers.length - MAX_WORKS_SHOW
			const n = leftover > index? index : leftover
			for (let i = start_index; i < (start_index + n); i++) {
				/**@type HTMLElement */
				const child = children.item(i)
				child.style.setProperty('min-width', non_active_width + 'px')
				child.style.setProperty('max-width', non_active_width + 'px')
				child.querySelector('h3').animate({
					opacity: [0, 1],
				}, animation_options)

				child.animate(
					{
						minWidth: ['0px', non_active_width + 'px'],
						maxWidth: ['0px', non_active_width + 'px']
					},
					animation_options
				).finished.then(() => {
					child.style.removeProperty('min-width')
					child.style.removeProperty('max-width')
				})
			}
		}

		child.querySelector('h3').animate({
			opacity: [0, 1],
		}, animation_options)

		child.animate({
			minWidth: ['0px', non_active_width + 'px'],
			maxWidth: ['0px', non_active_width + 'px'],
			marginRight: ['0px', is_last? '0px' : '16px'],
		}, animation_options).finished.then(() => animate_done_2())
	}

	function animate_done_2(){
		++k
		if (k < index) return
		active.style.removeProperty('min-width')
		active.style.removeProperty('max-width')
		is_animating = false
		const children = div.children
		for (let i = 1; i < children.length; i++) {
			/** @type HTMLElement */
			const c = children.item(i)
			c.style.removeProperty('min-width')
			c.style.removeProperty('max-width')
		}
	}

	for (let i = 0; i < index; i++) {
		const child = children.item(i)
		const width = i == 0? width_child1 : non_active_width
		child.querySelector('h3').animate({
			opacity: [1, 0],
		}, animation_options)
		child.animate({
			minWidth: [width + 'px', '0px'],
			maxWidth: [width + 'px', '0px'],
			marginRight: ['16px', '0px'],
		}, animation_options).finished.then(() => animate_done_1(child))
	}
}

/**
 * @param {KeyboardEvent} ev
 */
function handle_keydown(ev) {
	/**@type HTMLElement */
	const active = document.activeElement
	if (!active || !div.contains(active)) return

	const code = ev.code
	if (code !== 'Space' && code !== 'Enter') return
	if (!active.dataset.workId) return

	active.click()
}

function init_works() {
	div.addEventListener('keydown', handle_keydown)
	div.addEventListener('click', handle_click)

	for (const work of works) {
		const container = document.createElement('div')
		const header = document.createElement('h3')
		const image = document.createElement('img')
		const paragraph = document.createElement('p')
		image.src = work.images[0]
		image.alt = work.name
		image.onload = () => {
			containers.push(container)
			if (containers.length < works.length) return

			const skeletons = div.querySelectorAll('[data-none]')
			for (let i = 0; i < skeletons.length; i++) {
				const d = skeletons.item(i)
				d
				.animate({scale: [1, .85], opacity: [1, 0]}, animation_options)
				.onfinish = () => {
					d.remove()
					if (i < skeletons.length - 1) return

					div.append(...containers.sort((a, b) => a.dataset.workId.localeCompare(b.dataset.workId)))
					for (const c of containers) c.animate({
						scale: [.85, 1],
						opacity: [0, 1]
					}, animation_options)
				}
			}
		}
		image.onerror = () => image.src = IMAGE_SOURCE_FALLBACK
		header.textContent = work.name
		paragraph.innerHTML = [
			'<span lang="en">Click to see more</span>',
			'<span lang="id">Klik untuk lebih detail</span>',
		].join('')
		container.tabIndex = 0
		container.setAttribute('data-work-id', work.id) // mark for parent click
		container.append(image, header, paragraph)
	}
}

function init_work_dialog() {
	document.addEventListener('click', ev => {
		const is_clicked_inside = dialog !== ev.target
		if (is_clicked_inside) return;

		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	})

	dialog.oncancel = (ev) => {
		ev.preventDefault()
		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	}

	const close_dialog_btn = document.getElementById('mp-works-dialog-close')
	close_dialog_btn.onclick = () => {
		dialog.animate({
			top: ['50%', '100%'],
			translate: ['-50% -50%', '-50% 0'],
		}, animation_options).finished.then(() => dialog.close())
	}
}

init_works()
init_work_dialog()
})()