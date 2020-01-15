import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, M as onMount, e as element, a as space, t as text, c as claim_element, b as children, g as claim_space, h as claim_text, f as detach_dev, j as attr_dev, k as add_location, o as insert_dev, p as append_dev, v as set_data_dev, m as listen_dev, n as noop, r as destroy_each } from './index.402bcfc1.js';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rngBrowser = createCommonjsModule(function (module) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}
});

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rngBrowser)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (100:4) {#each posts as post}
function create_each_block(ctx) {
	let div2;
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let h5;
	let t1_value = /*post*/ ctx[9].title + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
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
			img = claim_element(div1_nodes, "IMG", { src: true, class: true, alt: true });
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
			if (img.src !== (img_src_value = /*post*/ ctx[9].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-top");
			attr_dev(img, "alt", img_alt_value = /*post*/ ctx[9].title);
			add_location(img, file, 103, 10, 2749);
			attr_dev(h5, "class", "card-title small");
			add_location(h5, file, 105, 12, 2860);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file, 104, 10, 2824);
			attr_dev(div1, "class", "card bg-secondary text-white");
			add_location(div1, file, 102, 8, 2696);
			attr_dev(div2, "class", "col mb-4");
			add_location(div2, file, 101, 6, 2665);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t1);
			append_dev(div2, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = /*post*/ ctx[9].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[9].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*post*/ ctx[9].title + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(100:4) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let div0;
	let t1;
	let div1;
	let a;
	let t2;
	let a_href_value;
	let dispose;
	let each_value = /*posts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			div1 = element("div");
			a = element("a");
			t2 = text("Next »");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a = claim_element(div1_nodes, "A", { class: true, href: true, role: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, "Next »");
			a_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cat Pea";
			attr_dev(div0, "class", "row row-cols-1 row-cols-md-2 row-cols-lg-4");
			add_location(div0, file, 97, 4, 2574);
			attr_dev(a, "class", "btn btn-primary btn-lg btn-inline");
			attr_dev(a, "href", a_href_value = "/?start=" + /*pageId*/ ctx[1]);
			attr_dev(a, "role", "button");
			add_location(a, file, 116, 6, 3023);
			attr_dev(div1, "class", "row p-5 text-center");
			add_location(div1, file, 115, 4, 2983);
			attr_dev(div2, "class", "container-fluid");
			add_location(div2, file, 94, 0, 2538);
			dispose = listen_dev(a, "click", /*nextPage*/ ctx[2], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, a);
			append_dev(a, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
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

			if (dirty & /*pageId*/ 2 && a_href_value !== (a_href_value = "/?start=" + /*pageId*/ ctx[1])) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
			dispose();
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

function rnd(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}

	return a;
}

function instance($$self, $$props, $$invalidate) {
	const date = new Date();
	const year = date.getFullYear();

	const names = [
		["Catpea"],
		["Advanced"],
		["Technological"],
		["Product"],
		["Emergence"],
		["Architecture"]
	];

	let name = "";

	const makeName = function () {
		name = "";

		for (let potential of names) {
			console.log(names, potential);
			let randomIndex = rnd(0, potential.length - 1);
			let chosen = potential[randomIndex];
			name = name + " " + chosen;
		}
	};

	makeName();
	setInterval(makeName, 1000 * 60);
	let database = [];

	let posts = [
		{
			kind: "youtube",
			title: "Laniakea: Our home supercluster",
			url: "https://www.youtube.com/watch?v=rENyyRwxpHo",
			image: "https://img.youtube.com/vi/rENyyRwxpHo/0.jpg"
		},
		{
			kind: "youtube",
			title: "Oumuamua",
			url: "https://www.youtube.com/watch?v=rfi3w9Bzwik",
			image: "https://img.youtube.com/vi/rfi3w9Bzwik/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=gypAjPp6eps",
			image: "https://img.youtube.com/vi/gypAjPp6eps/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=yqc9zX04DXs",
			image: "https://img.youtube.com/vi/yqc9zX04DXs/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=1-OdJmAefOY",
			image: "https://img.youtube.com/vi/1-OdJmAefOY/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=P1ww1IXRfTA",
			image: "https://img.youtube.com/vi/P1ww1IXRfTA/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=UuRxRGR3VpM",
			image: "https://img.youtube.com/vi/UuRxRGR3VpM/0.jpg"
		},
		{
			kind: "youtube",
			title: "",
			text: "",
			url: "https://www.youtube.com/watch?v=YnU6vMVAdAE",
			image: "https://img.youtube.com/vi/YnU6vMVAdAE/0.jpg"
		}
	];

	let pageId = v4_1();

	onMount(async function () {
		const res = await fetch("youtube.json");
		const json = await res.json();
		database = json;
		shuffle(database);
		$$invalidate(0, posts = database.slice(0, 8));
	});

	function nextPage() {
		shuffle(database);
		$$invalidate(0, posts = database.slice(0, 8));
		$$invalidate(1, pageId = v4_1());
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("name" in $$props) name = $$props.name;
		if ("database" in $$props) database = $$props.database;
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("pageId" in $$props) $$invalidate(1, pageId = $$props.pageId);
	};

	return [posts, pageId, nextPage];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjQwNTNjNjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiPHNjcmlwdD5cblxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIjtcblxuXG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuZnVuY3Rpb24gcm5kKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG5cbmNvbnN0IG5hbWVzID0gW1xuICBbJ0NhdHBlYSddLFxuICBbJ0FkdmFuY2VkJ10sXG4gIFsnVGVjaG5vbG9naWNhbCddLFxuICBbJ1Byb2R1Y3QnXSxcbiAgWydFbWVyZ2VuY2UnXSxcbiAgWydBcmNoaXRlY3R1cmUnXVxuXTtcbmxldCBuYW1lID0gXCJcIjtcblxuY29uc3QgbWFrZU5hbWUgPSBmdW5jdGlvbigpe1xubmFtZSA9IFwiXCI7XG5mb3IgKGxldCBwb3RlbnRpYWwgb2YgbmFtZXMpe1xuICBjb25zb2xlLmxvZyhuYW1lcywgcG90ZW50aWFsKTtcbiAgbGV0IHJhbmRvbUluZGV4ID0gcm5kKDAscG90ZW50aWFsLmxlbmd0aC0xKVxuICBsZXQgY2hvc2VuID0gcG90ZW50aWFsW3JhbmRvbUluZGV4XTtcbiAgbmFtZSA9IG5hbWUgKyAnICcgKyBjaG9zZW47XG5cbn1cbn07XG5cbm1ha2VOYW1lKCk7IHNldEludGVydmFsKG1ha2VOYW1lLCAxMDAwKjYwKTtcblxuXG5mdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbn1cblxubGV0IGRhdGFiYXNlID0gW107XG5sZXQgcG9zdHMgPSBbXG5cbiAge2tpbmQ6XCJ5b3V0dWJlXCIsIHRpdGxlOlwiTGFuaWFrZWE6IE91ciBob21lIHN1cGVyY2x1c3RlclwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXJFTnl5Und4cEhvXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvckVOeXlSd3hwSG8vMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJPdW11YW11YVwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXJmaTN3OUJ6d2lrXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvcmZpM3c5Qnp3aWsvMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWd5cEFqUHA2ZXBzXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvZ3lwQWpQcDZlcHMvMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXlxYzl6WDA0RFhzXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkveXFjOXpYMDREWHMvMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTEtT2RKbUFlZk9ZXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvMS1PZEptQWVmT1kvMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVAxd3cxSVhSZlRBXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvUDF3dzFJWFJmVEEvMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVV1UnhSR1IzVnBNXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvVXVSeFJHUjNWcE0vMC5qcGdcIiB9LFxuICB7a2luZDpcInlvdXR1YmVcIiwgdGl0bGU6XCJcIiwgdGV4dDpcIlwiLCB1cmw6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVluVTZ2TVZBZEFFXCIsIGltYWdlOlwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvWW5VNnZNVkFkQUUvMC5qcGdcIiB9LFxuXG5dO1xuXG5sZXQgcGFnZUlkID0gdXVpZHY0KCk7XG5cbm9uTW91bnQoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJ5b3V0dWJlLmpzb25cIik7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZGF0YWJhc2UgPSBqc29uO1xuICAgIHNodWZmbGUoZGF0YWJhc2UpO1xuICAgIHBvc3RzID0gZGF0YWJhc2Uuc2xpY2UoMCw4KVxuIH0pO1xuXG5mdW5jdGlvbiBuZXh0UGFnZSgpe1xuICBzaHVmZmxlKGRhdGFiYXNlKTtcbiAgcG9zdHMgPSBkYXRhYmFzZS5zbGljZSgwLDgpXG4gIHBhZ2VJZCA9IHV1aWR2NCgpO1xufVxuXG5cbjwvc2NyaXB0PlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5DYXQgUGVhPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuXG5cblxuXG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTIgcm93LWNvbHMtbGctNFwiPlxuXG4gICAgeyNlYWNoIHBvc3RzIGFzIHBvc3R9XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3Bvc3QuaW1hZ2V9XCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJ7cG9zdC50aXRsZX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHNtYWxsXCI+e3Bvc3QudGl0bGV9PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIHsvZWFjaH1cblxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHAtNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1pbmxpbmVcIiBocmVmPVwiLz9zdGFydD17cGFnZUlkfVwiIG9uOmNsaWNrPXtuZXh0UGFnZX0gcm9sZT1cImJ1dHRvblwiPk5leHQgJnJhcXVvOzwvYT5cbiAgICA8L2Rpdj5cblxuXG5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbInJuZyIsImJ5dGVzVG9VdWlkIiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGVBQWUsR0FBRyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JILHVCQUF1QixPQUFPLFFBQVEsQ0FBQyxJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNKO0FBQ0EsSUFBSSxlQUFlLEVBQUU7QUFDckI7QUFDQSxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDO0FBQ0EsRUFBRSxjQUFjLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDeEMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHLENBQUM7QUFDSixDQUFDLE1BQU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0I7QUFDQSxFQUFFLGNBQWMsR0FBRyxTQUFTLE9BQU8sR0FBRztBQUN0QyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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
