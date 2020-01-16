import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, g as claim_space, c as claim_element, b as children, f as detach_dev, h as claim_text, j as attr_dev, k as add_location, o as insert_dev, p as append_dev, n as noop } from './index.d7dda366.js';

/* src/routes/book.svelte generated by Svelte v3.16.7 */

const file = "src/routes/book.svelte";

function create_fragment(ctx) {
	let t0;
	let div6;
	let div5;
	let div0;
	let t1;
	let div3;
	let div2;
	let p0;
	let img;
	let img_src_value;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let div1;
	let t6;
	let div4;

	const block = {
		c: function create() {
			t0 = space();
			div6 = element("div");
			div5 = element("div");
			div0 = element("div");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			p0 = element("p");
			img = element("img");
			t2 = text("\n\t\t\t\t\tCatpea");
			t3 = space();
			p1 = element("p");
			t4 = text("Earthling, dreamer, explorer, fighter, adventurer, philosopher, artist, inventor, dancer, composer, athlete, poet, writer, CEO, philanthropist, and superstar.");
			t5 = space();
			div1 = element("div");
			t6 = space();
			div4 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			img = claim_element(p0_nodes, "IMG", { src: true, alt: true });
			t2 = claim_text(p0_nodes, "\n\t\t\t\t\tCatpea");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Earthling, dreamer, explorer, fighter, adventurer, philosopher, artist, inventor, dancer, composer, athlete, poet, writer, CEO, philanthropist, and superstar.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			children(div4).forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			attr_dev(div0, "class", "col-lg-4");
			add_location(div0, file, 17, 3, 134);
			if (img.src !== (img_src_value = "cats/cat-01.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Cat Alert");
			add_location(img, file, 24, 5, 307);
			attr_dev(p0, "class", "lead");
			add_location(p0, file, 23, 4, 285);
			attr_dev(p1, "class", "lead");
			add_location(p1, file, 28, 4, 377);
			attr_dev(div1, "class", "small");
			add_location(div1, file, 32, 7, 575);
			attr_dev(div2, "class", "container bg-secondary shadow-lg border-success border-bottom rounded-lg p-5");
			add_location(div2, file, 21, 3, 189);
			attr_dev(div3, "class", "col");
			add_location(div3, file, 19, 3, 167);
			attr_dev(div4, "class", "col-lg-4");
			add_location(div4, file, 76, 3, 1824);
			attr_dev(div5, "class", "row");
			add_location(div5, file, 16, 2, 113);
			attr_dev(div6, "class", "container-fluid");
			add_location(div6, file, 15, 1, 81);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, div5);
			append_dev(div5, div0);
			append_dev(div5, t1);
			append_dev(div5, div3);
			append_dev(div3, div2);
			append_dev(div2, p0);
			append_dev(p0, img);
			append_dev(p0, t2);
			append_dev(div2, t3);
			append_dev(div2, p1);
			append_dev(p1, t4);
			append_dev(div2, t5);
			append_dev(div2, div1);
			append_dev(div5, t6);
			append_dev(div5, div4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div6);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Book extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Book",
			options,
			id: create_fragment.name
		});
	}
}

export default Book;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay43YmUyOWZkMC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
