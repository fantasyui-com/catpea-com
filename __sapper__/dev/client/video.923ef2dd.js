import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, w as validate_each_argument, Z as stores$1, _ as validate_store, $ as component_subscribe, H as onMount, v as validate_slots, N as globals, f as element, g as space, t as text, h as claim_element, j as children, e as detach_dev, k as claim_space, c as claim_text, l as attr_dev, m as add_location, a as insert_dev, n as append_dev, b as set_data_dev, R as query_selector_all, z as set_style, P as toggle_class, p as noop, y as destroy_each } from './client.c0758912.js';

/* src/routes/video.svelte generated by Svelte v3.20.1 */

const { console: console_1 } = globals;
const file = "src/routes/video.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

// (48:4) {#each slice as post}
function create_each_block(ctx) {
	let div2;
	let div1;
	let a;
	let img;
	let img_src_value;
	let img_alt_value;
	let a_href_value;
	let t0;
	let div0;
	let h5;
	let t1_value = /*post*/ ctx[12].title + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			a = element("a");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h5 = element("h5");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a = claim_element(div1_nodes, "A", { href: true, rel: true, target: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
			a_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t1 = claim_text(h5_nodes, t1_value);
			h5_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*post*/ ctx[12].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-top");
			attr_dev(img, "alt", img_alt_value = /*post*/ ctx[12].title);
			add_location(img, file, 50, 73, 1050);
			attr_dev(a, "href", a_href_value = /*post*/ ctx[12].url);
			attr_dev(a, "rel", "noopener noreferrer");
			attr_dev(a, "target", "_blank");
			add_location(a, file, 50, 10, 987);
			attr_dev(h5, "class", "card-text small");
			add_location(h5, file, 52, 12, 1169);
			attr_dev(div0, "class", "card-body p-3");
			add_location(div0, file, 51, 10, 1129);
			attr_dev(div1, "class", "card bg-secondary text-white shadow p-0 m-0");
			add_location(div1, file, 49, 8, 919);
			attr_dev(div2, "class", "col mb-4");
			add_location(div2, file, 48, 6, 888);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, a);
			append_dev(a, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t1);
			append_dev(div2, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*slice*/ 8 && img.src !== (img_src_value = /*post*/ ctx[12].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*slice*/ 8 && img_alt_value !== (img_alt_value = /*post*/ ctx[12].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*slice*/ 8 && a_href_value !== (a_href_value = /*post*/ ctx[12].url)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*slice*/ 8 && t1_value !== (t1_value = /*post*/ ctx[12].title + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:4) {#each slice as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div9;
	let div0;
	let t1;
	let div4;
	let div1;
	let a0;
	let t2;
	let t3_value = parseInt(/*$page*/ ctx[2].query.p) + "";
	let t3;
	let a0_href_value;
	let t4;
	let div3;
	let div2;
	let t5;
	let t6_value = parseInt(/*$page*/ ctx[2].query.p) + 1 + "";
	let t6;
	let t7;
	let t8_value = Math.ceil(/*database*/ ctx[1].length / parseInt(/*$page*/ ctx[2].query.i)) + "";
	let t8;
	let t9;
	let div6;
	let div5;
	let a1;
	let t10;
	let t11_value = parseInt(/*$page*/ ctx[2].query.p) + 2 + "";
	let t11;
	let t12;
	let a1_href_value;
	let t13;
	let div8;
	let div7;
	let a2;
	let t14;
	let a2_href_value;
	let each_value = /*slice*/ ctx[3];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div9 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			div4 = element("div");
			div1 = element("div");
			a0 = element("a");
			t2 = text("« Return to page ");
			t3 = text(t3_value);
			t4 = space();
			div3 = element("div");
			div2 = element("div");
			t5 = text("Viewing page ");
			t6 = text(t6_value);
			t7 = text(" out of ");
			t8 = text(t8_value);
			t9 = space();
			div6 = element("div");
			div5 = element("div");
			a1 = element("a");
			t10 = text("Page ");
			t11 = text(t11_value);
			t12 = text(" »");
			t13 = space();
			div8 = element("div");
			div7 = element("div");
			a2 = element("a");
			t14 = text("Return to page 1 ∞");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-z3634x\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div9 = claim_element(nodes, "DIV", { class: true, style: true });
			var div9_nodes = children(div9);
			div0 = claim_element(div9_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div9_nodes);
			div4 = claim_element(div9_nodes, "DIV", { class: true, style: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "« Return to page ");
			t3 = claim_text(a0_nodes, t3_value);
			a0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t5 = claim_text(div2_nodes, "Viewing page ");
			t6 = claim_text(div2_nodes, t6_value);
			t7 = claim_text(div2_nodes, " out of ");
			t8 = claim_text(div2_nodes, t8_value);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t9 = claim_space(div9_nodes);
			div6 = claim_element(div9_nodes, "DIV", { class: true, style: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			a1 = claim_element(div5_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t10 = claim_text(a1_nodes, "Page ");
			t11 = claim_text(a1_nodes, t11_value);
			t12 = claim_text(a1_nodes, " »");
			a1_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t13 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true, style: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			a2 = claim_element(div7_nodes, "A", { class: true, href: true });
			var a2_nodes = children(a2);
			t14 = claim_text(a2_nodes, "Return to page 1 ∞");
			a2_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "𝗖𝗔𝗧𝗣𝗘𝗔: Videos";
			attr_dev(div0, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div0, file, 46, 4, 799);
			attr_dev(a0, "class", "btn btn-secondary btn-lg text-dark shadow");
			attr_dev(a0, "href", a0_href_value = "/video?p=" + (parseInt(/*$page*/ ctx[2].query.p) - 1) + "&i=" + /*$page*/ ctx[2].query.i);
			add_location(a0, file, 62, 8, 1441);
			attr_dev(div1, "class", "col-md-6 mb-4 order-2 order-md-1");
			add_location(div1, file, 61, 6, 1386);
			attr_dev(div2, "class", "p-2 lead text-muted");
			add_location(div2, file, 66, 8, 1701);
			attr_dev(div3, "class", "col-md-6 mb-4 text-md-right order-1 order-md-2");
			add_location(div3, file, 65, 6, 1632);
			attr_dev(div4, "class", "row");
			set_style(div4, "display", "none");
			toggle_class(div4, "d-flex", parseInt(/*$page*/ ctx[2].query.p) - 1 > -1);
			add_location(div4, file, 59, 4, 1288);
			attr_dev(a1, "class", "btn btn-secondary btn-lg btn-block shadow");
			attr_dev(a1, "href", a1_href_value = "/video?p=" + (parseInt(/*$page*/ ctx[2].query.p) + 1) + "&i=" + /*$page*/ ctx[2].query.i);
			add_location(a1, file, 75, 8, 2067);
			attr_dev(div5, "class", "col mb-4");
			add_location(div5, file, 74, 6, 2036);
			attr_dev(div6, "class", "row");
			set_style(div6, "display", "none");
			toggle_class(div6, "d-flex", (parseInt(/*$page*/ ctx[2].query.p) + 1) * parseInt(/*$page*/ ctx[2].query.i) < /*database*/ ctx[1].length);
			add_location(div6, file, 73, 4, 1897);
			attr_dev(a2, "class", "btn btn-secondary btn-lg btn-block shadow");
			attr_dev(a2, "href", a2_href_value = "/video?p=0&i=" + /*$page*/ ctx[2].query.i);
			add_location(a2, file, 81, 8, 2431);
			attr_dev(div7, "class", "col mb-4");
			add_location(div7, file, 80, 6, 2400);
			attr_dev(div8, "class", "row");
			set_style(div8, "display", "none");
			toggle_class(div8, "d-flex", (parseInt(/*$page*/ ctx[2].query.p) + 1) * parseInt(/*$page*/ ctx[2].query.i) >= /*database*/ ctx[1].length);
			add_location(div8, file, 79, 4, 2260);
			attr_dev(div9, "class", "container-fluid");
			set_style(div9, "visibility", "hidden");
			toggle_class(div9, "visible", /*pageReady*/ ctx[0]);
			add_location(div9, file, 44, 0, 708);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div9, anchor);
			append_dev(div9, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div9, t1);
			append_dev(div9, div4);
			append_dev(div4, div1);
			append_dev(div1, a0);
			append_dev(a0, t2);
			append_dev(a0, t3);
			append_dev(div4, t4);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, t5);
			append_dev(div2, t6);
			append_dev(div2, t7);
			append_dev(div2, t8);
			append_dev(div9, t9);
			append_dev(div9, div6);
			append_dev(div6, div5);
			append_dev(div5, a1);
			append_dev(a1, t10);
			append_dev(a1, t11);
			append_dev(a1, t12);
			append_dev(div9, t13);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, a2);
			append_dev(a2, t14);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slice*/ 8) {
				each_value = /*slice*/ ctx[3];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*$page*/ 4 && t3_value !== (t3_value = parseInt(/*$page*/ ctx[2].query.p) + "")) set_data_dev(t3, t3_value);

			if (dirty & /*$page*/ 4 && a0_href_value !== (a0_href_value = "/video?p=" + (parseInt(/*$page*/ ctx[2].query.p) - 1) + "&i=" + /*$page*/ ctx[2].query.i)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*$page*/ 4 && t6_value !== (t6_value = parseInt(/*$page*/ ctx[2].query.p) + 1 + "")) set_data_dev(t6, t6_value);
			if (dirty & /*database, $page*/ 6 && t8_value !== (t8_value = Math.ceil(/*database*/ ctx[1].length / parseInt(/*$page*/ ctx[2].query.i)) + "")) set_data_dev(t8, t8_value);

			if (dirty & /*parseInt, $page*/ 4) {
				toggle_class(div4, "d-flex", parseInt(/*$page*/ ctx[2].query.p) - 1 > -1);
			}

			if (dirty & /*$page*/ 4 && t11_value !== (t11_value = parseInt(/*$page*/ ctx[2].query.p) + 2 + "")) set_data_dev(t11, t11_value);

			if (dirty & /*$page*/ 4 && a1_href_value !== (a1_href_value = "/video?p=" + (parseInt(/*$page*/ ctx[2].query.p) + 1) + "&i=" + /*$page*/ ctx[2].query.i)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*parseInt, $page, database*/ 6) {
				toggle_class(div6, "d-flex", (parseInt(/*$page*/ ctx[2].query.p) + 1) * parseInt(/*$page*/ ctx[2].query.i) < /*database*/ ctx[1].length);
			}

			if (dirty & /*$page*/ 4 && a2_href_value !== (a2_href_value = "/video?p=0&i=" + /*$page*/ ctx[2].query.i)) {
				attr_dev(a2, "href", a2_href_value);
			}

			if (dirty & /*parseInt, $page, database*/ 6) {
				toggle_class(div8, "d-flex", (parseInt(/*$page*/ ctx[2].query.p) + 1) * parseInt(/*$page*/ ctx[2].query.i) >= /*database*/ ctx[1].length);
			}

			if (dirty & /*pageReady*/ 1) {
				toggle_class(div9, "visible", /*pageReady*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div9);
			destroy_each(each_blocks, detaching);
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
	let $page;
	const { page } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(2, $page = value));
	let pageReady = false;
	let showPerPage = 8;
	let startAt = 0;
	let database = [];
	let posts = [];
	let browsePage = 0;
	let browsePages = 0;

	onMount(async function () {
		const res = await fetch("youtube.json");
		const json = await res.json();
		$$invalidate(1, database = json);
		console.log("database.length: %d", database.length);
		$$invalidate(0, pageReady = true);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Video> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Video", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		stores: stores$1,
		page,
		pageReady,
		showPerPage,
		startAt,
		database,
		posts,
		browsePage,
		browsePages,
		start,
		$page,
		end,
		slice
	});

	$$self.$inject_state = $$props => {
		if ("pageReady" in $$props) $$invalidate(0, pageReady = $$props.pageReady);
		if ("showPerPage" in $$props) showPerPage = $$props.showPerPage;
		if ("startAt" in $$props) startAt = $$props.startAt;
		if ("database" in $$props) $$invalidate(1, database = $$props.database);
		if ("posts" in $$props) posts = $$props.posts;
		if ("browsePage" in $$props) browsePage = $$props.browsePage;
		if ("browsePages" in $$props) browsePages = $$props.browsePages;
		if ("start" in $$props) $$invalidate(5, start = $$props.start);
		if ("end" in $$props) $$invalidate(6, end = $$props.end);
		if ("slice" in $$props) $$invalidate(3, slice = $$props.slice);
	};

	let start;
	let end;
	let slice;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$page*/ 4) {
			 $$invalidate(5, start = parseInt($page.query.p) * parseInt($page.query.i));
		}

		if ($$self.$$.dirty & /*start, $page*/ 36) {
			 $$invalidate(6, end = start + parseInt($page.query.i));
		}

		if ($$self.$$.dirty & /*database, start, end*/ 98) {
			 $$invalidate(3, slice = database.slice(start, end));
		}
	};

	return [pageReady, database, $page, slice, page];
}

class Video extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Video",
			options,
			id: create_fragment.name
		});
	}
}

export default Video;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uOTIzZWYyZGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgeyBzdG9yZXMgfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5jb25zdCB7IHBhZ2UgfSA9IHN0b3JlcygpO1xuXG5sZXQgcGFnZVJlYWR5ID0gZmFsc2U7XG5cblxubGV0IHNob3dQZXJQYWdlID0gODtcbmxldCBzdGFydEF0ID0gMDtcblxubGV0IGRhdGFiYXNlID0gW107XG5sZXQgcG9zdHMgPSBbXTtcblxubGV0IGJyb3dzZVBhZ2UgPSAwO1xubGV0IGJyb3dzZVBhZ2VzID0gMDtcblxuJDogc3RhcnQgPSBwYXJzZUludCgkcGFnZS5xdWVyeS5wKSAqIHBhcnNlSW50KCRwYWdlLnF1ZXJ5LmkpO1xuJDogZW5kID0gc3RhcnQgKyBwYXJzZUludCgkcGFnZS5xdWVyeS5pKTtcbiQ6IHNsaWNlID0gZGF0YWJhc2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cblxub25Nb3VudChhc3luYyBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwieW91dHViZS5qc29uXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGRhdGFiYXNlID0ganNvbjtcbiAgICBjb25zb2xlLmxvZygnZGF0YWJhc2UubGVuZ3RoOiAlZCcsZGF0YWJhc2UubGVuZ3RoKVxuICAgIHBhZ2VSZWFkeSA9IHRydWU7XG5cbn0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT7wnZeW8J2XlPCdl6fwnZej8J2XmPCdl5Q6IFZpZGVvczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlbjtcIiBjbGFzczp2aXNpYmxlPSd7cGFnZVJlYWR5fSc+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtMiByb3ctY29scy14bC00XCI+XG4gICAgeyNlYWNoIHNsaWNlIGFzIHBvc3R9XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgc2hhZG93IHAtMCBtLTBcIj5cbiAgICAgICAgICA8YSBocmVmPVwie3Bvc3QudXJsfVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIntwb3N0LmltYWdlfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwie3Bvc3QudGl0bGV9XCI+PC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0zXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRleHQgc21hbGxcIj57cG9zdC50aXRsZX08L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgY2xhc3M6ZC1mbGV4PSd7KHBhcnNlSW50KCRwYWdlLnF1ZXJ5LnApIC0gMSk+LTF9Jz5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IG1iLTQgb3JkZXItMiBvcmRlci1tZC0xXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIHRleHQtZGFyayBzaGFkb3dcIiBocmVmPVwiL3ZpZGVvP3A9e3BhcnNlSW50KCRwYWdlLnF1ZXJ5LnApIC0gMX0maT17JHBhZ2UucXVlcnkuaX1cIj4mbGFxdW87IFJldHVybiB0byBwYWdlIHtwYXJzZUludCgkcGFnZS5xdWVyeS5wKSB9PC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtYi00IHRleHQtbWQtcmlnaHQgb3JkZXItMSBvcmRlci1tZC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgbGVhZCB0ZXh0LW11dGVkXCI+XG4gICAgICAgIFZpZXdpbmcgcGFnZSB7cGFyc2VJbnQoJHBhZ2UucXVlcnkucCkrMSB9IG91dCBvZiB7ICBNYXRoLmNlaWwoKGRhdGFiYXNlLmxlbmd0aC9wYXJzZUludCgkcGFnZS5xdWVyeS5pKSkpIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIGNsYXNzOmQtZmxleD0neyggKHBhcnNlSW50KCRwYWdlLnF1ZXJ5LnApKzEpICogcGFyc2VJbnQoJHBhZ2UucXVlcnkuaSkgPCBkYXRhYmFzZS5sZW5ndGgpfSc+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgYnRuLWJsb2NrIHNoYWRvd1wiIGhyZWY9XCIvdmlkZW8/cD17cGFyc2VJbnQoJHBhZ2UucXVlcnkucCkgKyAxfSZpPXskcGFnZS5xdWVyeS5pfVwiPlBhZ2Uge3BhcnNlSW50KCRwYWdlLnF1ZXJ5LnApICsgMn0gJnJhcXVvOzwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiBjbGFzczpkLWZsZXg9J3soIChwYXJzZUludCgkcGFnZS5xdWVyeS5wKSsxKSAqIHBhcnNlSW50KCRwYWdlLnF1ZXJ5LmkpID49IGRhdGFiYXNlLmxlbmd0aCl9Jz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNFwiPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBidG4tYmxvY2sgc2hhZG93XCIgaHJlZj1cIi92aWRlbz9wPTAmaT17JHBhZ2UucXVlcnkuaX1cIj5SZXR1cm4gdG8gcGFnZSAxICZpbmZpbjs8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQW9EeUMsR0FBSSxLQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBRmlDLEdBQUksS0FBQyxLQUFLOztpREFBOEIsR0FBSSxLQUFDLEtBQUs7OytDQUFsSCxHQUFJLEtBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRUFBd0QsR0FBSSxLQUFDLEtBQUs7Ozs7MEVBQThCLEdBQUksS0FBQyxLQUFLOzs7O3dFQUFsSCxHQUFJLEtBQUMsR0FBRzs7OztnRUFFYSxHQUFJLEtBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVVrRyxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O2dCQUtySixRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUUsQ0FBQzs7O2dCQUFhLElBQUksQ0FBQyxJQUFJLGNBQUUsR0FBUSxJQUFDLE1BQU0sR0FBQyxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O2lCQVFzQixRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs0QkE1Qm5KLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBZW1FLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFLLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7OztnQ0FIOUQsUUFBUSxXQUFDLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBRyxDQUFDOzs7dURBZ0JkLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFLLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O2lDQUY1RCxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUksR0FBUSxJQUFDLE1BQU07OztvRUFRbkQsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7aUNBRmhDLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksUUFBUSxXQUFDLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQyxrQkFBSyxHQUFRLElBQUMsTUFBTTs7OzsrQ0FuQzVELEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR3ZFLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7dURBZTJJLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUM7O2dGQUE5RixRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBSyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUM7Ozs7dURBS3BHLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsSUFBRSxDQUFDO2lFQUFhLElBQUksQ0FBQyxJQUFJLGNBQUUsR0FBUSxJQUFDLE1BQU0sR0FBQyxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDOzs7aUNBUmpELFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUcsQ0FBQzs7O3lEQWdCd0MsUUFBUSxXQUFDLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dGQUFqRixRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBSyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O2tDQUY1RCxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLFFBQVEsV0FBQyxHQUFLLElBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUksR0FBUSxJQUFDLE1BQU07Ozs2RkFRbkQsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztrQ0FGaEMsUUFBUSxXQUFDLEdBQUssSUFBQyxLQUFLLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxRQUFRLFdBQUMsR0FBSyxJQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFLLEdBQVEsSUFBQyxNQUFNOzs7O2dEQW5DNUQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXhDMUUsSUFBSSxLQUFLQSxRQUFNOzs7S0FFbkIsU0FBUyxHQUFHLEtBQUs7S0FHakIsV0FBVyxHQUFHLENBQUM7S0FDZixPQUFPLEdBQUcsQ0FBQztLQUVYLFFBQVE7S0FDUixLQUFLO0tBRUwsVUFBVSxHQUFHLENBQUM7S0FDZCxXQUFXLEdBQUcsQ0FBQzs7Q0FPbkIsT0FBTztRQUVHLEdBQUcsU0FBUyxLQUFLLENBQUMsY0FBYztRQUNoQyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7a0JBQzNCLFFBQVEsR0FBRyxJQUFJO0VBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxRQUFRLENBQUMsTUFBTTtrQkFDakQsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBWGpCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztvQkFDeEQsR0FBRyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O29CQUNwQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=