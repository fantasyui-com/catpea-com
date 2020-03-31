import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, w as space, j as element, D as create_component, Z as query_selector_all, f as detach_dev, x as claim_space, l as claim_element, m as children, E as claim_component, o as attr_dev, p as add_location, a as insert_dev, r as append_dev, F as mount_component, u as noop, b as transition_in, t as transition_out, G as destroy_component } from './client.cd8175fc.js';
import { N as News } from './News.54f6d3ca.js';

/* src/routes/big.svelte generated by Svelte v3.20.1 */
const file = "src/routes/big.svelte";

function create_fragment(ctx) {
	let t;
	let div2;
	let div1;
	let div0;
	let current;

	const news = new News({
			props: { height: "auto", items: 10000 },
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			create_component(news.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8uacef\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(news.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works";
			attr_dev(div0, "class", "col pb-3");
			add_location(div0, file, 14, 6, 470);
			attr_dev(div1, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div1, file, 13, 4, 407);
			attr_dev(div2, "class", "container-fluid");
			add_location(div2, file, 12, 0, 373);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			mount_component(news, div0, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(news.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(news.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div2);
			destroy_component(news);
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

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Big> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Big", $$slots, []);
	$$self.$capture_state = () => ({ News });
	return [];
}

class Big extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Big",
			options,
			id: create_fragment.name
		});
	}
}

export default Big;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnLmU3MjUyODQ5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2JpZy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiBpbXBvcnQgTmV3cyBmcm9tICcuLi9jb21wb25lbnRzL05ld3Muc3ZlbHRlJztcbiA8L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+8J2XlvCdl5TwnZen8J2Xo/Cdl5jwnZeUOiBXb3JsZCdzIE1vc3QgQWR2YW5jZWQgUmVzZWFyY2ggTGFib3JhdG9yaWVzIGFuZCBTa3VuayBXb3JrczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTIgcm93LWNvbHMteGwtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYi0zXCI+XG4gICAgICAgIDxOZXdzIGhlaWdodD1cImF1dG9cIiBpdGVtcz17MTAwMDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7bUNBZW1DLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
