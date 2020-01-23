import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, t as text, h as claim_text, m as insert_dev, C as set_data_dev, f as detach_dev, e as element, a as space, c as claim_element, b as children, g as claim_space, j as attr_dev, k as add_location, o as append_dev, p as listen_dev, n as noop, M as run_all, N as set_input_value, O as to_number, D as empty, P as destroy_each, Q as set_style, R as onMount, J as group_outros, z as transition_out, K as check_outros, y as transition_in, q as create_slot, w as get_slot_context, x as get_slot_changes, r as create_component, u as claim_component, v as mount_component, A as destroy_component, T as HtmlTag, E as query_selector_all } from './index.5535549c.js';

var plus = {
	name: "plus",
	figma: {
		id: "0:639",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"add",
		"new",
		"more"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z\"/>"
};
var quote = {
	name: "quote",
	figma: {
		id: "0:655",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"quotation"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z\"/>"
};
var x = {
	name: "x",
	figma: {
		id: "0:932",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"remove",
		"close",
		"delete"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z\"/>"
};
var grabber = {
	name: "grabber",
	figma: {
		id: "0:942",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"mover",
		"drap",
		"drop",
		"sort"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z\"/>"
};
var pulse = {
	name: "pulse",
	figma: {
		id: "0:645",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"graph",
		"trend",
		"line",
		"activity"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z\"/>"
};
var star = {
	name: "star",
	figma: {
		id: "0:781",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"save",
		"remember",
		"like"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"/>"
};
var stop = {
	name: "stop",
	figma: {
		id: "0:785",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"block",
		"spam",
		"report"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z\"/>"
};
var sync = {
	name: "sync",
	figma: {
		id: "0:791",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"cycle",
		"refresh",
		"loop"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z\"/>"
};
var report = {
	name: "report",
	figma: {
		id: "0:885",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"report",
		"abuse",
		"flag"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 4v-4H1a1 1 0 0 1-1-1V2zm1 0h14v9H6.5L4 13.5V11H1V2zm6 6h2v2H7V8zm0-5h2v4H7V3z\"/>"
};
var checklist = {
	name: "checklist",
	figma: {
		id: "0:108",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"todo",
		"tasks"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M16 8.5l-6 6-3-3L8.5 10l1.5 1.5L14.5 7 16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z\"/>"
};
var fold = {
	name: "fold",
	figma: {
		id: "0:329",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"unfold",
		"hide",
		"collapse"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z\"/>"
};
var tasklist = {
	name: "tasklist",
	figma: {
		id: "0:800",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"todo"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z\"/>"
};
var history = {
	name: "history",
	figma: {
		id: "0:404",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"time",
		"past",
		"revert",
		"back"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z\"/>"
};
var dash = {
	name: "dash",
	figma: {
		id: "0:178",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"hyphen",
		"range"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 7v2h8V7H0z\"/>"
};
var reply = {
	name: "reply",
	figma: {
		id: "0:554",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"reply all",
		"back"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z\"/>"
};
var mute = {
	name: "mute",
	figma: {
		id: "0:599",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"quiet",
		"sound",
		"audio",
		"turn",
		"off"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z\"/>"
};
var comment = {
	name: "comment",
	figma: {
		id: "0:169",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"speak",
		"bubble"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z\"/>"
};
var ellipsis = {
	name: "ellipsis",
	figma: {
		id: "0:249",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"dot",
		"read",
		"more",
		"hidden",
		"expand"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z\"/>"
};
var heart = {
	name: "heart",
	figma: {
		id: "0:400",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"love",
		"beat"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z\"/>"
};
var info = {
	name: "info",
	figma: {
		id: "0:430",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"help"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\"/>"
};
var italic = {
	name: "italic",
	figma: {
		id: "0:454",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"font",
		"italic",
		"style"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z\"/>"
};
var unverified = {
	name: "unverified",
	figma: {
		id: "0:914",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"insecure",
		"untrusted",
		"signed"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47-.13.16-.14.19-.33.38-.16.17-.31.3-.52.45-.11.09-.2.19-.28.27-.08.08-.14.17-.19.27-.05.1-.08.19-.11.3-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48.03-.19.08-.36.14-.52.06-.14.14-.28.25-.42.11-.13.23-.25.41-.38.27-.19.36-.3.48-.52.12-.22.2-.38.2-.59 0-.27-.06-.45-.2-.58-.13-.13-.31-.19-.58-.19-.09 0-.19.02-.3.05-.11.03-.17.09-.25.16-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83.16-.27.36-.5.61-.67.25-.17.55-.3.88-.38.33-.08.7-.13 1.09-.13.44 0 .83.05 1.17.13.34.09.63.22.88.39.23.17.41.38.55.63.13.25.19.55.19.88 0 .22 0 .42-.08.59l-.02-.01z\"/>"
};
var verified = {
	name: "verified",
	figma: {
		id: "0:919",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"trusted",
		"secure",
		"trustworthy",
		"signed"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5 2 2 5-5L13 5.56l-6.5 6.45z\"/>"
};
var question = {
	name: "question",
	figma: {
		id: "0:649",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"help",
		"explain"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z\"/>"
};
var unfold = {
	name: "unfold",
	figma: {
		id: "0:857",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"expand",
		"open",
		"reveal"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z\"/>"
};
var alert = {
	name: "alert",
	figma: {
		id: "0:5",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"warning",
		"triangle",
		"exclamation",
		"point"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z\"/>"
};
var check = {
	name: "check",
	figma: {
		id: "0:104",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"mark",
		"yes",
		"confirm",
		"accept",
		"ok",
		"success"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z\"/>"
};
var bold = {
	name: "bold",
	figma: {
		id: "0:38",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"markdown",
		"bold",
		"text"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z\"/>"
};
var mention = {
	name: "mention",
	figma: {
		id: "0:579",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"at",
		"ping"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z\"/>"
};
var beaker = {
	name: "beaker",
	figma: {
		id: "0:26",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"experiment",
		"labs",
		"experimental",
		"feature",
		"test",
		"science",
		"education",
		"study",
		"development",
		"testing"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z\"/>"
};
var bell = {
	name: "bell",
	figma: {
		id: "0:34",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"notification"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z\"/>"
};
var briefcase = {
	name: "briefcase",
	figma: {
		id: "0:58",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"suitcase",
		"business"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z\"/>"
};
var gift = {
	name: "gift",
	figma: {
		id: "0:338",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"package",
		"present",
		"skill",
		"craft",
		"freebie"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 4h-1.38c.19-.33.33-.67.36-.91.06-.67-.11-1.22-.52-1.61C11.1 1.1 10.65 1 10.1 1h-.11c-.53.02-1.11.25-1.53.58-.42.33-.73.72-.97 1.2-.23-.48-.55-.88-.97-1.2-.42-.32-1-.58-1.53-.58h-.03c-.56 0-1.06.09-1.44.48-.41.39-.58.94-.52 1.61.03.23.17.58.36.91H1.98c-.55 0-1 .45-1 1v3h1v5c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8h1V5c0-.55-.45-1-1-1H13zm-4.78-.88c.17-.36.42-.67.75-.92.3-.23.72-.39 1.05-.41h.09c.45 0 .66.11.8.25s.33.39.3.95c-.05.19-.25.61-.5 1h-2.9l.41-.88v.01zM4.09 2.04c.13-.13.31-.25.91-.25.31 0 .72.17 1.03.41.33.25.58.55.75.92L7.2 4H4.3c-.25-.39-.45-.81-.5-1-.03-.56.16-.81.3-.95l-.01-.01zM7 12.99H3V8h4v5-.01zm0-6H2V5h5v2-.01zm5 6H8V8h4v5-.01zm1-6H8V5h5v2-.01z\"/>"
};
var gear = {
	name: "gear",
	figma: {
		id: "0:334",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"settings"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>"
};
var book = {
	name: "book",
	figma: {
		id: "0:43",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"wiki",
		"readme"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\"/>"
};
var tag = {
	name: "tag",
	figma: {
		id: "0:795",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"release"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z\"/>"
};
var telescope = {
	name: "telescope",
	figma: {
		id: "0:806",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"science",
		"space",
		"look",
		"view",
		"explore"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5 2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z\"/>"
};
var tools = {
	name: "tools",
	figma: {
		id: "0:839",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"screwdriver",
		"wrench",
		"settings"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z\"/>"
};
var trashcan = {
	name: "trashcan",
	figma: {
		id: "0:844",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"garbage",
		"rubbish",
		"recycle",
		"delete"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z\"/>"
};
var unmute = {
	name: "unmute",
	figma: {
		id: "0:862",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"loud",
		"volume",
		"audio",
		"sound",
		"play"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z\"/>"
};
var watch = {
	name: "watch",
	figma: {
		id: "0:929",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"wait",
		"hourglass",
		"time",
		"date"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5 5-2.23 5-5z\"/>"
};
var key = {
	name: "key",
	figma: {
		id: "0:938",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"key",
		"lock",
		"secure",
		"safe"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11 1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38.77 0 1.38.61 1.38 1.38 0 .77-.61 1.38-1.38 1.38z\"/>"
};
var archive = {
	name: "archive",
	figma: {
		id: "2228:2",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"box",
		"catalog"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z\"/>"
};
var link = {
	name: "link",
	figma: {
		id: "0:496",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"connect",
		"hyperlink"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"/>"
};
var location = {
	name: "location",
	figma: {
		id: "0:516",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"here",
		"marker"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"
};
var lock = {
	name: "lock",
	figma: {
		id: "0:521",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"secure",
		"safe",
		"protected"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z\"/>"
};
var mail = {
	name: "mail",
	figma: {
		id: "0:558",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"email",
		"unread"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z\"/>"
};
var megaphone = {
	name: "megaphone",
	figma: {
		id: "0:572",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"bullhorn",
		"loud",
		"shout",
		"broadcast"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z\"/>"
};
var bookmark = {
	name: "bookmark",
	figma: {
		id: "0:54",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"tab",
		"star"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z\"/>"
};
var calendar = {
	name: "calendar",
	figma: {
		id: "0:82",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"time",
		"day",
		"month",
		"year",
		"date",
		"appointment"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z\"/>"
};
var clippy = {
	name: "clippy",
	figma: {
		id: "0:138",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"copy",
		"paste",
		"save",
		"capture",
		"clipboard"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z\"/>"
};
var clock = {
	name: "clock",
	figma: {
		id: "0:147",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"time",
		"hour",
		"minute",
		"second",
		"watch"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z\"/>"
};
var globe = {
	name: "globe",
	figma: {
		id: "0:389",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"world",
		"earth",
		"planet"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z\"/>"
};
var home = {
	name: "home",
	figma: {
		id: "0:408",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"welcome",
		"index",
		"house",
		"building"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z\"/>"
};
var inbox = {
	name: "inbox",
	figma: {
		id: "0:426",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"mail",
		"todo",
		"new",
		"messages"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z\"/>"
};
var law = {
	name: "law",
	figma: {
		id: "0:490",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"legal",
		"bill"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z\"/>"
};
var milestone = {
	name: "milestone",
	figma: {
		id: "0:583",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"marker"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z\"/>"
};
var pencil = {
	name: "pencil",
	figma: {
		id: "0:630",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"edit",
		"change",
		"update",
		"write"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z\"/>"
};
var pin = {
	name: "pin",
	figma: {
		id: "0:635",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"save",
		"star",
		"bookmark"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z\"/>"
};
var plug = {
	name: "plug",
	figma: {
		id: "0:637",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"hook",
		"webhook"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z\"/>"
};
var rocket = {
	name: "rocket",
	figma: {
		id: "0:715",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"staff",
		"stafftools",
		"blast",
		"off",
		"space",
		"launch",
		"ship"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78.55-.55 1.05-1.13 1.47-1.7.44-.58.81-1.16 1.14-1.72-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63zM16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66-.7-.08-1.27-.33-1.66-.72-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28 15.62.08 16 0 16 0z\"/>"
};
var search = {
	name: "search",
	figma: {
		id: "0:729",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"magnifying",
		"glass"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z\"/>"
};
var note = {
	name: "note",
	figma: {
		id: "0:891",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"card",
		"paper",
		"ticket"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z\"/>"
};
var shield = {
	name: "shield",
	figma: {
		id: "0:762",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"protect",
		"shield",
		"lock"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61-.19.13-.3.36-.25.59L9 11H5z\"/>"
};
var dashboard = {
	name: "dashboard",
	figma: {
		id: "0:182",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"speed",
		"dial"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z\"/>"
};
var graph = {
	name: "graph",
	figma: {
		id: "0:396",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"trend",
		"stats",
		"statistics"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z\"/>"
};
var settings = {
	name: "settings",
	figma: {
		id: "0:751",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"sliders",
		"filters",
		"controls",
		"levels"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z\"/>"
};
var project = {
	name: "project",
	figma: {
		id: "0:868",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"board",
		"kanban",
		"columns",
		"scrum"
	],
	width: 15,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z\"/>"
};
var play = {
	name: "play",
	figma: {
		id: "8346:0",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"play",
		"start",
		"begin",
		"action"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z\"/>"
};
var code = {
	name: "code",
	figma: {
		id: "0:160",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"brackets"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z\"/>"
};
var diff = {
	name: "diff",
	figma: {
		id: "0:242",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"difference",
		"changes",
		"compare"
	],
	width: 13,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z\"/>"
};
var gist = {
	name: "gist",
	figma: {
		id: "0:354",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"gist",
		"github"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z\"/>"
};
var database = {
	name: "database",
	figma: {
		id: "0:190",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"disks",
		"data"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z\"/>"
};
var broadcast = {
	name: "broadcast",
	figma: {
		id: "0:63",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"rss",
		"radio",
		"signal"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 0 0 4 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 0 0 3.09-5.58A6.59 6.59 0 0 0 7.5.91 6.59 6.59 0 0 0 .91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z\"/>"
};
var keyboard = {
	name: "keyboard",
	figma: {
		id: "0:466",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"type",
		"keys",
		"write",
		"shortcuts"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z\"/>"
};
var browser = {
	name: "browser",
	figma: {
		id: "0:70",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"window",
		"web"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5 3h1v1H5V3zM3 3h1v1H3V3zM1 3h1v1H1V3zm12 10H1V5h12v8zm0-9H7V3h6v1zm1-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z\"/>"
};
var file = {
	name: "file",
	figma: {
		id: "0:308",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"file",
		"text",
		"words"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z\"/>"
};
var repo = {
	name: "repo",
	figma: {
		id: "0:706",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"repository"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z\"/>"
};
var mirror = {
	name: "mirror",
	figma: {
		id: "0:589",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"reflect"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.5 4.7L8.5 0l-7 4.7c-.3.19-.5.45-.5.8V16l7.5-4 7.5 4V5.5c0-.34-.2-.61-.5-.8zm-.5 9.8l-6-3.25V10H8v1.25L2 14.5v-9l6-4V6h1V1.5l6 4v9zM6 7h5V5l3 3-3 3V9H6v2L3 8l3-3v2z\"/>"
};
var ruby = {
	name: "ruby",
	figma: {
		id: "0:724",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"code",
		"language"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 6l-5 5V4h3l2 2zm3 0l-8 8-8-8 4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z\"/>"
};
var server = {
	name: "server",
	figma: {
		id: "0:733",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"computers",
		"racks",
		"ops"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z\"/>"
};
var terminal = {
	name: "terminal",
	figma: {
		id: "0:815",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"code",
		"ops",
		"shell"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 10h4v1H7v-1zm-3 1l3-3-3-3-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z\"/>"
};
var rss = {
	name: "rss",
	figma: {
		id: "0:719",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"broadcast",
		"feed",
		"atom"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z\"/>"
};
var versions = {
	name: "versions",
	figma: {
		id: "0:923",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"history",
		"commits"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z\"/>"
};
var squirrel = {
	name: "squirrel",
	figma: {
		id: "0:779",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"ship",
		"shipit",
		"launch"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z\"/>"
};
var zap = {
	name: "zap",
	figma: {
		id: "0:934",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"electricity",
		"lightning",
		"props",
		"like",
		"star",
		"save"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 7H6l3-7-9 9h4l-3 7 9-9z\"/>"
};
var flame = {
	name: "flame",
	figma: {
		id: "0:325",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"fire",
		"hot",
		"burn",
		"trending"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z\"/>"
};
var bug = {
	name: "bug",
	figma: {
		id: "0:78",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"insect",
		"issue"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z\"/>"
};
var person = {
	name: "person",
	figma: {
		id: "0:633",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"people",
		"man",
		"woman",
		"human"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z\"/>"
};
var smiley = {
	name: "smiley",
	figma: {
		id: "0:772",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"emoji",
		"smile",
		"mood",
		"emotion"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z\"/>"
};
var hubot = {
	name: "hubot",
	figma: {
		id: "0:419",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"robot",
		"bot"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M3 6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H3zm8 1.75L9.75 9h-1.5L7 7.75 5.75 9h-1.5L3 7.75V7h.75L5 8.25 6.25 7h1.5L9 8.25 10.25 7H11v.75zM5 11h4v1H5v-1zm2-9C3.14 2 0 4.91 0 8.5V13c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8.5C14 4.91 10.86 2 7 2zm6 11H1V8.5c0-3.09 2.64-5.59 6-5.59s6 2.5 6 5.59V13z\"/>"
};
var thumbsdown = {
	name: "thumbsdown",
	figma: {
		id: "0:831",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"thumb",
		"thumbsdown",
		"rejected",
		"dislike"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55.91 1 .88 1.8.63 3.27-.08.5.06 1 .42 1.42.39.47.98.76 1.56.76 1.83 0 3-3.71 3-5.01l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97 0-.11-.02-.21-.02-.21zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4-.5 0-1.08-.5-1-1 .25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02 1 6c-.03.64-.38 1-1 1h-.01z\"/>"
};
var thumbsup = {
	name: "thumbsup",
	figma: {
		id: "0:835",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"thumb",
		"thumbsup",
		"prop",
		"ship",
		"like"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.98 8.17l-.97 5.95C14.84 15.5 13.13 16 12 16H5.69c-.2 0-.38-.05-.53-.14L3.72 15H2c-1.06 0-2-.94-2-2V9c0-1.06.94-2.02 2-2h2c.91 0 1.39-.45 2.39-1.55.91-1 .88-1.8.63-3.27-.08-.5.06-1 .42-1.42C7.83.29 8.42 0 9 0c1.83 0 3 3.71 3 5.01l-.02.98h2.04c1.16 0 1.95.8 1.98 1.97 0 .11-.02.21-.02.21zm-1.97-1.19h-1.99c-.7 0-1.03-.28-1.03-.97l.03-1.03c0-1.27-1.17-4-2-4-.5 0-1.08.5-1 1 .25 1.58.34 2.78-.89 4.14C6.11 7.25 5.36 8 4 8v6l1.67 1H12c.73 0 1.95-.31 2-1l.02-.02 1-6c-.03-.64-.38-1-1-1h-.01z\"/>"
};
var organization = {
	name: "organization",
	figma: {
		id: "0:613",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"people",
		"group",
		"team"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z\"/>"
};
var eye = {
	name: "eye",
	figma: {
		id: "0:255",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"look",
		"watch",
		"see"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"
};
var jersey = {
	name: "jersey",
	figma: {
		id: "0:458",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"team",
		"game",
		"basketball"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69-.25.2-.63.3-1.13.3-.5 0-.88-.09-1.13-.3-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06.36.58 1.02.89 2 .94.98-.02 1.64-.33 2-.94.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z\"/>"
};
var octoface = {
	name: "octoface",
	figma: {
		id: "0:609",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"octocat",
		"brand"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z\"/>"
};
var markdown = {
	name: "markdown",
	figma: {
		id: "0:567",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"markup",
		"style"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\"/>"
};
var paintcan = {
	name: "paintcan",
	figma: {
		id: "0:624",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"style",
		"theme",
		"art",
		"color"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8 1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2 0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z\"/>"
};
var data = {
	plus: plus,
	"primitive-dot": {
	name: "primitive-dot",
	figma: {
		id: "0:641",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"circle"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z\"/>"
},
	"primitive-square": {
	name: "primitive-square",
	figma: {
		id: "0:643",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"box"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 12H0V4h8v8z\"/>"
},
	quote: quote,
	"three-bars": {
	name: "three-bars",
	figma: {
		id: "0:826",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"hamburger",
		"menu",
		"dropdown"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z\"/>"
},
	"triangle-down": {
	name: "triangle-down",
	figma: {
		id: "0:847",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"arrow",
		"point",
		"direction"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 5l6 6 6-6H0z\"/>"
},
	"triangle-left": {
	name: "triangle-left",
	figma: {
		id: "0:849",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"arrow",
		"point",
		"direction"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 2L0 8l6 6V2z\"/>"
},
	"triangle-right": {
	name: "triangle-right",
	figma: {
		id: "0:851",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"arrow",
		"point",
		"direction"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 14l6-6-6-6v12z\"/>"
},
	"triangle-up": {
	name: "triangle-up",
	figma: {
		id: "0:853",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"arrow",
		"point",
		"direction"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 11L6 5l-6 6h12z\"/>"
},
	"kebab-horizontal": {
	name: "kebab-horizontal",
	figma: {
		id: "0:875",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"kebab",
		"dot",
		"menu",
		"more"
	],
	width: 13,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>"
},
	"kebab-vertical": {
	name: "kebab-vertical",
	figma: {
		id: "0:880",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"kebab",
		"dot",
		"menu",
		"more"
	],
	width: 3,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>"
},
	"screen-full": {
	name: "screen-full",
	figma: {
		id: "0:898",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"fullscreen",
		"expand"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z\"/>"
},
	"screen-normal": {
	name: "screen-normal",
	figma: {
		id: "0:906",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"fullscreen",
		"expand",
		"exit"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z\"/>"
},
	x: x,
	grabber: grabber,
	"plus-small": {
	name: "plus-small",
	figma: {
		id: "0:947",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"add",
		"new",
		"more",
		"small"
	],
	width: 7,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 4H3v3H0v1h3v3h1V8h3V7H4V4z\"/>"
},
	pulse: pulse,
	star: star,
	stop: stop,
	sync: sync,
	"text-size": {
	name: "text-size",
	figma: {
		id: "0:821",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"font",
		"size",
		"text"
	],
	width: 18,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z\"/>"
},
	report: report,
	"link-external": {
	name: "link-external",
	figma: {
		id: "0:956",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"out",
		"see",
		"more",
		"go",
		"to"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z\"/>"
},
	checklist: checklist,
	"cloud-download": {
	name: "cloud-download",
	figma: {
		id: "0:152",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"save",
		"install",
		"get"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\"/>"
},
	"cloud-upload": {
	name: "cloud-upload",
	figma: {
		id: "0:156",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"put",
		"export"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 9H5l3-3 3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6 1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7 0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z\"/>"
},
	"fold-up": {
	name: "fold-up",
	figma: {
		id: "10708:2",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"unfold",
		"hide",
		"collapse",
		"up"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 6L7 3 4 6h2v6h2V6h2zm4 0c0-.55-.45-1-1-1h-2.5l1 1h1l-2 2H9v1h1.5l2 2H9v1h4c.55 0 1-.45 1-1l-2.5-2.5L14 6zM3.5 8H5v1H3.5l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 6c0-.55.45-1 1-1h2.5l-1 1h-1l2 2z\"/>"
},
	"fold-down": {
	name: "fold-down",
	figma: {
		id: "10708:8",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"unfold",
		"hide",
		"collapse",
		"down"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 11l3 3 3-3H8V5H6v6H4zm-4 0c0 .55.45 1 1 1h2.5l-1-1h-1l2-2H5V8H3.5l-2-2H5V5H1c-.55 0-1 .45-1 1l2.5 2.5L0 11zm10.5-2H9V8h1.5l2-2H9V5h4c.55 0 1 .45 1 1l-2.5 2.5L14 11c0 .55-.45 1-1 1h-2.5l1-1h1l-2-2z\"/>"
},
	fold: fold,
	tasklist: tasklist,
	history: history,
	dash: dash,
	"list-ordered": {
	name: "list-ordered",
	figma: {
		id: "0:500",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"numbers",
		"tasks",
		"todo",
		"items"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12.01 13c0 .59 0 1-.59 1H4.6c-.59 0-.59-.41-.59-1 0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1h.01zM4.6 4h6.81C12 4 12 3.59 12 3c0-.59 0-1-.59-1H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1zm6.81 3H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1h6.81C12 9 12 8.59 12 8c0-.59 0-1-.59-1zm-9.4-6h-.72c-.3.19-.58.25-1.03.34V2h.75v2.14H.17V5h2.84v-.86h-1V1zm.392 8.12c-.129 0-.592.04-.802.07.53-.56 1.14-1.25 1.14-1.89C2.72 6.52 2.18 6 1.38 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38.28 0 .48.16.48.52 0 .53-.77 1.2-1.7 2.06V10h3v-.88h-.598zm-.222 3.79v-.03c.44-.19.64-.47.64-.86 0-.7-.56-1.11-1.44-1.11-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56.83 0 1.53-.41 1.53-1.16 0-.5-.31-.81-.77-.94v.01z\"/>"
},
	"list-unordered": {
	name: "list-unordered",
	figma: {
		id: "0:508",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"bullet",
		"point",
		"tasks",
		"todo",
		"items"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z\"/>"
},
	reply: reply,
	mute: mute,
	"comment-discussion": {
	name: "comment-discussion",
	figma: {
		id: "0:164",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"converse",
		"talk"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z\"/>"
},
	comment: comment,
	ellipsis: ellipsis,
	heart: heart,
	"horizontal-rule": {
	name: "horizontal-rule",
	figma: {
		id: "0:412",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"hr"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z\"/>"
},
	info: info,
	italic: italic,
	unverified: unverified,
	verified: verified,
	question: question,
	unfold: unfold,
	"sign-in": {
	name: "sign-in",
	figma: {
		id: "0:764",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"door",
		"arrow",
		"direction",
		"enter",
		"log in"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 6.75V12h4V8h1v4c0 .55-.45 1-1 1H7v3l-5.45-2.72c-.33-.17-.55-.52-.55-.91V1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v3h-1V1H3l4 2v2.25L10 3v2h4v2h-4v2L7 6.75z\"/>"
},
	"sign-out": {
	name: "sign-out",
	figma: {
		id: "0:768",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"door",
		"arrow",
		"direction",
		"leave",
		"log out"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z\"/>"
},
	alert: alert,
	"arrow-down": {
	name: "arrow-down",
	figma: {
		id: "0:8",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 7V3H3v4H0l5 6 5-6H7z\"/>"
},
	"arrow-left": {
	name: "arrow-left",
	figma: {
		id: "0:10",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 3L0 8l6 5v-3h4V6H6V3z\"/>"
},
	"arrow-right": {
	name: "arrow-right",
	figma: {
		id: "0:12",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 8L4 3v3H0v4h4v3l6-5z\"/>"
},
	"arrow-up": {
	name: "arrow-up",
	figma: {
		id: "0:14",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5 3L0 9h3v4h4V9h3L5 3z\"/>"
},
	"arrow-both": {
	name: "arrow-both",
	figma: {
		id: "7345:13",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction",
		"left",
		"right"
	],
	width: 20,
	height: 16,
	path: "<path d=\"M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z\"/>"
},
	"arrow-small-down": {
	name: "arrow-small-down",
	figma: {
		id: "0:16",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction",
		"little",
		"tiny"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 7V5H2v2H0l3 4 3-4H4z\"/>"
},
	"arrow-small-left": {
	name: "arrow-small-left",
	figma: {
		id: "0:18",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction",
		"little",
		"tiny"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 7V5L0 8l4 3V9h2V7H4z\"/>"
},
	"arrow-small-right": {
	name: "arrow-small-right",
	figma: {
		id: "0:20",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction",
		"little",
		"tiny"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 8L2 5v2H0v2h2v2l4-3z\"/>"
},
	"arrow-small-up": {
	name: "arrow-small-up",
	figma: {
		id: "0:22",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"point",
		"direction",
		"little",
		"tiny"
	],
	width: 6,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M3 5L0 9h2v2h2V9h2L3 5z\"/>"
},
	check: check,
	"chevron-down": {
	name: "chevron-down",
	figma: {
		id: "0:117",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"triangle",
		"arrow"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z\"/>"
},
	"chevron-left": {
	name: "chevron-left",
	figma: {
		id: "0:119",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"triangle",
		"arrow"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z\"/>"
},
	"chevron-right": {
	name: "chevron-right",
	figma: {
		id: "0:121",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"triangle",
		"arrow"
	],
	width: 8,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z\"/>"
},
	"chevron-up": {
	name: "chevron-up",
	figma: {
		id: "0:123",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"triangle",
		"arrow"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z\"/>"
},
	"circle-slash": {
	name: "circle-slash",
	figma: {
		id: "0:127",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"no",
		"deny",
		"fail",
		"failure",
		"error",
		"bad"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z\"/>"
},
	bold: bold,
	mention: mention,
	beaker: beaker,
	bell: bell,
	briefcase: briefcase,
	"credit-card": {
	name: "credit-card",
	figma: {
		id: "0:173",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"money",
		"billing",
		"payments",
		"transactions"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z\"/>"
},
	"device-camera-video": {
	name: "device-camera-video",
	figma: {
		id: "0:198",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"watch",
		"view",
		"media",
		"stream"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z\"/>"
},
	"device-camera": {
	name: "device-camera",
	figma: {
		id: "0:202",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"photo",
		"picture",
		"image",
		"snapshot"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15 3H7c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM6 5H2V4h4v1zm4.5 7C8.56 12 7 10.44 7 8.5S8.56 5 10.5 5 14 6.56 14 8.5 12.44 12 10.5 12zM13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5 9.13 6 10.5 6 13 7.13 13 8.5z\"/>"
},
	"device-desktop": {
	name: "device-desktop",
	figma: {
		id: "0:208",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"computer",
		"monitor"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z\"/>"
},
	"device-mobile": {
	name: "device-mobile",
	figma: {
		id: "0:212",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"phone",
		"iphone",
		"cellphone"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z\"/>"
},
	gift: gift,
	gear: gear,
	book: book,
	tag: tag,
	telescope: telescope,
	tools: tools,
	trashcan: trashcan,
	unmute: unmute,
	watch: watch,
	key: key,
	archive: archive,
	"light-bulb": {
	name: "light-bulb",
	figma: {
		id: "0:951",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"idea"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z\"/>"
},
	link: link,
	location: location,
	lock: lock,
	"mail-read": {
	name: "mail-read",
	figma: {
		id: "0:547",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"email",
		"open"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z\"/>"
},
	mail: mail,
	megaphone: megaphone,
	bookmark: bookmark,
	calendar: calendar,
	clippy: clippy,
	clock: clock,
	"desktop-download": {
	name: "desktop-download",
	figma: {
		id: "0:196",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"clone",
		"download"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z\"/>"
},
	globe: globe,
	home: home,
	inbox: inbox,
	law: law,
	milestone: milestone,
	"mortar-board": {
	name: "mortar-board",
	figma: {
		id: "0:594",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"education",
		"learn",
		"teach"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.11 2.8a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM4 8l3.83 1.19h-.02c.13.03.25.03.36 0L12 8v2.5c0 1-1.8 1.5-4 1.5s-4-.5-4-1.5V8zm3.02-2.5c0 .28.45.5 1 .5s1-.22 1-.5-.45-.5-1-.5-1 .22-1 .5z\"/>"
},
	"package": {
	name: "package",
	figma: {
		id: "0:617",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"box",
		"ship"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z\"/>"
},
	pencil: pencil,
	pin: pin,
	plug: plug,
	rocket: rocket,
	search: search,
	note: note,
	shield: shield,
	dashboard: dashboard,
	graph: graph,
	settings: settings,
	project: project,
	play: play,
	"github-action": {
	name: "github-action",
	figma: {
		id: "8346:4",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"board",
		"workflow",
		"action",
		"automation"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M9 2h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H9a1 1 0 1 1-2 0H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6a1 1 0 1 1 2 0zm6 1v10H1V3h14zm-2.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\"/>"
},
	code: code,
	"git-branch": {
	name: "git-branch",
	figma: {
		id: "0:360",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"fork",
		"branch",
		"git",
		"duplicate"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
},
	"diff-added": {
	name: "diff-added",
	figma: {
		id: "0:217",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"new",
		"addition",
		"plus"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"/>"
},
	"diff-ignored": {
	name: "diff-ignored",
	figma: {
		id: "0:222",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"slash"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-8.5-2H3v-1.5L9.5 4H11v1.5L4.5 12z\"/>"
},
	"diff-modified": {
	name: "diff-modified",
	figma: {
		id: "0:227",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"dot",
		"changed",
		"updated"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"/>"
},
	"diff-removed": {
	name: "diff-removed",
	figma: {
		id: "0:232",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"deleted",
		"subtracted",
		"dash"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z\"/>"
},
	"diff-renamed": {
	name: "diff-renamed",
	figma: {
		id: "0:237",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"moved",
		"arrow"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 9H3V7h3V4l5 4-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z\"/>"
},
	diff: diff,
	"circuit-board": {
	name: "circuit-board",
	figma: {
		id: "0:132",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"developer",
		"hardware",
		"electricity"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M3 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z\"/>"
},
	gist: gist,
	"git-commit": {
	name: "git-commit",
	figma: {
		id: "0:366",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"save"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z\"/>"
},
	"git-compare": {
	name: "git-compare",
	figma: {
		id: "0:370",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"difference",
		"changes"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M5 12H4c-.27-.02-.48-.11-.69-.31-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06.6.59 1.28.91 2.06.94h1v2l3-3-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
},
	"git-merge": {
	name: "git-merge",
	figma: {
		id: "0:376",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"join"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
},
	"git-pull-request": {
	name: "git-pull-request",
	figma: {
		id: "0:382",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"review"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
},
	"issue-closed": {
	name: "issue-closed",
	figma: {
		id: "0:436",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"done",
		"complete"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z\"/>"
},
	"issue-opened": {
	name: "issue-opened",
	figma: {
		id: "0:442",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"new"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z\"/>"
},
	"issue-reopened": {
	name: "issue-reopened",
	figma: {
		id: "0:448",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"regression"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 9H6V4h2v5zm-2 3h2v-2H6v2zm6.33-2H10l1.5 1.5c-1.05 1.33-2.67 2.2-4.5 2.2A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7 2.19 0 4.13-1.02 5.41-2.59L14 14v-4h-1.67zM1.67 6H4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7 0 .34-.03.67-.09 1h1.31c.05-.33.08-.66.08-1 0-3.86-3.14-7-7-7-2.19 0-4.13 1.02-5.41 2.59L0 2v4h1.67z\"/>"
},
	database: database,
	"no-newline": {
	name: "no-newline",
	figma: {
		id: "0:603",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"return"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5 2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5 1.66 0 3-1.34 3-3z\"/>"
},
	broadcast: broadcast,
	keyboard: keyboard,
	"file-binary": {
	name: "file-binary",
	figma: {
		id: "0:260",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"image",
		"video",
		"word",
		"powerpoint",
		"excel"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z\"/>"
},
	"file-code": {
	name: "file-code",
	figma: {
		id: "0:270",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"text",
		"javascript",
		"html",
		"css",
		"php",
		"ruby",
		"coffeescript",
		"sass",
		"scss"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z\"/>"
},
	"file-directory": {
	name: "file-directory",
	figma: {
		id: "0:276",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"folder"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z\"/>"
},
	"file-media": {
	name: "file-media",
	figma: {
		id: "0:280",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"image",
		"video",
		"audio"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M6 5h2v2H6V5zm6-.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v11l3-5 2 4 2-2 3 3V5z\"/>"
},
	"file-pdf": {
	name: "file-pdf",
	figma: {
		id: "0:285",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"adobe"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM1 2h4a.68.68 0 0 0-.31.2 1.08 1.08 0 0 0-.23.47 4.22 4.22 0 0 0-.09 1.47c.06.609.173 1.211.34 1.8A21.78 21.78 0 0 1 3.6 8.6c-.5 1-.8 1.66-.91 1.84a7.156 7.156 0 0 0-.69.3c-.362.165-.699.38-1 .64V2zm4.42 4.8a5.65 5.65 0 0 0 1.17 2.09c.275.237.595.417.94.53-.64.09-1.23.2-1.81.33-.618.15-1.223.347-1.81.59s.22-.44.61-1.25c.365-.74.67-1.51.91-2.3l-.01.01zM11 14H1.5a.743.743 0 0 1-.17 0 2.12 2.12 0 0 0 .73-.44 10.14 10.14 0 0 0 1.78-2.38c.31-.13.58-.23.81-.31l.42-.14c.45-.13.94-.23 1.44-.33s1-.16 1.48-.2c.447.216.912.394 1.39.53.403.11.814.188 1.23.23h.38V14H11zm0-4.86a3.743 3.743 0 0 0-.64-.28 4.221 4.221 0 0 0-.75-.11c-.411.003-.822.03-1.23.08a3 3 0 0 1-1-.64 6.07 6.07 0 0 1-1.29-2.33c.111-.661.178-1.33.2-2 .02-.25.02-.5 0-.75a1.05 1.05 0 0 0-.2-.88.82.82 0 0 0-.61-.23H8l3 3v4.14z\"/>"
},
	"file-submodule": {
	name: "file-submodule",
	figma: {
		id: "0:292",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"folder"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 7H4v7h9c.55 0 1-.45 1-1V8h-4V7zM9 9H5V8h4v1zm4-5H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h3V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z\"/>"
},
	"file-symlink-directory": {
	name: "file-symlink-directory",
	figma: {
		id: "0:298",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"folder",
		"subfolder",
		"link",
		"alias"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM1 3h5v1H1V3zm6 9v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73C4.86 8.43 5.82 8 7.01 8V6l4 3-4 3H7z\"/>"
},
	"file-symlink-file": {
	name: "file-symlink-file",
	figma: {
		id: "0:303",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"link",
		"alias"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z\"/>"
},
	"file-zip": {
	name: "file-zip",
	figma: {
		id: "0:316",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"compress",
		"archive"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8.5 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 0 0 3 11v1h4v-1a2 2 0 0 0-2-2V8H4v1.28zM6 10v1H4v-1h2z\"/>"
},
	browser: browser,
	file: file,
	"repo-clone": {
	name: "repo-clone",
	figma: {
		id: "0:669",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"repository"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M15 0H9v7c0 .55.45 1 1 1h1v1h1V8h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 7h-1V6h1v1zm4 0h-3V6h3v1zm0-2h-4V1h4v4zM4 5H3V4h1v1zm0-2H3V2h1v1zM2 1h6V0H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-2h5c.55 0 1-.45 1-1v-3H2V1zm9 10v2H6v-1H3v1H1v-2h10zM3 8h1v1H3V8zm1-1H3V6h1v1z\"/>"
},
	"repo-force-push": {
	name: "repo-force-push",
	figma: {
		id: "0:681",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"put"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M10 9H8v7H6V9H4l2.25-3H4l3-4 3 4H7.75L10 9zm1-9H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9v9H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z\"/>"
},
	"repo-forked": {
	name: "repo-forked",
	figma: {
		id: "0:685",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"copy"
	],
	width: 10,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"
},
	"repo-pull": {
	name: "repo-pull",
	figma: {
		id: "0:691",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"get"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M13 8V6H7V4h6V2l3 3-3 3zM4 2H3v1h1V2zm7 5h1v6c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h-1V1H2v9h9V7zm0 4H1v2h2v-1h3v1h5v-2zM4 6H3v1h1V6zm0-2H3v1h1V4zM3 9h1V8H3v1z\"/>"
},
	"repo-push": {
	name: "repo-push",
	figma: {
		id: "0:700",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"book",
		"journal",
		"repository",
		"put"
	],
	width: 12,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z\"/>"
},
	repo: repo,
	mirror: mirror,
	ruby: ruby,
	server: server,
	terminal: terminal,
	"radio-tower": {
	name: "radio-tower",
	figma: {
		id: "0:659",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"broadcast"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z\"/>"
},
	rss: rss,
	versions: versions,
	"request-changes": {
	name: "request-changes",
	figma: {
		id: "12138:2",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"diff",
		"changes",
		"request"
	],
	width: 16,
	height: 15,
	path: "<path fill-rule=\"evenodd\" d=\"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.5L4 15.5V12H1a1 1 0 0 1-1-1V1zm1 0v10h4v2l2-2h8V1H1zm7.5 3h2v1h-2v2h-1V5h-2V4h2V2h1v2zm2 5h-5V8h5v1z\"/>"
},
	squirrel: squirrel,
	zap: zap,
	flame: flame,
	bug: bug,
	person: person,
	smiley: smiley,
	hubot: hubot,
	thumbsdown: thumbsdown,
	thumbsup: thumbsup,
	organization: organization,
	"gist-secret": {
	name: "gist-secret",
	figma: {
		id: "0:347",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"gist",
		"secret",
		"private"
	],
	width: 14,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"/>"
},
	eye: eye,
	"eye-closed": {
	name: "eye-closed",
	figma: {
		id: "10292:11",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"hidden",
		"invisible",
		"concealed",
		""
	],
	width: 16,
	height: 13.921463966369629,
	path: "<path fill-rule=\"evenodd\" d=\"M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2 .384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4 0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136 2.22 0 4-1.78 4-4 0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z\"/>"
},
	jersey: jersey,
	octoface: octoface,
	"mark-github": {
	name: "mark-github",
	figma: {
		id: "0:563",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"octocat",
		"brand",
		"github",
		"logo"
	],
	width: 16,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>"
},
	"logo-github": {
	name: "logo-github",
	figma: {
		id: "0:536",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"brand",
		"github",
		"logo"
	],
	width: 45,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z\"/>"
},
	"logo-gist": {
	name: "logo-gist",
	figma: {
		id: "0:529",
		file: "FP7lqd1V00LUaT5zvdklkkZr"
	},
	keywords: [
		"brand",
		"github",
		"logo"
	],
	width: 25,
	height: 16,
	path: "<path fill-rule=\"evenodd\" d=\"M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z\"/>"
},
	markdown: markdown,
	paintcan: paintcan
};

var data$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	plus: plus,
	quote: quote,
	x: x,
	grabber: grabber,
	pulse: pulse,
	star: star,
	stop: stop,
	sync: sync,
	report: report,
	checklist: checklist,
	fold: fold,
	tasklist: tasklist,
	history: history,
	dash: dash,
	reply: reply,
	mute: mute,
	comment: comment,
	ellipsis: ellipsis,
	heart: heart,
	info: info,
	italic: italic,
	unverified: unverified,
	verified: verified,
	question: question,
	unfold: unfold,
	alert: alert,
	check: check,
	bold: bold,
	mention: mention,
	beaker: beaker,
	bell: bell,
	briefcase: briefcase,
	gift: gift,
	gear: gear,
	book: book,
	tag: tag,
	telescope: telescope,
	tools: tools,
	trashcan: trashcan,
	unmute: unmute,
	watch: watch,
	key: key,
	archive: archive,
	link: link,
	location: location,
	lock: lock,
	mail: mail,
	megaphone: megaphone,
	bookmark: bookmark,
	calendar: calendar,
	clippy: clippy,
	clock: clock,
	globe: globe,
	home: home,
	inbox: inbox,
	law: law,
	milestone: milestone,
	pencil: pencil,
	pin: pin,
	plug: plug,
	rocket: rocket,
	search: search,
	note: note,
	shield: shield,
	dashboard: dashboard,
	graph: graph,
	settings: settings,
	project: project,
	play: play,
	code: code,
	diff: diff,
	gist: gist,
	database: database,
	broadcast: broadcast,
	keyboard: keyboard,
	browser: browser,
	file: file,
	repo: repo,
	mirror: mirror,
	ruby: ruby,
	server: server,
	terminal: terminal,
	rss: rss,
	versions: versions,
	squirrel: squirrel,
	zap: zap,
	flame: flame,
	bug: bug,
	person: person,
	smiley: smiley,
	hubot: hubot,
	thumbsdown: thumbsdown,
	thumbsup: thumbsup,
	organization: organization,
	eye: eye,
	jersey: jersey,
	octoface: octoface,
	markdown: markdown,
	paintcan: paintcan,
	'default': data
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var data$2 = getCjsExportFromNamespace(data$1);

for (const key of Object.keys(data$2)) {
  // Returns a string representation of html attributes
  const htmlAttributes = (icon, options) => {
    const attributes = [];
    const attrObj = objectAssign({}, data$2[key].options, options);

    // If the user passed in options
    if (options) {
      // If any of the width or height is passed in
      if (options['width'] || options['height']) {
        attrObj['width'] = options['width']
          ? options['width']
          : (parseInt(options['height']) * data$2[key].options['width']) / data$2[key].options['height'];
        attrObj['height'] = options['height']
          ? options['height']
          : (parseInt(options['width']) * data$2[key].options['height']) / data$2[key].options['width'];
      }

      // If the user passed in class
      if (options['class']) {
        attrObj['class'] = `octicon octicon-${key} ${options['class']}`;
        attrObj['class'].trim();
      }

      // If the user passed in aria-label
      if (options['aria-label']) {
        attrObj['aria-label'] = options['aria-label'];
        attrObj['role'] = 'img';

        // Un-hide the icon
        delete attrObj['aria-hidden'];
      }
    }

    for (const option of Object.keys(attrObj)) {
      attributes.push(`${option}="${attrObj[option]}"`);
    }

    return attributes.join(' ').trim()
  };

  // Set the symbol for easy access
  data$2[key].symbol = key;

  // Set all the default options
  data$2[key].options = {
    version: '1.1',
    width: data$2[key].width,
    height: data$2[key].height,
    viewBox: `0 0 ${data$2[key].width} ${data$2[key].height}`,
    class: `octicon octicon-${key}`,
    'aria-hidden': 'true'
  };

  // Function to return an SVG object
  data$2[key].toSVG = function(options) {
    return `<svg ${htmlAttributes(data$2[key], options)}>${data$2[key].path}</svg>`
  };
}

// Import data into exports
var octicons = data$2;

var moment = createCommonjsModule(function (module, exports) {
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && ('object' !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));
});

/* src/components/SongBeatCalculator.svelte generated by Svelte v3.17.2 */

const file$1 = "src/components/SongBeatCalculator.svelte";

// (64:6) {#if beatCounter}
function create_if_block(ctx) {
	let t0;
	let t1;
	let t2;
	let t3_value = (/*beatCounter*/ ctx[1] == 1 ? "" : "s") + "";
	let t3;
	let t4;
	let t5;
	let t6;

	const block = {
		c: function create() {
			t0 = text("Sampled ");
			t1 = text(/*beatCounter*/ ctx[1]);
			t2 = text(" time");
			t3 = text(t3_value);
			t4 = text(", average bpm is ");
			t5 = text(/*totalBpm*/ ctx[2]);
			t6 = text(".");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Sampled ");
			t1 = claim_text(nodes, /*beatCounter*/ ctx[1]);
			t2 = claim_text(nodes, " time");
			t3 = claim_text(nodes, t3_value);
			t4 = claim_text(nodes, ", average bpm is ");
			t5 = claim_text(nodes, /*totalBpm*/ ctx[2]);
			t6 = claim_text(nodes, ".");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, t6, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*beatCounter*/ 2) set_data_dev(t1, /*beatCounter*/ ctx[1]);
			if (dirty & /*beatCounter*/ 2 && t3_value !== (t3_value = (/*beatCounter*/ ctx[1] == 1 ? "" : "s") + "")) set_data_dev(t3, t3_value);
			if (dirty & /*totalBpm*/ 4) set_data_dev(t5, /*totalBpm*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(t6);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(64:6) {#if beatCounter}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div5;
	let div0;
	let t0;
	let t1;
	let div4;
	let h3;
	let t2;
	let t3;
	let t4;
	let button0;
	let t5;
	let t6;
	let p;
	let small;
	let t7;
	let t8;
	let div3;
	let div1;
	let t9;
	let t10;
	let t11;
	let div2;
	let button1;
	let t12;
	let dispose;
	let if_block = /*beatCounter*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			div5 = element("div");
			div0 = element("div");
			t0 = text("Song Beat Calculator");
			t1 = space();
			div4 = element("div");
			h3 = element("h3");
			t2 = text(/*totalBpm*/ ctx[2]);
			t3 = text(" BPM");
			t4 = space();
			button0 = element("button");
			t5 = text("Beat");
			t6 = space();
			p = element("p");
			small = element("small");
			t7 = text("Start hitting the beat button to the beat of a song to calculate the song's BPM.");
			t8 = space();
			div3 = element("div");
			div1 = element("div");
			t9 = text(/*message*/ ctx[0]);
			t10 = space();
			if (if_block) if_block.c();
			t11 = space();
			div2 = element("div");
			button1 = element("button");
			t12 = text("Reset");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Song Beat Calculator");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h3 = claim_element(div4_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, /*totalBpm*/ ctx[2]);
			t3 = claim_text(h3_nodes, " BPM");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			button0 = claim_element(div4_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Beat");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			p = claim_element(div4_nodes, "P", { class: true });
			var p_nodes = children(p);
			small = claim_element(p_nodes, "SMALL", { class: true });
			var small_nodes = children(small);
			t7 = claim_text(small_nodes, "Start hitting the beat button to the beat of a song to calculate the song's BPM.");
			small_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t9 = claim_text(div1_nodes, /*message*/ ctx[0]);
			t10 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t11 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			button1 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t12 = claim_text(button1_nodes, "Reset");
			button1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$1, 50, 0, 936);
			attr_dev(h3, "class", "card-title text-white text-center py-5");
			add_location(h3, file$1, 55, 4, 1022);
			attr_dev(button0, "class", "btn btn-primary btn-lg p-4");
			add_location(button0, file$1, 56, 4, 1097);
			attr_dev(small, "class", "text-info");
			add_location(small, file$1, 57, 30, 1200);
			attr_dev(p, "class", "card-text py-3");
			add_location(p, file$1, 57, 4, 1174);
			attr_dev(div1, "class", "col text-muted small");
			add_location(div1, file$1, 61, 4, 1346);
			attr_dev(button1, "class", "btn btn-secondary btn-sm");
			add_location(button1, file$1, 68, 4, 1565);
			attr_dev(div2, "class", "col text-right");
			add_location(div2, file$1, 67, 4, 1532);
			attr_dev(div3, "class", "row");
			add_location(div3, file$1, 60, 4, 1324);
			attr_dev(div4, "class", "card-body");
			add_location(div4, file$1, 53, 1, 993);
			attr_dev(div5, "class", "card text-white bg-dark shadow");
			add_location(div5, file$1, 49, 0, 891);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			append_dev(div0, t0);
			append_dev(div5, t1);
			append_dev(div5, div4);
			append_dev(div4, h3);
			append_dev(h3, t2);
			append_dev(h3, t3);
			append_dev(div4, t4);
			append_dev(div4, button0);
			append_dev(button0, t5);
			append_dev(div4, t6);
			append_dev(div4, p);
			append_dev(p, small);
			append_dev(small, t7);
			append_dev(div4, t8);
			append_dev(div4, div3);
			append_dev(div3, div1);
			append_dev(div1, t9);
			append_dev(div1, t10);
			if (if_block) if_block.m(div1, null);
			append_dev(div3, t11);
			append_dev(div3, div2);
			append_dev(div2, button1);
			append_dev(button1, t12);

			dispose = [
				listen_dev(button0, "click", /*beat*/ ctx[3], false, false, false),
				listen_dev(button1, "click", /*reset*/ ctx[4], false, false, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*totalBpm*/ 4) set_data_dev(t2, /*totalBpm*/ ctx[2]);
			if (dirty & /*message*/ 1) set_data_dev(t9, /*message*/ ctx[0]);

			if (/*beatCounter*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			if (if_block) if_block.d();
			run_all(dispose);
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
	let message = "";
	let beatCounter = 0;
	let averageTotal = 0;
	let totalBpm = 0;
	let firstTime = 0;
	let lastTime = 0;
	let timeoutId = null;

	function beat() {
		$$invalidate(0, message = "");
		if (timeoutId) clearTimeout(timeoutId);

		timeoutId = setTimeout(
			function () {
				reset();
			},
			3000
		);

		let currentTime = new Date().getTime();
		let currentValue = 60000 * beatCounter / (currentTime - firstTime);

		if (beatCounter == 0) {
			averageTotal = 100;
			$$invalidate(2, totalBpm = 100);
			firstTime = currentTime;
			$$invalidate(1, beatCounter = 1);
		} else {
			averageTotal = Math.round(currentValue * 100) / 100;
			$$invalidate(2, totalBpm = Math.round(currentValue));
			$$invalidate(1, beatCounter++, beatCounter);
		}

		lastTime = currentTime;
	}

	function reset() {
		$$invalidate(0, message = `Autoreset. Bpm value was ${totalBpm}.`);
		$$invalidate(1, beatCounter = 0);
		averageTotal = 0;
		$$invalidate(2, totalBpm = 0);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("message" in $$props) $$invalidate(0, message = $$props.message);
		if ("beatCounter" in $$props) $$invalidate(1, beatCounter = $$props.beatCounter);
		if ("averageTotal" in $$props) averageTotal = $$props.averageTotal;
		if ("totalBpm" in $$props) $$invalidate(2, totalBpm = $$props.totalBpm);
		if ("firstTime" in $$props) firstTime = $$props.firstTime;
		if ("lastTime" in $$props) lastTime = $$props.lastTime;
		if ("timeoutId" in $$props) timeoutId = $$props.timeoutId;
	};

	return [message, beatCounter, totalBpm, beat, reset];
}

class SongBeatCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SongBeatCalculator",
			options,
			id: create_fragment.name
		});
	}
}

var sprintf = createCommonjsModule(function (module, exports) {
/* global window, exports, define */

!function() {

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    };

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign;
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i];
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i]; // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor];
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]];
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no];
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++];
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg();
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0;
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2);
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10));
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10);
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8);
                        break
                    case 's':
                        arg = String(arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 't':
                        arg = String(!!arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0;
                        break
                    case 'v':
                        arg = arg.valueOf();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16);
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg;
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-';
                        arg = arg.toString().replace(re.sign, '');
                    }
                    else {
                        sign = '';
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
                    pad_length = ph.width - (sign + arg).length;
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null);

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0;
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0]);
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%');
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1;
                    var field_list = [], replacement_field = match[2], field_match = [];
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1]);
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list;
                }
                else {
                    arg_names |= 2;
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                );
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length);
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    {
        exports['sprintf'] = sprintf;
        exports['vsprintf'] = vsprintf;
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf;
        window['vsprintf'] = vsprintf;
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line
});

/* src/components/SongTempoChangeCalculator.svelte generated by Svelte v3.17.2 */
const file$2 = "src/components/SongTempoChangeCalculator.svelte";

// (98:9) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let t0_value = /*printf*/ ctx[4]("%.2f", (/*adjustment*/ ctx[3] - 1) * 100) + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = text("%");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true, role: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			t1 = claim_text(div0_nodes, "%");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "alert alert-primary shadow text-center");
			attr_dev(div0, "role", "alert");
			add_location(div0, file$2, 100, 9, 3937);
			attr_dev(div1, "class", "card-text");
			add_location(div1, file$2, 99, 9, 3904);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adjustment*/ 8 && t0_value !== (t0_value = /*printf*/ ctx[4]("%.2f", (/*adjustment*/ ctx[3] - 1) * 100) + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(98:9) {:else}",
		ctx
	});

	return block;
}

// (86:6) {#if ffmpeg}
function create_if_block$1(ctx) {
	let div1;
	let div0;
	let t0;
	let span0;
	let t1;
	let t2;
	let strong0;
	let t3;
	let t4;
	let span1;
	let t5;
	let t6;
	let t7;
	let t8;
	let p0;
	let strong1;
	let t9;
	let t10;
	let a0;
	let t11;
	let t12;
	let p1;
	let strong2;
	let t13;
	let t14;
	let a1;
	let t15;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text("ffmpeg -i ");
			span0 = element("span");
			t1 = text("input-file.mp3");
			t2 = text(" -af atempo=");
			strong0 = element("strong");
			t3 = text(/*adjustment*/ ctx[3]);
			t4 = space();
			span1 = element("span");
			t5 = text("output-file-");
			t6 = text(/*target*/ ctx[2]);
			t7 = text(".mp3");
			t8 = space();
			p0 = element("p");
			strong1 = element("strong");
			t9 = text("-af");
			t10 = text(" Simple filtergraphs are configured with the per-stream -filter option (with -vf and -af aliases for video and audio respectively). ");
			a0 = element("a");
			t11 = text("»");
			t12 = space();
			p1 = element("p");
			strong2 = element("strong");
			t13 = text("atempo");
			t14 = text(" Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. ");
			a1 = element("a");
			t15 = text("»");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "ffmpeg -i ");
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, "input-file.mp3");
			span0_nodes.forEach(detach_dev);
			t2 = claim_text(div0_nodes, " -af atempo=");
			strong0 = claim_element(div0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t3 = claim_text(strong0_nodes, /*adjustment*/ ctx[3]);
			strong0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			span1 = claim_element(div0_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t5 = claim_text(span1_nodes, "output-file-");
			t6 = claim_text(span1_nodes, /*target*/ ctx[2]);
			t7 = claim_text(span1_nodes, ".mp3");
			span1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			strong1 = claim_element(p0_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "-af");
			strong1_nodes.forEach(detach_dev);
			t10 = claim_text(p0_nodes, " Simple filtergraphs are configured with the per-stream -filter option (with -vf and -af aliases for video and audio respectively). ");
			a0 = claim_element(p0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t11 = claim_text(a0_nodes, "»");
			a0_nodes.forEach(detach_dev);
			p0_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			strong2 = claim_element(p1_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t13 = claim_text(strong2_nodes, "atempo");
			strong2_nodes.forEach(detach_dev);
			t14 = claim_text(p1_nodes, " Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. ");
			a1 = claim_element(p1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t15 = claim_text(a1_nodes, "»");
			a1_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "text-secondary");
			add_location(span0, file$2, 89, 18, 3021);
			add_location(strong0, file$2, 89, 80, 3083);
			attr_dev(span1, "class", "text-secondary");
			add_location(span1, file$2, 89, 110, 3113);
			attr_dev(div0, "class", "border border secondary rounded p-3 mb-3");
			add_location(div0, file$2, 88, 6, 2948);
			attr_dev(div1, "class", "card-text");
			add_location(div1, file$2, 86, 6, 2917);
			add_location(strong1, file$2, 95, 48, 3251);
			attr_dev(a0, "href", "https://ffmpeg.org/ffmpeg.html#Filtering");
			add_location(a0, file$2, 95, 200, 3403);
			attr_dev(p0, "class", "card-text small text-secondary");
			add_location(p0, file$2, 95, 6, 3209);
			add_location(strong2, file$2, 96, 48, 3517);
			attr_dev(a1, "href", "https://ffmpeg.org/ffmpeg-filters.html#atempo");
			add_location(a1, file$2, 96, 337, 3806);
			attr_dev(p1, "class", "card-text small text-secondary");
			add_location(p1, file$2, 96, 6, 3475);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div0, span0);
			append_dev(span0, t1);
			append_dev(div0, t2);
			append_dev(div0, strong0);
			append_dev(strong0, t3);
			append_dev(div0, t4);
			append_dev(div0, span1);
			append_dev(span1, t5);
			append_dev(span1, t6);
			append_dev(span1, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, strong1);
			append_dev(strong1, t9);
			append_dev(p0, t10);
			append_dev(p0, a0);
			append_dev(a0, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, strong2);
			append_dev(strong2, t13);
			append_dev(p1, t14);
			append_dev(p1, a1);
			append_dev(a1, t15);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adjustment*/ 8) set_data_dev(t3, /*adjustment*/ ctx[3]);
			if (dirty & /*target*/ 4) set_data_dev(t6, /*target*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(86:6) {#if ffmpeg}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div10;
	let div0;
	let t0;
	let t1;
	let div9;
	let div6;
	let div5;
	let div2;
	let div1;
	let label0;
	let t2;
	let abbr0;
	let t3;
	let t4;
	let input0;
	let input0_updating = false;
	let t5;
	let div4;
	let div3;
	let label1;
	let t6;
	let abbr1;
	let t7;
	let t8;
	let input1;
	let input1_updating = false;
	let t9;
	let div8;
	let div7;
	let input2;
	let t10;
	let label2;
	let t11;
	let a;
	let t12;
	let t13;
	let t14;
	let dispose;

	function input0_input_handler() {
		input0_updating = true;
		/*input0_input_handler*/ ctx[5].call(input0);
	}

	function input1_input_handler() {
		input1_updating = true;
		/*input1_input_handler*/ ctx[6].call(input1);
	}

	function select_block_type(ctx, dirty) {
		if (/*ffmpeg*/ ctx[0]) return create_if_block$1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div10 = element("div");
			div0 = element("div");
			t0 = text("Calculate Song Tempo Change");
			t1 = space();
			div9 = element("div");
			div6 = element("div");
			div5 = element("div");
			div2 = element("div");
			div1 = element("div");
			label0 = element("label");
			t2 = text("Original ");
			abbr0 = element("abbr");
			t3 = text("BPM");
			t4 = space();
			input0 = element("input");
			t5 = space();
			div4 = element("div");
			div3 = element("div");
			label1 = element("label");
			t6 = text("Target ");
			abbr1 = element("abbr");
			t7 = text("BPM");
			t8 = space();
			input1 = element("input");
			t9 = space();
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t10 = space();
			label2 = element("label");
			t11 = text("Show ");
			a = element("a");
			t12 = text("FFmpeg");
			t13 = text(" Command");
			t14 = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div10 = claim_element(nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div0 = claim_element(div10_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Calculate Song Tempo Change");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div6 = claim_element(div9_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			label0 = claim_element(div1_nodes, "LABEL", { class: true, for: true });
			var label0_nodes = children(label0);
			t2 = claim_text(label0_nodes, "Original ");
			abbr0 = claim_element(label0_nodes, "ABBR", { title: true });
			var abbr0_nodes = children(abbr0);
			t3 = claim_text(abbr0_nodes, "BPM");
			abbr0_nodes.forEach(detach_dev);
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);

			input0 = claim_element(div1_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label1 = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label1_nodes = children(label1);
			t6 = claim_text(label1_nodes, "Target ");
			abbr1 = claim_element(label1_nodes, "ABBR", { title: true });
			var abbr1_nodes = children(abbr1);
			t7 = claim_text(abbr1_nodes, "BPM");
			abbr1_nodes.forEach(detach_dev);
			label1_nodes.forEach(detach_dev);
			t8 = claim_space(div3_nodes);

			input1 = claim_element(div3_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t9 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			input2 = claim_element(div7_nodes, "INPUT", { class: true, type: true, id: true });
			t10 = claim_space(div7_nodes);
			label2 = claim_element(div7_nodes, "LABEL", { class: true, for: true });
			var label2_nodes = children(label2);
			t11 = claim_text(label2_nodes, "Show ");
			a = claim_element(label2_nodes, "A", { href: true, rel: true, target: true });
			var a_nodes = children(a);
			t12 = claim_text(a_nodes, "FFmpeg");
			a_nodes.forEach(detach_dev);
			t13 = claim_text(label2_nodes, " Command");
			label2_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t14 = claim_space(div9_nodes);
			if_block.l(div9_nodes);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$2, 34, 0, 665);
			attr_dev(abbr0, "title", "Beats Per Minute");
			add_location(abbr0, file$2, 45, 61, 1284);
			attr_dev(label0, "class", "small");
			attr_dev(label0, "for", "originalBeat");
			add_location(label0, file$2, 45, 12, 1235);
			attr_dev(input0, "type", "number");
			attr_dev(input0, "id", "originalBeat");
			attr_dev(input0, "min", "10");
			attr_dev(input0, "max", "900");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "original");
			add_location(input0, file$2, 46, 12, 1346);
			attr_dev(div1, "class", "form-group px-3");
			add_location(div1, file$2, 44, 10, 1193);
			attr_dev(div2, "class", "col-md-6 text-center");
			add_location(div2, file$2, 43, 10, 1148);
			attr_dev(abbr1, "title", "Beats Per Minute");
			add_location(abbr1, file$2, 51, 57, 1647);
			attr_dev(label1, "class", "small");
			attr_dev(label1, "for", "targetBeat");
			add_location(label1, file$2, 51, 12, 1602);
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "targetBeat");
			attr_dev(input1, "min", "10");
			attr_dev(input1, "max", "900");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "target");
			add_location(input1, file$2, 52, 12, 1709);
			attr_dev(div3, "class", "form-group px-3");
			add_location(div3, file$2, 50, 10, 1560);
			attr_dev(div4, "class", "col-md-6 text-center");
			add_location(div4, file$2, 49, 10, 1515);
			attr_dev(div5, "class", "row no-gutters");
			add_location(div5, file$2, 42, 8, 1109);
			attr_dev(div6, "class", "card-text");
			add_location(div6, file$2, 41, 6, 1077);
			attr_dev(input2, "class", "form-check-input");
			attr_dev(input2, "type", "checkbox");
			attr_dev(input2, "id", "ffmpegMode");
			add_location(input2, file$2, 60, 8, 1976);
			attr_dev(a, "href", "https://ffmpeg.org/");
			attr_dev(a, "rel", "noopener noreferrer");
			attr_dev(a, "target", "_blank");
			add_location(a, file$2, 62, 15, 2142);
			attr_dev(label2, "class", "form-check-label small");
			attr_dev(label2, "for", "ffmpegMode");
			add_location(label2, file$2, 61, 8, 2071);
			attr_dev(div7, "class", "form-check mb-3");
			add_location(div7, file$2, 59, 6, 1938);
			attr_dev(div8, "class", "card-text text-center");
			add_location(div8, file$2, 58, 6, 1896);
			attr_dev(div9, "class", "card-body");
			add_location(div9, file$2, 37, 1, 729);
			attr_dev(div10, "class", "card text-white bg-dark shadow");
			add_location(div10, file$2, 33, 0, 620);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div10, anchor);
			append_dev(div10, div0);
			append_dev(div0, t0);
			append_dev(div10, t1);
			append_dev(div10, div9);
			append_dev(div9, div6);
			append_dev(div6, div5);
			append_dev(div5, div2);
			append_dev(div2, div1);
			append_dev(div1, label0);
			append_dev(label0, t2);
			append_dev(label0, abbr0);
			append_dev(abbr0, t3);
			append_dev(div1, t4);
			append_dev(div1, input0);
			set_input_value(input0, /*original*/ ctx[1]);
			append_dev(div5, t5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, label1);
			append_dev(label1, t6);
			append_dev(label1, abbr1);
			append_dev(abbr1, t7);
			append_dev(div3, t8);
			append_dev(div3, input1);
			set_input_value(input1, /*target*/ ctx[2]);
			append_dev(div9, t9);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, input2);
			input2.checked = /*ffmpeg*/ ctx[0];
			append_dev(div7, t10);
			append_dev(div7, label2);
			append_dev(label2, t11);
			append_dev(label2, a);
			append_dev(a, t12);
			append_dev(label2, t13);
			append_dev(div9, t14);
			if_block.m(div9, null);

			dispose = [
				listen_dev(input0, "input", input0_input_handler),
				listen_dev(input1, "input", input1_input_handler),
				listen_dev(input2, "change", /*input2_change_handler*/ ctx[7])
			];
		},
		p: function update(ctx, [dirty]) {
			if (!input0_updating && dirty & /*original*/ 2) {
				set_input_value(input0, /*original*/ ctx[1]);
			}

			input0_updating = false;

			if (!input1_updating && dirty & /*target*/ 4) {
				set_input_value(input1, /*target*/ ctx[2]);
			}

			input1_updating = false;

			if (dirty & /*ffmpeg*/ 1) {
				input2.checked = /*ffmpeg*/ ctx[0];
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div9, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div10);
			if_block.d();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function songTempoChange(originalBpm, targetBpm) {
	if (typeof originalBpm !== "number") return 1;
	if (originalBpm > 900) return 1;
	if (originalBpm < 10) return 1;
	if (typeof targetBpm !== "number") return 1;
	if (targetBpm > 900) return 1;
	if (targetBpm < 10) return 1;
	const difference = targetBpm - originalBpm;
	return difference / originalBpm + 1;
}

function instance$1($$self, $$props, $$invalidate) {
	const printf = sprintf.sprintf;
	let ffmpeg = true;
	let original = 130;
	let target = 160;

	function input0_input_handler() {
		original = to_number(this.value);
		$$invalidate(1, original);
	}

	function input1_input_handler() {
		target = to_number(this.value);
		$$invalidate(2, target);
	}

	function input2_change_handler() {
		ffmpeg = this.checked;
		$$invalidate(0, ffmpeg);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("ffmpeg" in $$props) $$invalidate(0, ffmpeg = $$props.ffmpeg);
		if ("original" in $$props) $$invalidate(1, original = $$props.original);
		if ("target" in $$props) $$invalidate(2, target = $$props.target);
		if ("adjustment" in $$props) $$invalidate(3, adjustment = $$props.adjustment);
	};

	let adjustment;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*original, target*/ 6) {
			 $$invalidate(3, adjustment = songTempoChange(original, target).toPrecision(3));
		}
	};

	return [
		ffmpeg,
		original,
		target,
		adjustment,
		printf,
		input0_input_handler,
		input1_input_handler,
		input2_change_handler
	];
}

class SongTempoChangeCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SongTempoChangeCalculator",
			options,
			id: create_fragment$1.name
		});
	}
}

var mainspring = createCommonjsModule(function (module) {
(function(){
  var CONSTANTS = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
  };

  var Mainspring = function(date1, date2){
    if (date2 == null) {
      date2 = new Date();
    }

    return spellOut(diffBetweenTimes(date1, date2));
  };

  // Export for Node or browser
  if ( module !== null ? module.exports : void 0) {
    module.exports = Mainspring;
  } else {
    this.Mainspring = Mainspring;
  }

  function diffBetweenTimes(date1, date2) {
    var diff, future;

    if (date1 > date2) {
      diff = date1 - date2;
      future = true;
    } else {
      diff = date2 - date1;
      future = false;
    }

    return {
      ms: diff,
      future: future
    };
  }

  function extractTimeElement(time, value, constant) {
    var elapsed;
    if (time > constant) {
      elapsed = Math.floor(time / constant);
      time = time - (constant * elapsed);
    } else {
      elapsed = 0;
    }
    return {
      time: time,
      value: value,
      elapsed: elapsed
    };
  }
  function spellOut(timeDiff) {
    var constantName, constantValue, elapsed, output, ref, time, totalTime, value;
    output = {
      inFuture: timeDiff.future
    };
    totalTime = timeDiff.ms;
    for (constantName in CONSTANTS) {
      constantValue = CONSTANTS[constantName];
      ref = extractTimeElement(totalTime, constantName, constantValue), time = ref.time, value = ref.value, elapsed = ref.elapsed;
      totalTime = time;
      output[value] = elapsed;
    }
    return output;
  }
}).call(commonjsGlobal);
});

var solsticesAndEquinoxes = [{"year":2001,"spring":"2001-03-20T13:31:00.000Z","summer":"2001-06-21T07:38:00.000Z","fall":"2001-09-22T23:05:00.000Z","winter":"2001-12-21T19:22:00.000Z"},{"year":2002,"spring":"2002-03-20T19:16:00.000Z","summer":"2002-06-21T13:25:00.000Z","fall":"2002-09-23T04:56:00.000Z","winter":"2002-12-22T01:15:00.000Z"},{"year":2003,"spring":"2003-03-21T01:00:00.000Z","summer":"2003-06-21T19:11:00.000Z","fall":"2003-09-23T10:47:00.000Z","winter":"2003-12-22T07:04:00.000Z"},{"year":2004,"spring":"2004-03-20T06:49:00.000Z","summer":"2004-06-21T00:57:00.000Z","fall":"2004-09-22T16:30:00.000Z","winter":"2004-12-21T12:42:00.000Z"},{"year":2005,"spring":"2005-03-20T12:34:00.000Z","summer":"2005-06-21T06:46:00.000Z","fall":"2005-09-22T22:23:00.000Z","winter":"2005-12-21T18:35:00.000Z"},{"year":2006,"spring":"2006-03-20T18:25:00.000Z","summer":"2006-06-21T12:26:00.000Z","fall":"2006-09-23T04:04:00.000Z","winter":"2006-12-22T00:22:00.000Z"},{"year":2007,"spring":"2007-03-21T00:07:00.000Z","summer":"2007-06-21T18:06:00.000Z","fall":"2007-09-23T09:51:00.000Z","winter":"2007-12-22T06:08:00.000Z"},{"year":2008,"spring":"2008-03-20T05:49:00.000Z","summer":"2008-06-21T00:00:00.000Z","fall":"2008-09-22T15:45:00.000Z","winter":"2008-12-21T12:04:00.000Z"},{"year":2009,"spring":"2009-03-20T11:44:00.000Z","summer":"2009-06-21T05:45:00.000Z","fall":"2009-09-22T21:18:00.000Z","winter":"2009-12-21T17:47:00.000Z"},{"year":2010,"spring":"2010-03-20T17:32:00.000Z","summer":"2010-06-21T11:28:00.000Z","fall":"2010-09-23T03:09:00.000Z","winter":"2010-12-21T23:38:00.000Z"},{"year":2011,"spring":"2011-03-20T23:21:00.000Z","summer":"2011-06-21T17:16:00.000Z","fall":"2011-09-23T09:05:00.000Z","winter":"2011-12-22T05:30:00.000Z"},{"year":2012,"spring":"2012-03-20T05:15:00.000Z","summer":"2012-06-20T23:08:00.000Z","fall":"2012-09-22T14:49:00.000Z","winter":"2012-12-21T11:12:00.000Z"},{"year":2013,"spring":"2013-03-20T11:02:00.000Z","summer":"2013-06-21T05:04:00.000Z","fall":"2013-09-22T20:44:00.000Z","winter":"2013-12-21T17:11:00.000Z"},{"year":2014,"spring":"2014-03-20T16:57:00.000Z","summer":"2014-06-21T10:52:00.000Z","fall":"2014-09-23T02:30:00.000Z","winter":"2014-12-21T23:03:00.000Z"},{"year":2015,"spring":"2015-03-20T22:45:00.000Z","summer":"2015-06-21T16:38:00.000Z","fall":"2015-09-23T08:20:00.000Z","winter":"2015-12-22T04:48:00.000Z"},{"year":2016,"spring":"2016-03-20T04:31:00.000Z","summer":"2016-06-20T22:35:00.000Z","fall":"2016-09-22T14:21:00.000Z","winter":"2016-12-21T10:45:00.000Z"},{"year":2017,"spring":"2017-03-20T10:29:00.000Z","summer":"2017-06-21T04:25:00.000Z","fall":"2017-09-22T20:02:00.000Z","winter":"2017-12-21T16:29:00.000Z"},{"year":2018,"spring":"2018-03-20T16:15:00.000Z","summer":"2018-06-21T10:07:00.000Z","fall":"2018-09-23T01:54:00.000Z","winter":"2018-12-21T22:22:00.000Z"},{"year":2019,"spring":"2019-03-20T21:58:00.000Z","summer":"2019-06-21T15:54:00.000Z","fall":"2019-09-23T07:50:00.000Z","winter":"2019-12-22T04:19:00.000Z"},{"year":2020,"spring":"2020-03-20T03:50:00.000Z","summer":"2020-06-20T21:43:00.000Z","fall":"2020-09-22T13:31:00.000Z","winter":"2020-12-21T10:03:00.000Z"},{"year":2021,"spring":"2021-03-20T09:37:00.000Z","summer":"2021-06-21T03:32:00.000Z","fall":"2021-09-22T19:21:00.000Z","winter":"2021-12-21T15:59:00.000Z"},{"year":2022,"spring":"2022-03-20T15:33:00.000Z","summer":"2022-06-21T09:14:00.000Z","fall":"2022-09-23T01:04:00.000Z","winter":"2022-12-21T21:48:00.000Z"},{"year":2023,"spring":"2023-03-20T21:25:00.000Z","summer":"2023-06-21T14:58:00.000Z","fall":"2023-09-23T06:50:00.000Z","winter":"2023-12-22T03:28:00.000Z"},{"year":2024,"spring":"2024-03-20T03:07:00.000Z","summer":"2024-06-20T20:51:00.000Z","fall":"2024-09-22T12:44:00.000Z","winter":"2024-12-21T09:20:00.000Z"},{"year":2025,"spring":"2025-03-20T09:02:00.000Z","summer":"2025-06-21T02:42:00.000Z","fall":"2025-09-22T18:20:00.000Z","winter":"2025-12-21T15:03:00.000Z"},{"year":2026,"spring":"2026-03-20T14:46:00.000Z","summer":"2026-06-21T08:25:00.000Z","fall":"2026-09-23T00:06:00.000Z","winter":"2026-12-21T20:50:00.000Z"},{"year":2027,"spring":"2027-03-20T20:25:00.000Z","summer":"2027-06-21T14:11:00.000Z","fall":"2027-09-23T06:02:00.000Z","winter":"2027-12-22T02:43:00.000Z"},{"year":2028,"spring":"2028-03-20T02:17:00.000Z","summer":"2028-06-20T20:02:00.000Z","fall":"2028-09-22T11:45:00.000Z","winter":"2028-12-21T08:20:00.000Z"},{"year":2029,"spring":"2029-03-20T08:01:00.000Z","summer":"2029-06-21T01:48:00.000Z","fall":"2029-09-22T17:37:00.000Z","winter":"2029-12-21T14:14:00.000Z"},{"year":2030,"spring":"2030-03-20T13:51:00.000Z","summer":"2030-06-21T07:31:00.000Z","fall":"2030-09-22T23:27:00.000Z","winter":"2030-12-21T20:09:00.000Z"},{"year":2031,"spring":"2031-03-20T19:41:00.000Z","summer":"2031-06-21T13:17:00.000Z","fall":"2031-09-23T05:15:00.000Z","winter":"2031-12-22T01:56:00.000Z"},{"year":2032,"spring":"2032-03-20T01:23:00.000Z","summer":"2032-06-20T19:09:00.000Z","fall":"2032-09-22T11:11:00.000Z","winter":"2032-12-21T07:57:00.000Z"},{"year":2033,"spring":"2033-03-20T07:23:00.000Z","summer":"2033-06-21T01:01:00.000Z","fall":"2033-09-22T16:52:00.000Z","winter":"2033-12-21T13:45:00.000Z"},{"year":2034,"spring":"2034-03-20T13:18:00.000Z","summer":"2034-06-21T06:45:00.000Z","fall":"2034-09-22T22:41:00.000Z","winter":"2034-12-21T19:35:00.000Z"},{"year":2035,"spring":"2035-03-20T19:03:00.000Z","summer":"2035-06-21T12:33:00.000Z","fall":"2035-09-23T04:39:00.000Z","winter":"2035-12-22T01:31:00.000Z"},{"year":2036,"spring":"2036-03-20T01:02:00.000Z","summer":"2036-06-20T18:31:00.000Z","fall":"2036-09-22T10:23:00.000Z","winter":"2036-12-21T07:12:00.000Z"},{"year":2037,"spring":"2037-03-20T06:50:00.000Z","summer":"2037-06-21T00:22:00.000Z","fall":"2037-09-22T16:13:00.000Z","winter":"2037-12-21T13:08:00.000Z"},{"year":2038,"spring":"2038-03-20T12:40:00.000Z","summer":"2038-06-21T06:09:00.000Z","fall":"2038-09-22T22:02:00.000Z","winter":"2038-12-21T19:01:00.000Z"},{"year":2039,"spring":"2039-03-20T18:32:00.000Z","summer":"2039-06-21T11:58:00.000Z","fall":"2039-09-23T03:50:00.000Z","winter":"2039-12-22T00:41:00.000Z"},{"year":2040,"spring":"2040-03-20T00:11:00.000Z","summer":"2040-06-20T17:46:00.000Z","fall":"2040-09-22T09:44:00.000Z","winter":"2040-12-21T06:33:00.000Z"},{"year":2041,"spring":"2041-03-20T06:07:00.000Z","summer":"2041-06-20T23:37:00.000Z","fall":"2041-09-22T15:27:00.000Z","winter":"2041-12-21T12:19:00.000Z"},{"year":2042,"spring":"2042-03-20T11:53:00.000Z","summer":"2042-06-21T05:16:00.000Z","fall":"2042-09-22T21:11:00.000Z","winter":"2042-12-21T18:04:00.000Z"},{"year":2043,"spring":"2043-03-20T17:29:00.000Z","summer":"2043-06-21T10:59:00.000Z","fall":"2043-09-23T03:07:00.000Z","winter":"2043-12-22T00:02:00.000Z"},{"year":2044,"spring":"2044-03-19T23:20:00.000Z","summer":"2044-06-20T16:50:00.000Z","fall":"2044-09-22T08:47:00.000Z","winter":"2044-12-21T05:43:00.000Z"},{"year":2045,"spring":"2045-03-20T05:08:00.000Z","summer":"2045-06-20T22:34:00.000Z","fall":"2045-09-22T14:33:00.000Z","winter":"2045-12-21T11:36:00.000Z"},{"year":2046,"spring":"2046-03-20T10:58:00.000Z","summer":"2046-06-21T04:15:00.000Z","fall":"2046-09-22T20:22:00.000Z","winter":"2046-12-21T17:28:00.000Z"},{"year":2047,"spring":"2047-03-20T16:52:00.000Z","summer":"2047-06-21T10:02:00.000Z","fall":"2047-09-23T02:07:00.000Z","winter":"2047-12-21T23:07:00.000Z"},{"year":2048,"spring":"2048-03-19T22:34:00.000Z","summer":"2048-06-20T15:54:00.000Z","fall":"2048-09-22T08:01:00.000Z","winter":"2048-12-21T05:02:00.000Z"},{"year":2049,"spring":"2049-03-20T04:28:00.000Z","summer":"2049-06-20T21:47:00.000Z","fall":"2049-09-22T13:42:00.000Z","winter":"2049-12-21T10:51:00.000Z"},{"year":2050,"spring":"2050-03-20T10:20:00.000Z","summer":"2050-06-21T03:33:00.000Z","fall":"2050-09-22T19:29:00.000Z","winter":"2050-12-21T16:39:00.000Z"},{"year":2051,"spring":"2051-03-20T15:58:00.000Z","summer":"2051-06-21T09:17:00.000Z","fall":"2051-09-23T01:26:00.000Z","winter":"2051-12-21T22:33:00.000Z"},{"year":2052,"spring":"2052-03-19T21:56:00.000Z","summer":"2052-06-20T15:16:00.000Z","fall":"2052-09-22T07:16:00.000Z","winter":"2052-12-21T04:18:00.000Z"},{"year":2053,"spring":"2053-03-20T03:46:00.000Z","summer":"2053-06-20T21:03:00.000Z","fall":"2053-09-22T13:05:00.000Z","winter":"2053-12-21T10:09:00.000Z"},{"year":2054,"spring":"2054-03-20T09:35:00.000Z","summer":"2054-06-21T02:47:00.000Z","fall":"2054-09-22T19:00:00.000Z","winter":"2054-12-21T16:10:00.000Z"},{"year":2055,"spring":"2055-03-20T15:28:00.000Z","summer":"2055-06-21T08:39:00.000Z","fall":"2055-09-23T00:48:00.000Z","winter":"2055-12-21T21:56:00.000Z"},{"year":2056,"spring":"2056-03-19T21:11:00.000Z","summer":"2056-06-20T14:29:00.000Z","fall":"2056-09-22T06:40:00.000Z","winter":"2056-12-21T03:52:00.000Z"},{"year":2057,"spring":"2057-03-20T03:08:00.000Z","summer":"2057-06-20T20:19:00.000Z","fall":"2057-09-22T12:23:00.000Z","winter":"2057-12-21T09:42:00.000Z"},{"year":2058,"spring":"2058-03-20T09:04:00.000Z","summer":"2058-06-21T02:03:00.000Z","fall":"2058-09-22T18:07:00.000Z","winter":"2058-12-21T15:24:00.000Z"},{"year":2059,"spring":"2059-03-20T14:44:00.000Z","summer":"2059-06-21T07:47:00.000Z","fall":"2059-09-23T00:03:00.000Z","winter":"2059-12-21T21:18:00.000Z"},{"year":2060,"spring":"2060-03-19T20:37:00.000Z","summer":"2060-06-20T13:44:00.000Z","fall":"2060-09-22T05:47:00.000Z","winter":"2060-12-21T03:00:00.000Z"},{"year":2061,"spring":"2061-03-20T02:26:00.000Z","summer":"2061-06-20T19:33:00.000Z","fall":"2061-09-22T11:31:00.000Z","winter":"2061-12-21T08:49:00.000Z"},{"year":2062,"spring":"2062-03-20T08:07:00.000Z","summer":"2062-06-21T01:10:00.000Z","fall":"2062-09-22T17:19:00.000Z","winter":"2062-12-21T14:42:00.000Z"},{"year":2063,"spring":"2063-03-20T13:59:00.000Z","summer":"2063-06-21T07:02:00.000Z","fall":"2063-09-22T23:08:00.000Z","winter":"2063-12-21T20:22:00.000Z"},{"year":2064,"spring":"2064-03-19T19:40:00.000Z","summer":"2064-06-20T12:47:00.000Z","fall":"2064-09-22T04:58:00.000Z","winter":"2064-12-21T02:10:00.000Z"},{"year":2065,"spring":"2065-03-20T01:27:00.000Z","summer":"2065-06-20T18:31:00.000Z","fall":"2065-09-22T10:41:00.000Z","winter":"2065-12-21T07:59:00.000Z"},{"year":2066,"spring":"2066-03-20T07:19:00.000Z","summer":"2066-06-21T00:16:00.000Z","fall":"2066-09-22T16:27:00.000Z","winter":"2066-12-21T13:45:00.000Z"},{"year":2067,"spring":"2067-03-20T12:55:00.000Z","summer":"2067-06-21T05:56:00.000Z","fall":"2067-09-22T22:20:00.000Z","winter":"2067-12-21T19:44:00.000Z"},{"year":2068,"spring":"2068-03-19T18:51:00.000Z","summer":"2068-06-20T11:55:00.000Z","fall":"2068-09-22T04:09:00.000Z","winter":"2068-12-21T01:34:00.000Z"},{"year":2069,"spring":"2069-03-20T00:44:00.000Z","summer":"2069-06-20T17:40:00.000Z","fall":"2069-09-22T09:51:00.000Z","winter":"2069-12-21T07:21:00.000Z"},{"year":2070,"spring":"2070-03-20T06:35:00.000Z","summer":"2070-06-20T23:22:00.000Z","fall":"2070-09-22T15:45:00.000Z","winter":"2070-12-21T13:19:00.000Z"},{"year":2071,"spring":"2071-03-20T12:36:00.000Z","summer":"2071-06-21T05:21:00.000Z","fall":"2071-09-22T21:39:00.000Z","winter":"2071-12-21T19:05:00.000Z"},{"year":2072,"spring":"2072-03-19T18:19:00.000Z","summer":"2072-06-20T11:12:00.000Z","fall":"2072-09-22T03:26:00.000Z","winter":"2072-12-21T00:54:00.000Z"},{"year":2073,"spring":"2073-03-20T00:12:00.000Z","summer":"2073-06-20T17:06:00.000Z","fall":"2073-09-22T09:14:00.000Z","winter":"2073-12-21T06:50:00.000Z"},{"year":2074,"spring":"2074-03-20T06:09:00.000Z","summer":"2074-06-20T22:59:00.000Z","fall":"2074-09-22T15:04:00.000Z","winter":"2074-12-21T12:36:00.000Z"},{"year":2075,"spring":"2075-03-20T11:48:00.000Z","summer":"2075-06-21T04:41:00.000Z","fall":"2075-09-22T21:00:00.000Z","winter":"2075-12-21T18:28:00.000Z"},{"year":2076,"spring":"2076-03-19T17:37:00.000Z","summer":"2076-06-20T10:35:00.000Z","fall":"2076-09-22T02:48:00.000Z","winter":"2076-12-21T00:12:00.000Z"},{"year":2077,"spring":"2077-03-19T23:30:00.000Z","summer":"2077-06-20T16:23:00.000Z","fall":"2077-09-22T08:35:00.000Z","winter":"2077-12-21T06:00:00.000Z"},{"year":2078,"spring":"2078-03-20T05:11:00.000Z","summer":"2078-06-20T21:58:00.000Z","fall":"2078-09-22T14:25:00.000Z","winter":"2078-12-21T11:59:00.000Z"},{"year":2079,"spring":"2079-03-20T11:03:00.000Z","summer":"2079-06-21T03:51:00.000Z","fall":"2079-09-22T20:15:00.000Z","winter":"2079-12-21T17:46:00.000Z"},{"year":2080,"spring":"2080-03-19T16:43:00.000Z","summer":"2080-06-20T09:33:00.000Z","fall":"2080-09-22T01:55:00.000Z","winter":"2080-12-20T23:31:00.000Z"},{"year":2081,"spring":"2081-03-19T22:34:00.000Z","summer":"2081-06-20T15:16:00.000Z","fall":"2081-09-22T07:38:00.000Z","winter":"2081-12-21T05:22:00.000Z"},{"year":2082,"spring":"2082-03-20T04:32:00.000Z","summer":"2082-06-20T21:04:00.000Z","fall":"2082-09-22T13:24:00.000Z","winter":"2082-12-21T11:06:00.000Z"},{"year":2083,"spring":"2083-03-20T10:08:00.000Z","summer":"2083-06-21T02:41:00.000Z","fall":"2083-09-22T19:10:00.000Z","winter":"2083-12-21T16:51:00.000Z"},{"year":2084,"spring":"2084-03-19T15:58:00.000Z","summer":"2084-06-20T08:39:00.000Z","fall":"2084-09-22T00:58:00.000Z","winter":"2084-12-20T22:40:00.000Z"},{"year":2085,"spring":"2085-03-19T21:53:00.000Z","summer":"2085-06-20T14:33:00.000Z","fall":"2085-09-22T06:43:00.000Z","winter":"2085-12-21T04:29:00.000Z"},{"year":2086,"spring":"2086-03-20T03:36:00.000Z","summer":"2086-06-20T20:11:00.000Z","fall":"2086-09-22T12:33:00.000Z","winter":"2086-12-21T10:24:00.000Z"},{"year":2087,"spring":"2087-03-20T09:27:00.000Z","summer":"2087-06-21T02:05:00.000Z","fall":"2087-09-22T18:27:00.000Z","winter":"2087-12-21T16:07:00.000Z"},{"year":2088,"spring":"2088-03-19T15:16:00.000Z","summer":"2088-06-20T07:57:00.000Z","fall":"2088-09-22T00:18:00.000Z","winter":"2088-12-20T21:56:00.000Z"},{"year":2089,"spring":"2089-03-19T21:07:00.000Z","summer":"2089-06-20T13:43:00.000Z","fall":"2089-09-22T06:07:00.000Z","winter":"2089-12-21T03:53:00.000Z"},{"year":2090,"spring":"2090-03-20T03:03:00.000Z","summer":"2090-06-20T19:37:00.000Z","fall":"2090-09-22T12:01:00.000Z","winter":"2090-12-21T09:45:00.000Z"},{"year":2091,"spring":"2091-03-20T08:40:00.000Z","summer":"2091-06-21T01:17:00.000Z","fall":"2091-09-22T17:49:00.000Z","winter":"2091-12-21T15:37:00.000Z"},{"year":2092,"spring":"2092-03-19T14:33:00.000Z","summer":"2092-06-20T07:14:00.000Z","fall":"2092-09-21T23:41:00.000Z","winter":"2092-12-20T21:31:00.000Z"},{"year":2093,"spring":"2093-03-19T20:35:00.000Z","summer":"2093-06-20T13:08:00.000Z","fall":"2093-09-22T05:30:00.000Z","winter":"2093-12-21T03:21:00.000Z"},{"year":2094,"spring":"2094-03-20T02:20:00.000Z","summer":"2094-06-20T18:40:00.000Z","fall":"2094-09-22T11:15:00.000Z","winter":"2094-12-21T09:11:00.000Z"},{"year":2095,"spring":"2095-03-20T08:14:00.000Z","summer":"2095-06-21T00:38:00.000Z","fall":"2095-09-22T17:10:00.000Z","winter":"2095-12-21T15:00:00.000Z"},{"year":2096,"spring":"2096-03-19T14:03:00.000Z","summer":"2096-06-20T06:31:00.000Z","fall":"2096-09-21T22:55:00.000Z","winter":"2096-12-20T20:46:00.000Z"},{"year":2097,"spring":"2097-03-19T19:49:00.000Z","summer":"2097-06-20T12:14:00.000Z","fall":"2097-09-22T04:37:00.000Z","winter":"2097-12-21T02:38:00.000Z"},{"year":2098,"spring":"2098-03-20T01:38:00.000Z","summer":"2098-06-20T18:01:00.000Z","fall":"2098-09-22T10:22:00.000Z","winter":"2098-12-21T08:19:00.000Z"},{"year":2099,"spring":"2099-03-20T07:17:00.000Z","summer":"2099-06-20T23:41:00.000Z","fall":"2099-09-22T16:10:00.000Z","winter":"2099-12-21T14:04:00.000Z"},{"year":2100,"spring":"2100-03-20T13:04:00.000Z","summer":"2100-06-21T05:32:00.000Z","fall":"2100-09-22T22:00:00.000Z","winter":"2100-12-21T19:51:00.000Z"}];

/* src/components/SeasonCalculator.svelte generated by Svelte v3.17.2 */
const file$3 = "src/components/SeasonCalculator.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (76:6) {:else}
function create_else_block$1(ctx) {
	let p;
	let t_value = /*event*/ ctx[1].text + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text pb-2 text-muted");
			add_location(p, file$3, 76, 6, 2633);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*events*/ 1 && t_value !== (t_value = /*event*/ ctx[1].text + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(76:6) {:else}",
		ctx
	});

	return block;
}

// (74:6) {#if event.next}
function create_if_block$2(ctx) {
	let p;
	let t_value = /*event*/ ctx[1].text + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text pb-4 text-info lead");
			add_location(p, file$3, 74, 6, 2555);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*events*/ 1 && t_value !== (t_value = /*event*/ ctx[1].text + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(74:6) {#if event.next}",
		ctx
	});

	return block;
}

// (73:4) {#each events as event}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*event*/ ctx[1].next) return create_if_block$2;
		return create_else_block$1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(73:4) {#each events as event}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let each_value = /*events*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text("Solstice and Equinox Calculator");
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Solstice and Equinox Calculator");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$3, 66, 2, 2395);
			attr_dev(div1, "class", "card-body py-3");
			add_location(div1, file$3, 69, 1, 2467);
			attr_dev(div2, "class", "card text-white bg-dark shadow");
			add_location(div2, file$3, 65, 0, 2348);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*events*/ 1) {
				each_value = /*events*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function makeEvents() {
	let today = new Date();

	//today.setMonth(today.getMonth()+8);
	let tmpList = [];

	function labelEvent(i) {
		const o = i.countdown;

		const p = {
			days: o.days == 1 ? "day" : "days",
			hours: o.hours == 1 ? "hour" : "hours",
			minutes: o.minutes == 1 ? "minute" : "minutes",
			seconds: o.seconds == 1 ? "second" : "seconds"
		};

		i.text = [
			`${i.label} is in`,
			o.days == 0 ? undefined : `${o.days} ${p.days},`,
			o.hours == 0 ? undefined : `${o.hours} ${p.hours},`,
			o.minutes == 0
			? undefined
			: `${o.minutes} ${p.minutes} and`,
			`${o.seconds} ${p.seconds}.`
		].join(" ");

		return i;
	}

	const year = new Date().getFullYear();
	const thisYear = solsticesAndEquinoxes.filter(i => i.year == year).pop();
	const nextYear = solsticesAndEquinoxes.filter(i => i.year == year + 1).pop();

	tmpList.push({
		name: "Spring",
		label: "Vernal (Spring) Equinox",
		countdown: mainspring(new Date(thisYear.spring), today)
	});

	tmpList.push({
		name: "Summer",
		label: "Summer Solstice",
		countdown: mainspring(new Date(thisYear.summer), today)
	});

	tmpList.push({
		name: "Fall",
		label: "Autumnal Equinox",
		countdown: mainspring(new Date(thisYear.fall), today)
	});

	tmpList.push({
		name: "Winter",
		label: "Winter Solstice",
		countdown: mainspring(new Date(thisYear.winter), today)
	});

	tmpList.push({
		name: "Spring",
		label: year + 1 + " Vernal (Spring) Equinox",
		countdown: mainspring(new Date(nextYear.spring), today)
	});

	tmpList.push({
		name: "Summer",
		label: year + 1 + " Summer Solstice",
		countdown: mainspring(new Date(nextYear.summer), today)
	});

	tmpList.push({
		name: "Fall",
		label: year + 1 + " Autumnal Equinox",
		countdown: mainspring(new Date(nextYear.fall), today)
	});

	tmpList.push({
		name: "Winter",
		label: year + 1 + " Winter Solstice",
		countdown: mainspring(new Date(nextYear.winter), today)
	});

	tmpList = tmpList.filter(i => i.countdown.inFuture);
	tmpList = tmpList.map(i => labelEvent(i));
	const tracker = new Set();
	const response = [];

	for (let entry of tmpList) {
		if (!tracker.has(entry.name)) {
			response.push(entry);
			tracker.add(entry.name);
		}
	}

	response[0].next = true;
	return response;
}

function instance$2($$self, $$props, $$invalidate) {
	let events = makeEvents();

	setInterval(
		function () {
			$$invalidate(0, events = makeEvents());
		},
		1000
	);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("events" in $$props) $$invalidate(0, events = $$props.events);
	};

	return [events];
}

class SeasonCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SeasonCalculator",
			options,
			id: create_fragment$2.name
		});
	}
}

const advice = [
  `Ask your older self about the regrets they may have. Will they be happy you never finished and always quit?`,
  `A two hour non-stop workout, it is a reward for persistence earned with several months of preparation and endurance training.`,
  `A Workout is similar to reaching Mount Everest. Before you arrive you have to educate your mind and incrementally prepare your body by increasing its endurance. If you just dress yourself to look like everybody else, get the same equipment, and notebooks, and even friends; you will not triumph, you will either give up, fail, or die a stupid and worthless death.`,
  `A workout must be non stop, once you stop, it is over, you go home, rest and workout a little bit longer the next day.`,
  `A workout should last over two hours.`,
  `Become a great warrior.`,
  `Become a leader and synthesize your own ideas, use the scientific method to asses their efficacy.`,
  `Become ultra, become superhuman by extending your endurance to greater and greater heights.`,
  `Be respectful of other people's hard work.`,
  `Check if your breath smells.`,
  `Check your body odor, do not use deodorants. Use hand sanitizer to kill odor causing bacteria.`,
  `Dance with your feet like a boxing butterfly.`,
  `Do not point your phone camera at other people.`,
  `Do not pretend to work out, the only person you are cheating at a gym is yourself. In a few weeks people will notice that you made no progress and will think less of you.`,
  `Do not talk, to each other, or on the phone, exercise requires focus and talking is too distracting to everyone around you.`,
  `Do not use equipment that forces you to lay down, it will make you look really bad.`,
  `Do not walk into other people's personal space.`,
  `Don't copy workouts, not everyone is working out.`,
  `Don't creep up.`,
  `Don't drop weights.`,
  `Don't eat cheat meals.`,
  `Don't give up.`,
  `Don't grunt.`,
  `Don't judge, focus on you own exercise, sometimes people come here to get away from their problems.`,
  `Don't lay.`,
  `Don't lean into people.`,
  `Don't lie, don't cheat, don't steal; don't tolerate any of those who do.`,
  `Don't lift too heavy, you won't impress anyone.`,
  `Don't make distracting noises.`,
  `Don't pretend.`,
  `Don't rest.`,
  `Don't rest, use a lower weight during your rest.`,
  `Don't sit.`,
  `Don't sit down.`,
  `Don't stare.`,
  `Don't swing weights.`,
  `Don't swing weights, engage as many muscles as you can.`,
  `Don't take days off.`,
  `Don't take selfies or photos, people don't want to be in your pictures.`,
  `Don't talk.`,
  `Don't use your phone.`,
  `Don't wear gray or black, dress like an athlete or superhero, your older self will regret dressing up like everybody else.`,
  `Drink water.`,
  `Ensure proper levels of Sodium, Magnesium, Zinc, Calcium, and Potassium.`,
  `Everything you think you know is wrong, and most of the right things require that you stop pretending that you know how to do it, and actually figure it out by trial and error on your own.`,
  `Focus.`,
  `Focus on your breathing.`,
  `Focus on your dance moves.`,
  `Focus on your exercise.`,
  `Get rid of your microwave, cut the damn cord.`,
  `Get up.`,
  `If you are desperate to begin losing weight right now, right this moment; go home and cut off all the plugs from your electric appliances.`,
  `If you are overweight, add shredded lettuce to your diet, it will lower the caloric density of your daily food intake, thus you will consume less calories per day.`,
  `If you are overweight; get rid of all kitchen appliances including your refrigerator, stove, electric skillets, ovens, toaster; and even the mixer.`,
  `If you are sick go home, don't make other people sick.`,
  `If you do end up working out every day but fail to show progress in a few weeks, then people will know you just spent a few weeks pretending to work out.`,
  `If you feel that you are too large to begin your workout at the gym, you should start at the Appalachian or Pacific Crest Trail.`,
  `If you had to stop then you chose weights that are just too heavy for you to lift.`,
  `If you have to stop then, it is too heavy.`,
  `If You lift heavy to pretend you are a bad ass, those who will notice you, will see that you are sitting around pretending to rest your legs to an arm workout, while playing with your phone in the middle of a gym.`,
  `It is not how heavy you lift, it is how long you lift your heavy for.`,
  `Keep moving.`,
  `Lower your weight if it is too heavy, don't stop - get under the muscle pain, failure, and pain buildup.`,
  `Make sure you come back tomorrow.`,
  `Move your feet.`,
  `Move your feet, like a boxer.`,
  `Never Stop.`,
  `Never use machines that require sitting or laying down.`,
  `Prepare to return tomorrow.`,
  `Put all the weights you are not using back on the rack.`,
  `Put your phone away.`,
  `Quit smoking, people can't care about you if you don't care about yourself.`,
  `Re-hydrate.`,
  `Respect personal space.`,
  `Stop Pretending.`,
  `Stop Resting.`,
  `Stop swinging your weights.`,
  `The authenticity of your workout, represents the authenticity of your mind.`,
  `There is no such thing as sets and reps, your body will not receive the signal to adapt your musculature if you just workout for two minutes an hour.`,
  `There is no time, use both of your hands at the same time, don't make it easy, make it difficult; tell your body that you need more.`,
  `The triumph is not in what you look like, anybody can have surgery, the triumph is a sham - become a protector of your years, keeper of your youth.`,
  `Working out without months of training and preparations leading up to your workout, will result in lethargy, dehydration, injury, and death.`,
  `You must accept the responsibility for your own existence, only you can fix your problems.`,
  `You must train for several months, prior to your first real workout.`,
];

function main(){
  return advice;
}

var bodybuildingAdvice = main;

/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
}
/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
var shuffleArray = shuffle;

var calculatePercent = function(value, upper, precision=2){

  let pct = (100.0 * value / upper) / 100;

  pct = pct.toPrecision(precision);

  return parseFloat( pct )

};

/* src/components/BodybuildingAdvice.svelte generated by Svelte v3.17.2 */
const file$4 = "src/components/BodybuildingAdvice.svelte";

// (97:20) 
function create_if_block_1(ctx) {
	let div6;
	let div0;
	let t0;
	let t1;
	let button;
	let raw_value = octicons.gear.toSVG({ "class": "fill-white" }) + "";
	let t2;
	let div5;
	let p;
	let t3;
	let t4;
	let div2;
	let div1;
	let t5;
	let div4;
	let div3;
	let dispose;

	const block = {
		c: function create() {
			div6 = element("div");
			div0 = element("div");
			t0 = text(/*title*/ ctx[6]);
			t1 = space();
			button = element("button");
			t2 = space();
			div5 = element("div");
			p = element("p");
			t3 = text(/*advice*/ ctx[5]);
			t4 = space();
			div2 = element("div");
			div1 = element("div");
			t5 = space();
			div4 = element("div");
			div3 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true, style: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*title*/ ctx[6]);
			t1 = claim_space(div0_nodes);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p = claim_element(div5_nodes, "P", { class: true, style: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, /*advice*/ ctx[5]);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true, style: true });
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true, style: true });
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div3).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$4, 102, 6, 2513);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$4, 100, 4, 2462);
			attr_dev(p, "class", "card-text pb-4 text-warning lead text-center pt-4");
			set_style(p, "cursor", "pointer");
			add_location(p, file$4, 107, 6, 2727);
			attr_dev(div1, "class", "progress-bar bg-warning");
			attr_dev(div1, "role", "progressbar");
			set_style(div1, "width", /*progress*/ ctx[2] + "%");
			attr_dev(div1, "aria-valuenow", /*progress*/ ctx[2]);
			attr_dev(div1, "aria-valuemin", "0");
			attr_dev(div1, "aria-valuemax", "100");
			add_location(div1, file$4, 110, 8, 2920);
			attr_dev(div2, "class", "progress");
			set_style(div2, "height", "1px");
			set_style(div2, "background", "black");
			add_location(div2, file$4, 109, 6, 2849);
			attr_dev(div3, "class", "progress-bar bg-secondary");
			attr_dev(div3, "role", "progressbar");
			set_style(div3, "width", /*procession*/ ctx[3] + "%");
			attr_dev(div3, "aria-valuenow", /*procession*/ ctx[3]);
			attr_dev(div3, "aria-valuemin", "0");
			attr_dev(div3, "aria-valuemax", "100");
			add_location(div3, file$4, 114, 8, 3172);
			attr_dev(div4, "class", "progress mt-1");
			set_style(div4, "height", "1px");
			set_style(div4, "background", "black");
			add_location(div4, file$4, 113, 6, 3096);
			attr_dev(div5, "class", "card-body py-3");
			add_location(div5, file$4, 105, 3, 2691);
			attr_dev(div6, "class", "card text-white bg-dark shadow");
			set_style(div6, "min-height", "23rem");
			add_location(div6, file$4, 98, 2, 2384);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div6, t2);
			append_dev(div6, div5);
			append_dev(div5, p);
			append_dev(p, t3);
			append_dev(div5, t4);
			append_dev(div5, div2);
			append_dev(div2, div1);
			append_dev(div5, t5);
			append_dev(div5, div4);
			append_dev(div4, div3);

			dispose = [
				listen_dev(button, "click", /*click_handler_1*/ ctx[13], false, false, false),
				listen_dev(p, "click", /*next*/ ctx[7], false, false, false)
			];
		},
		p: function update(ctx, dirty) {
			if (dirty & /*advice*/ 32) set_data_dev(t3, /*advice*/ ctx[5]);

			if (dirty & /*progress*/ 4) {
				set_style(div1, "width", /*progress*/ ctx[2] + "%");
			}

			if (dirty & /*progress*/ 4) {
				attr_dev(div1, "aria-valuenow", /*progress*/ ctx[2]);
			}

			if (dirty & /*procession*/ 8) {
				set_style(div3, "width", /*procession*/ ctx[3] + "%");
			}

			if (dirty & /*procession*/ 8) {
				attr_dev(div3, "aria-valuenow", /*procession*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(97:20) ",
		ctx
	});

	return block;
}

// (71:0) {#if view == 0}
function create_if_block$3(ctx) {
	let div6;
	let div0;
	let t0;
	let button;
	let raw_value = octicons.checklist.toSVG({ "class": "fill-white" }) + "";
	let t1;
	let div5;
	let div3;
	let label;
	let t2;
	let t3;
	let div2;
	let input;
	let input_updating = false;
	let t4;
	let div1;
	let span;
	let t5;
	let t6;
	let div4;
	let t7;
	let t8_value = /*list*/ ctx[4].length + "";
	let t8;
	let t9;
	let t10;
	let t11;
	let dispose;

	function input_input_handler() {
		input_updating = true;
		/*input_input_handler*/ ctx[12].call(input);
	}

	const block = {
		c: function create() {
			div6 = element("div");
			div0 = element("div");
			t0 = text("Preferences\n      ");
			button = element("button");
			t1 = space();
			div5 = element("div");
			div3 = element("div");
			label = element("label");
			t2 = text("Message Duration");
			t3 = space();
			div2 = element("div");
			input = element("input");
			t4 = space();
			div1 = element("div");
			span = element("span");
			t5 = text("seconds");
			t6 = space();
			div4 = element("div");
			t7 = text("Database contains ");
			t8 = text(t8_value);
			t9 = text(" items. Current shuffle progress ");
			t10 = text(/*procession*/ ctx[3]);
			t11 = text("%.");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true, style: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Preferences\n      ");
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label_nodes = children(label);
			t2 = claim_text(label_nodes, "Message Duration");
			label_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span_nodes = children(span);
			t5 = claim_text(span_nodes, "seconds");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t7 = claim_text(div4_nodes, "Database contains ");
			t8 = claim_text(div4_nodes, t8_value);
			t9 = claim_text(div4_nodes, " items. Current shuffle progress ");
			t10 = claim_text(div4_nodes, /*procession*/ ctx[3]);
			t11 = claim_text(div4_nodes, "%.");
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$4, 75, 6, 1550);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$4, 73, 4, 1495);
			attr_dev(label, "class", "small");
			attr_dev(label, "for", "duration");
			add_location(label, file$4, 80, 8, 1801);
			attr_dev(input, "type", "number");
			attr_dev(input, "id", "duration");
			attr_dev(input, "min", "10");
			attr_dev(input, "max", "120");
			attr_dev(input, "class", "form-control");
			attr_dev(input, "placeholder", "seconds");
			add_location(input, file$4, 82, 8, 1909);
			attr_dev(span, "class", "input-group-text");
			attr_dev(span, "id", "duration-addon");
			add_location(span, file$4, 84, 10, 2082);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$4, 83, 10, 2039);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$4, 81, 8, 1870);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$4, 79, 6, 1769);
			attr_dev(div4, "class", "card-text small text-info");
			add_location(div4, file$4, 89, 6, 2200);
			attr_dev(div5, "class", "card-body py-3");
			add_location(div5, file$4, 77, 4, 1733);
			attr_dev(div6, "class", "card text-white bg-dark shadow");
			set_style(div6, "min-height", "23rem");
			add_location(div6, file$4, 72, 2, 1418);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div0);
			append_dev(div0, t0);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div6, t1);
			append_dev(div6, div5);
			append_dev(div5, div3);
			append_dev(div3, label);
			append_dev(label, t2);
			append_dev(div3, t3);
			append_dev(div3, div2);
			append_dev(div2, input);
			set_input_value(input, /*duration*/ ctx[1]);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t5);
			append_dev(div5, t6);
			append_dev(div5, div4);
			append_dev(div4, t7);
			append_dev(div4, t8);
			append_dev(div4, t9);
			append_dev(div4, t10);
			append_dev(div4, t11);

			dispose = [
				listen_dev(button, "click", /*click_handler*/ ctx[11], false, false, false),
				listen_dev(input, "input", input_input_handler)
			];
		},
		p: function update(ctx, dirty) {
			if (!input_updating && dirty & /*duration*/ 2) {
				set_input_value(input, /*duration*/ ctx[1]);
			}

			input_updating = false;
			if (dirty & /*list*/ 16 && t8_value !== (t8_value = /*list*/ ctx[4].length + "")) set_data_dev(t8, t8_value);
			if (dirty & /*procession*/ 8) set_data_dev(t10, /*procession*/ ctx[3]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$3.name,
		type: "if",
		source: "(71:0) {#if view == 0}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*view*/ ctx[0] == 0) return create_if_block$3;
		if (/*view*/ ctx[0] == 1) return create_if_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type && current_block_type(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if (if_block) if_block.d(1);
				if_block = current_block_type && current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) {
				if_block.d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	const printf = sprintf.sprintf;
	let title = "Bodybuilding Advice";

	/*
  0 is Preference View
  1 is Application View
  Add as many as needed.
*/
	let view = 1; // controlled via UI icons

	// Preferences
	let duration = 25; // seconds, user can set this in Preferences

	// Timer State, automatically computed
	let elapsed = 0; // elapsed seconds

	let progress = 0; // how long advice appeared thus far
	let procession = 0; // overall progress through the current shuffle.

	// Data State
	let list = shuffleArray(bodybuildingAdvice());

	let index = 0;

	// Initialize
	let advice = list[index];

	setInterval(
		function () {
			if (elapsed >= duration) {
				// Advance
				next();
			}

			elapsed++; // each second elapsed is incremented
			$$invalidate(2, progress = calculatePercent(elapsed, duration) * 100);
			$$invalidate(3, procession = printf("%.0f", calculatePercent(index + 1, list.length) * 100));
		},
		1000
	);

	function next() {
		// Reset Timer State
		elapsed = 0;

		$$invalidate(2, progress = 0);

		// Perform Index Logic
		index++;

		if (index + 1 > list.length) {
			// End of list, re-shuffle, and reset index.
			$$invalidate(4, list = shuffleArray(bodybuildingAdvice()));

			index = 0;
		}

		// Set Advice
		$$invalidate(5, advice = list[index]);
	}

	const click_handler = e => $$invalidate(0, view = 1);

	function input_input_handler() {
		duration = to_number(this.value);
		$$invalidate(1, duration);
	}

	const click_handler_1 = e => $$invalidate(0, view = 0);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(6, title = $$props.title);
		if ("view" in $$props) $$invalidate(0, view = $$props.view);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
		if ("elapsed" in $$props) elapsed = $$props.elapsed;
		if ("progress" in $$props) $$invalidate(2, progress = $$props.progress);
		if ("procession" in $$props) $$invalidate(3, procession = $$props.procession);
		if ("list" in $$props) $$invalidate(4, list = $$props.list);
		if ("index" in $$props) index = $$props.index;
		if ("advice" in $$props) $$invalidate(5, advice = $$props.advice);
	};

	return [
		view,
		duration,
		progress,
		procession,
		list,
		advice,
		title,
		next,
		elapsed,
		index,
		printf,
		click_handler,
		input_input_handler,
		click_handler_1
	];
}

class BodybuildingAdvice extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BodybuildingAdvice",
			options,
			id: create_fragment$3.name
		});
	}
}

var oneof = function(list){

  if(list == undefined) return null;
  if(list.length === 0) return null;

  var min = 0;
  var max = list.length-1;

  var idx = Math.floor( Math.random() * (max - min + 1)) + min;
  
  return list[idx];

};

/* src/components/RandomVideo.svelte generated by Svelte v3.17.2 */
const file$5 = "src/components/RandomVideo.svelte";

function create_fragment$4(ctx) {
	let div1;
	let div0;
	let t0_value = /*video*/ ctx[0].title + "";
	let t0;
	let t1;
	let a;
	let img;
	let img_src_value;
	let img_alt_value;
	let a_href_value;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			a = claim_element(div1_nodes, "A", { href: true, rel: true, target: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
			a_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$5, 36, 0, 626);
			if (img.src !== (img_src_value = /*video*/ ctx[0].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-bottom");
			attr_dev(img, "alt", img_alt_value = /*video*/ ctx[0].title);
			add_location(img, file$5, 39, 66, 741);
			attr_dev(a, "href", a_href_value = /*video*/ ctx[0].url);
			attr_dev(a, "rel", "noopener noreferrer");
			attr_dev(a, "target", "_blank");
			add_location(a, file$5, 39, 2, 677);
			attr_dev(div1, "class", "card bg-dark text-white shadow");
			add_location(div1, file$5, 35, 0, 581);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div1, t1);
			append_dev(div1, a);
			append_dev(a, img);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*video*/ 1 && t0_value !== (t0_value = /*video*/ ctx[0].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*video*/ 1 && img.src !== (img_src_value = /*video*/ ctx[0].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*video*/ 1 && img_alt_value !== (img_alt_value = /*video*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*video*/ 1 && a_href_value !== (a_href_value = /*video*/ ctx[0].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function instance$4($$self, $$props, $$invalidate) {
	let videos = [];
	let video = "";

	onMount(async function () {
		const res = await fetch("youtube.json");
		videos = await res.json();
		$$invalidate(0, video = oneof(videos));

		setInterval(
			function () {
				$$invalidate(0, video = oneof(videos));
			},
			getRandomIntInclusive(10 * 1000, 20 * 1000)
		);
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("videos" in $$props) videos = $$props.videos;
		if ("video" in $$props) $$invalidate(0, video = $$props.video);
	};

	return [video];
}

class RandomVideo extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "RandomVideo",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/containers/PreferenceCard.svelte generated by Svelte v3.17.2 */
const file$6 = "src/containers/PreferenceCard.svelte";
const get_application_slot_changes = dirty => ({});
const get_application_slot_context = ctx => ({});
const get_preferences_slot_changes = dirty => ({});
const get_preferences_slot_context = ctx => ({});

// (35:20) 
function create_if_block_1$1(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let button;
	let raw_value = octicons.gear.toSVG({ "class": "fill-white" }) + "";
	let t2;
	let div1;
	let p;
	let t3;
	let current;
	let dispose;
	const application_slot_template = /*$$slots*/ ctx[3].application;
	const application_slot = create_slot(application_slot_template, ctx, /*$$scope*/ ctx[2], get_application_slot_context);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			button = element("button");
			t2 = space();
			div1 = element("div");

			if (!application_slot) {
				p = element("p");
				t3 = text("Application Empty");
			}

			if (application_slot) application_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, style: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*title*/ ctx[0]);
			t1 = claim_space(div0_nodes);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			if (!application_slot) {
				p = claim_element(div1_nodes, "P", { class: true });
				var p_nodes = children(p);
				t3 = claim_text(p_nodes, "Application Empty");
				p_nodes.forEach(detach_dev);
			}

			if (application_slot) application_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$6, 40, 6, 836);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$6, 38, 4, 785);

			if (!application_slot) {
				attr_dev(p, "class", "card-text");
				add_location(p, file$6, 46, 6, 1080);
			}

			attr_dev(div1, "class", "card-body py-3");
			add_location(div1, file$6, 43, 3, 1014);
			attr_dev(div2, "class", "card text-white bg-dark shadow");
			set_style(div2, "min-height", "23rem");
			add_location(div2, file$6, 36, 2, 707);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div2, t2);
			append_dev(div2, div1);

			if (!application_slot) {
				append_dev(div1, p);
				append_dev(p, t3);
			}

			if (application_slot) {
				application_slot.m(div1, null);
			}

			current = true;
			dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[5], false, false, false);
		},
		p: function update(ctx, dirty) {
			if (!current || dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);

			if (application_slot && application_slot.p && dirty & /*$$scope*/ 4) {
				application_slot.p(get_slot_context(application_slot_template, ctx, /*$$scope*/ ctx[2], get_application_slot_context), get_slot_changes(application_slot_template, /*$$scope*/ ctx[2], dirty, get_application_slot_changes));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(application_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(application_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (application_slot) application_slot.d(detaching);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(35:20) ",
		ctx
	});

	return block;
}

// (17:0) {#if view == 0}
function create_if_block$4(ctx) {
	let div2;
	let div0;
	let t0;
	let button;
	let raw_value = octicons.checklist.toSVG({ "class": "fill-white" }) + "";
	let t1;
	let div1;
	let p;
	let t2;
	let current;
	let dispose;
	const preferences_slot_template = /*$$slots*/ ctx[3].preferences;
	const preferences_slot = create_slot(preferences_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_slot_context);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text("Preferences\n      ");
			button = element("button");
			t1 = space();
			div1 = element("div");

			if (!preferences_slot) {
				p = element("p");
				t2 = text("Preferences Empty");
			}

			if (preferences_slot) preferences_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, style: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Preferences\n      ");
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			if (!preferences_slot) {
				p = claim_element(div1_nodes, "P", { class: true });
				var p_nodes = children(p);
				t2 = claim_text(p_nodes, "Preferences Empty");
				p_nodes.forEach(detach_dev);
			}

			if (preferences_slot) preferences_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$6, 21, 6, 343);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$6, 19, 4, 288);

			if (!preferences_slot) {
				attr_dev(p, "class", "card-text");
				add_location(p, file$6, 26, 6, 592);
			}

			attr_dev(div1, "class", "card-body py-3");
			add_location(div1, file$6, 23, 4, 526);
			attr_dev(div2, "class", "card text-white bg-dark shadow");
			set_style(div2, "min-height", "23rem");
			add_location(div2, file$6, 18, 2, 211);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div2, t1);
			append_dev(div2, div1);

			if (!preferences_slot) {
				append_dev(div1, p);
				append_dev(p, t2);
			}

			if (preferences_slot) {
				preferences_slot.m(div1, null);
			}

			current = true;
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
		},
		p: function update(ctx, dirty) {
			if (preferences_slot && preferences_slot.p && dirty & /*$$scope*/ 4) {
				preferences_slot.p(get_slot_context(preferences_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_slot_context), get_slot_changes(preferences_slot_template, /*$$scope*/ ctx[2], dirty, get_preferences_slot_changes));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferences_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferences_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (preferences_slot) preferences_slot.d(detaching);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$4.name,
		type: "if",
		source: "(17:0) {#if view == 0}",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$4, create_if_block_1$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*view*/ ctx[1] == 0) return 0;
		if (/*view*/ ctx[1] == 1) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let { title = "Preferences Card" } = $$props;

	/*
  0 is Preference View
  1 is Application View
*/
	let view = 1; // controlled via UI icons

	const writable_props = ["title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PreferenceCard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	const click_handler = e => $$invalidate(1, view = 1);
	const click_handler_1 = e => $$invalidate(1, view = 0);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { title, view };
	};

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("view" in $$props) $$invalidate(1, view = $$props.view);
	};

	return [title, view, $$scope, $$slots, click_handler, click_handler_1];
}

class PreferenceCard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { title: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PreferenceCard",
			options,
			id: create_fragment$5.name
		});
	}

	get title() {
		throw new Error("<PreferenceCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<PreferenceCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/News.svelte generated by Svelte v3.17.2 */
const file$7 = "src/components/News.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (56:1) <div slot="preferences" class="card-text">
function create_preferences_slot(ctx) {
	let div0;
	let div3;
	let label;
	let t0;
	let t1;
	let div2;
	let input;
	let input_updating = false;
	let t2;
	let div1;
	let span;
	let t3;
	let dispose;

	function input_input_handler() {
		input_updating = true;
		/*input_input_handler*/ ctx[3].call(input);
	}

	const block = {
		c: function create() {
			div0 = element("div");
			div3 = element("div");
			label = element("label");
			t0 = text("News Items");
			t1 = space();
			div2 = element("div");
			input = element("input");
			t2 = space();
			div1 = element("div");
			span = element("span");
			t3 = text("items");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, "News Items");
			label_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, "items");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label, "class", "small");
			attr_dev(label, "for", "duration");
			add_location(label, file$7, 58, 4, 1821);
			attr_dev(input, "type", "number");
			attr_dev(input, "id", "duration");
			attr_dev(input, "min", "2");
			attr_dev(input, "max", "10");
			attr_dev(input, "class", "form-control");
			attr_dev(input, "placeholder", "number of items to display");
			add_location(input, file$7, 60, 4, 1915);
			attr_dev(span, "class", "input-group-text");
			attr_dev(span, "id", "duration-addon");
			add_location(span, file$7, 62, 6, 2094);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$7, 61, 6, 2055);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$7, 59, 4, 1880);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$7, 57, 2, 1793);
			attr_dev(div0, "slot", "preferences");
			attr_dev(div0, "class", "card-text");
			add_location(div0, file$7, 55, 1, 1747);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div3);
			append_dev(div3, label);
			append_dev(label, t0);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, input);
			set_input_value(input, /*items*/ ctx[0]);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t3);
			dispose = listen_dev(input, "input", input_input_handler);
		},
		p: function update(ctx, dirty) {
			if (!input_updating && dirty & /*items*/ 1) {
				set_input_value(input, /*items*/ ctx[0]);
			}

			input_updating = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_slot.name,
		type: "slot",
		source: "(56:1) <div slot=\\\"preferences\\\" class=\\\"card-text\\\">",
		ctx
	});

	return block;
}

// (72:6) {#if i<items}
function create_if_block$5(ctx) {
	let p;
	let html_tag;
	let raw_value = /*item*/ ctx[4].html + "";
	let t0;
	let t1_value = /*item*/ ctx[4].ago + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text(" · ");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, " · ");
			t1 = claim_text(p_nodes, t1_value);
			t2 = claim_space(p_nodes);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(raw_value, t0);
			attr_dev(p, "class", "card-text text-info small");
			add_location(p, file$7, 72, 8, 2346);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			html_tag.m(p);
			append_dev(p, t0);
			append_dev(p, t1);
			append_dev(p, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 2 && raw_value !== (raw_value = /*item*/ ctx[4].html + "")) html_tag.p(raw_value);
			if (dirty & /*news*/ 2 && t1_value !== (t1_value = /*item*/ ctx[4].ago + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$5.name,
		type: "if",
		source: "(72:6) {#if i<items}",
		ctx
	});

	return block;
}

// (71:4) {#each news as item, i}
function create_each_block$1(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[6] < /*items*/ ctx[0] && create_if_block$5(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*i*/ ctx[6] < /*items*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$5(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(71:4) {#each news as item, i}",
		ctx
	});

	return block;
}

// (70:1) <div slot="application" class="card-text" style="max-height: 18rem; overflow-y: auto;">
function create_application_slot(ctx) {
	let div;
	let each_value = /*news*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true, class: true, style: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "application");
			attr_dev(div, "class", "card-text");
			set_style(div, "max-height", "18rem");
			set_style(div, "overflow-y", "auto");
			add_location(div, file$7, 69, 1, 2202);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*items, news*/ 3) {
				each_value = /*news*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_application_slot.name,
		type: "slot",
		source: "(70:1) <div slot=\\\"application\\\" class=\\\"card-text\\\" style=\\\"max-height: 18rem; overflow-y: auto;\\\">",
		ctx
	});

	return block;
}

// (54:0) <PreferenceCard title="News">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = space();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(54:0) <PreferenceCard title=\\\"News\\\">",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let current;

	const preferencecard = new PreferenceCard({
			props: {
				title: "News",
				$$slots: {
					default: [create_default_slot],
					application: [create_application_slot],
					preferences: [create_preferences_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(preferencecard.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(preferencecard.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(preferencecard, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const preferencecard_changes = {};

			if (dirty & /*$$scope, news, items*/ 131) {
				preferencecard_changes.$$scope = { dirty, ctx };
			}

			preferencecard.$set(preferencecard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferencecard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferencecard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(preferencecard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$6($$self, $$props, $$invalidate) {
	let items = 3;

	// Application
	let news = [
		{
			date: "2020-01-23T01:07:38.773Z",
			html: "Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a generic reusable container. Employing the container in News component."
		},
		{
			date: "2020-01-22T03:38:19.680Z",
			html: "Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list."
		},
		{
			date: "2020-01-22T03:23:19.680Z",
			html: "Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components."
		},
		{
			date: "2020-01-22T03:22:19.680Z",
			html: "Testing <a href=\"https://octicons.github.com/\" rel=\"noopener noreferrer\" target=\"_blank\">octicons</a>. I love the " + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + " icon."
		}
	];

	function recalculateTimestamps() {
		$$invalidate(1, news = news.map(i => {
			i.ago = moment(i.date).from(moment());
			return i;
		}).map(i => {
			i.html = octicons.squirrel.toSVG({ "class": "fill-white shake" }) + " " + i.html;
			return i;
		}));
	}

	// Timers
	setInterval(recalculateTimestamps, 60000);

	// Initialization
	recalculateTimestamps();

	function input_input_handler() {
		items = to_number(this.value);
		$$invalidate(0, items);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("news" in $$props) $$invalidate(1, news = $$props.news);
	};

	return [items, news, recalculateTimestamps, input_input_handler];
}

class News extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "News",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.17.2 */
const file$8 = "src/routes/index.svelte";

function create_fragment$7(ctx) {
	let t0;
	let div11;
	let div10;
	let div2;
	let div1;
	let a0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t1;
	let div0;
	let h5;
	let t2_value = /*videos*/ ctx[0].name + "";
	let t2;
	let t3;
	let p0;
	let t4_value = /*videos*/ ctx[0].text + "";
	let t4;
	let t5;
	let a1;
	let t6_value = /*videos*/ ctx[0].name + "";
	let t6;
	let t7;
	let a1_href_value;
	let t8;
	let p1;
	let small;
	let t9;
	let t10_value = /*videos*/ ctx[0].changed + "";
	let t10;
	let t11;
	let div3;
	let t12;
	let div4;
	let t13;
	let div5;
	let t14;
	let div6;
	let t15;
	let div7;
	let t16;
	let div8;
	let t17;
	let div9;
	let current;
	const seasoncalculator = new SeasonCalculator({ $$inline: true });
	const songbeatcalculator = new SongBeatCalculator({ $$inline: true });
	const songtempochangecalculator = new SongTempoChangeCalculator({ $$inline: true });
	const bodybuildingadvice = new BodybuildingAdvice({ $$inline: true });
	const news_1 = new News({ $$inline: true });
	const randomvideo0 = new RandomVideo({ $$inline: true });
	const randomvideo1 = new RandomVideo({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div11 = element("div");
			div10 = element("div");
			div2 = element("div");
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t1 = space();
			div0 = element("div");
			h5 = element("h5");
			t2 = text(t2_value);
			t3 = space();
			p0 = element("p");
			t4 = text(t4_value);
			t5 = space();
			a1 = element("a");
			t6 = text(t6_value);
			t7 = text(" »");
			t8 = space();
			p1 = element("p");
			small = element("small");
			t9 = text("Updated ");
			t10 = text(t10_value);
			t11 = space();
			div3 = element("div");
			create_component(seasoncalculator.$$.fragment);
			t12 = space();
			div4 = element("div");
			create_component(songbeatcalculator.$$.fragment);
			t13 = space();
			div5 = element("div");
			create_component(songtempochangecalculator.$$.fragment);
			t14 = space();
			div6 = element("div");
			create_component(bodybuildingadvice.$$.fragment);
			t15 = space();
			div7 = element("div");
			create_component(news_1.$$.fragment);
			t16 = space();
			div8 = element("div");
			create_component(randomvideo0.$$.fragment);
			t17 = space();
			div9 = element("div");
			create_component(randomvideo1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-43404m\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div2 = claim_element(div10_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { src: true, class: true, alt: true });
			a0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t2 = claim_text(h5_nodes, t2_value);
			h5_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, t4_value);
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, t6_value);
			t7 = claim_text(a1_nodes, " »");
			a1_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			small = claim_element(p1_nodes, "SMALL", { class: true });
			var small_nodes = children(small);
			t9 = claim_text(small_nodes, "Updated ");
			t10 = claim_text(small_nodes, t10_value);
			small_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(seasoncalculator.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t12 = claim_space(div10_nodes);
			div4 = claim_element(div10_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(songbeatcalculator.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t13 = claim_space(div10_nodes);
			div5 = claim_element(div10_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(songtempochangecalculator.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t14 = claim_space(div10_nodes);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(bodybuildingadvice.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			t15 = claim_space(div10_nodes);
			div7 = claim_element(div10_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			claim_component(news_1.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			t16 = claim_space(div10_nodes);
			div8 = claim_element(div10_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			claim_component(randomvideo0.$$.fragment, div8_nodes);
			div8_nodes.forEach(detach_dev);
			t17 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			claim_component(randomvideo1.$$.fragment, div9_nodes);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cat Pea";
			if (img.src !== (img_src_value = /*videos*/ ctx[0].img)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-top");
			attr_dev(img, "alt", img_alt_value = /*videos*/ ctx[0].name);
			add_location(img, file$8, 60, 33, 2027);
			attr_dev(a0, "href", a0_href_value = /*videos*/ ctx[0].url);
			add_location(a0, file$8, 60, 10, 2004);
			attr_dev(h5, "class", "card-text");
			add_location(h5, file$8, 62, 12, 2147);
			attr_dev(p0, "class", "card-text");
			add_location(p0, file$8, 63, 12, 2200);
			attr_dev(a1, "href", a1_href_value = /*videos*/ ctx[0].url);
			attr_dev(a1, "class", "btn btn-primary");
			add_location(a1, file$8, 64, 12, 2251);
			attr_dev(small, "class", "text-muted");
			add_location(small, file$8, 65, 33, 2357);
			attr_dev(p1, "class", "card-text");
			add_location(p1, file$8, 65, 12, 2336);
			attr_dev(div0, "class", "card-body p-3");
			add_location(div0, file$8, 61, 10, 2107);
			attr_dev(div1, "class", "card text-white bg-dark shadow");
			add_location(div1, file$8, 59, 8, 1949);
			attr_dev(div2, "class", "col pb-3");
			add_location(div2, file$8, 58, 4, 1918);
			attr_dev(div3, "class", "col pb-3");
			add_location(div3, file$8, 70, 4, 2468);
			attr_dev(div4, "class", "col pb-3");
			add_location(div4, file$8, 74, 4, 2531);
			attr_dev(div5, "class", "col pb-3");
			add_location(div5, file$8, 78, 4, 2596);
			attr_dev(div6, "class", "col pb-3");
			add_location(div6, file$8, 82, 4, 2668);
			attr_dev(div7, "class", "col pb-3");
			add_location(div7, file$8, 86, 4, 2733);
			attr_dev(div8, "class", "col pb-3");
			add_location(div8, file$8, 90, 4, 2784);
			attr_dev(div9, "class", "col pb-3");
			add_location(div9, file$8, 94, 4, 2842);
			attr_dev(div10, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div10, file$8, 56, 4, 1856);
			attr_dev(div11, "class", "container-fluid");
			add_location(div11, file$8, 55, 0, 1822);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div11, anchor);
			append_dev(div11, div10);
			append_dev(div10, div2);
			append_dev(div2, div1);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t2);
			append_dev(div0, t3);
			append_dev(div0, p0);
			append_dev(p0, t4);
			append_dev(div0, t5);
			append_dev(div0, a1);
			append_dev(a1, t6);
			append_dev(a1, t7);
			append_dev(div0, t8);
			append_dev(div0, p1);
			append_dev(p1, small);
			append_dev(small, t9);
			append_dev(small, t10);
			append_dev(div10, t11);
			append_dev(div10, div3);
			mount_component(seasoncalculator, div3, null);
			append_dev(div10, t12);
			append_dev(div10, div4);
			mount_component(songbeatcalculator, div4, null);
			append_dev(div10, t13);
			append_dev(div10, div5);
			mount_component(songtempochangecalculator, div5, null);
			append_dev(div10, t14);
			append_dev(div10, div6);
			mount_component(bodybuildingadvice, div6, null);
			append_dev(div10, t15);
			append_dev(div10, div7);
			mount_component(news_1, div7, null);
			append_dev(div10, t16);
			append_dev(div10, div8);
			mount_component(randomvideo0, div8, null);
			append_dev(div10, t17);
			append_dev(div10, div9);
			mount_component(randomvideo1, div9, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*videos*/ 1 && img.src !== (img_src_value = /*videos*/ ctx[0].img)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*videos*/ 1 && img_alt_value !== (img_alt_value = /*videos*/ ctx[0].name)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (!current || dirty & /*videos*/ 1 && a0_href_value !== (a0_href_value = /*videos*/ ctx[0].url)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if ((!current || dirty & /*videos*/ 1) && t2_value !== (t2_value = /*videos*/ ctx[0].name + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*videos*/ 1) && t4_value !== (t4_value = /*videos*/ ctx[0].text + "")) set_data_dev(t4, t4_value);
			if ((!current || dirty & /*videos*/ 1) && t6_value !== (t6_value = /*videos*/ ctx[0].name + "")) set_data_dev(t6, t6_value);

			if (!current || dirty & /*videos*/ 1 && a1_href_value !== (a1_href_value = /*videos*/ ctx[0].url)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if ((!current || dirty & /*videos*/ 1) && t10_value !== (t10_value = /*videos*/ ctx[0].changed + "")) set_data_dev(t10, t10_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(seasoncalculator.$$.fragment, local);
			transition_in(songbeatcalculator.$$.fragment, local);
			transition_in(songtempochangecalculator.$$.fragment, local);
			transition_in(bodybuildingadvice.$$.fragment, local);
			transition_in(news_1.$$.fragment, local);
			transition_in(randomvideo0.$$.fragment, local);
			transition_in(randomvideo1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(seasoncalculator.$$.fragment, local);
			transition_out(songbeatcalculator.$$.fragment, local);
			transition_out(songtempochangecalculator.$$.fragment, local);
			transition_out(bodybuildingadvice.$$.fragment, local);
			transition_out(news_1.$$.fragment, local);
			transition_out(randomvideo0.$$.fragment, local);
			transition_out(randomvideo1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div11);
			destroy_component(seasoncalculator);
			destroy_component(songbeatcalculator);
			destroy_component(songtempochangecalculator);
			destroy_component(bodybuildingadvice);
			destroy_component(news_1);
			destroy_component(randomvideo0);
			destroy_component(randomvideo1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	const videos = {
		created: "2020-01-17T01:57:49.730Z",
		modified: "2020-01-17T01:57:49.730Z",
		changed: "recently",
		name: "Video Library",
		text: "Cat Pea Video Library contains hundreds of interesting, informative, and educational videos.",
		url: "/video?p=0&i=8",
		img: "videos.png"
	};

	let news = [
		{
			date: "2020-01-22T03:38:19.680Z",
			html: "Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list."
		},
		{
			date: "2020-01-22T03:23:19.680Z",
			html: "Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components."
		},
		{
			date: "2020-01-22T03:22:19.680Z",
			html: "Testing <a href=\"https://octicons.github.com/\" rel=\"noopener noreferrer\" target=\"_blank\">octicons</a>. I love the " + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + " icon."
		}
	];

	function recalculateTimestamps() {
		$$invalidate(0, videos.changed = moment(videos.modified).from(moment()), videos);

		news = news.map(i => {
			i.ago = moment(i.date).from(moment());
			return i;
		});
	}

	setInterval(recalculateTimestamps, 60000);
	recalculateTimestamps();

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("news" in $$props) news = $$props.news;
	};

	return [videos];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$7.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2Q3YWZkMzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29jdGljb25zL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Tb25nQmVhdENhbGN1bGF0b3Iuc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NwcmludGYtanMvc3JjL3NwcmludGYuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Tb25nVGVtcG9DaGFuZ2VDYWxjdWxhdG9yLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9tYWluc3ByaW5nL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NvbHN0aWNlcy1hbmQtZXF1aW5veGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2Vhc29uQ2FsY3VsYXRvci5zdmVsdGUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9keWJ1aWxkaW5nLWFkdmljZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zaHVmZmxlLWFycmF5L2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhbGN1bGF0ZS1wZXJjZW50L2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQm9keWJ1aWxkaW5nQWR2aWNlLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vbmVvZi9pbmRleC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JhbmRvbVZpZGVvLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL1ByZWZlcmVuY2VDYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05ld3Muc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2J1aWxkL2RhdGEuanNvbicpXG5jb25zdCBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxuZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgLy8gUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBodG1sIGF0dHJpYnV0ZXNcbiAgY29uc3QgaHRtbEF0dHJpYnV0ZXMgPSAoaWNvbiwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXVxuICAgIGNvbnN0IGF0dHJPYmogPSBvYmplY3RBc3NpZ24oe30sIGRhdGFba2V5XS5vcHRpb25zLCBvcHRpb25zKVxuXG4gICAgLy8gSWYgdGhlIHVzZXIgcGFzc2VkIGluIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgLy8gSWYgYW55IG9mIHRoZSB3aWR0aCBvciBoZWlnaHQgaXMgcGFzc2VkIGluXG4gICAgICBpZiAob3B0aW9uc1snd2lkdGgnXSB8fCBvcHRpb25zWydoZWlnaHQnXSkge1xuICAgICAgICBhdHRyT2JqWyd3aWR0aCddID0gb3B0aW9uc1snd2lkdGgnXVxuICAgICAgICAgID8gb3B0aW9uc1snd2lkdGgnXVxuICAgICAgICAgIDogKHBhcnNlSW50KG9wdGlvbnNbJ2hlaWdodCddKSAqIGRhdGFba2V5XS5vcHRpb25zWyd3aWR0aCddKSAvIGRhdGFba2V5XS5vcHRpb25zWydoZWlnaHQnXVxuICAgICAgICBhdHRyT2JqWydoZWlnaHQnXSA9IG9wdGlvbnNbJ2hlaWdodCddXG4gICAgICAgICAgPyBvcHRpb25zWydoZWlnaHQnXVxuICAgICAgICAgIDogKHBhcnNlSW50KG9wdGlvbnNbJ3dpZHRoJ10pICogZGF0YVtrZXldLm9wdGlvbnNbJ2hlaWdodCddKSAvIGRhdGFba2V5XS5vcHRpb25zWyd3aWR0aCddXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB1c2VyIHBhc3NlZCBpbiBjbGFzc1xuICAgICAgaWYgKG9wdGlvbnNbJ2NsYXNzJ10pIHtcbiAgICAgICAgYXR0ck9ialsnY2xhc3MnXSA9IGBvY3RpY29uIG9jdGljb24tJHtrZXl9ICR7b3B0aW9uc1snY2xhc3MnXX1gXG4gICAgICAgIGF0dHJPYmpbJ2NsYXNzJ10udHJpbSgpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB1c2VyIHBhc3NlZCBpbiBhcmlhLWxhYmVsXG4gICAgICBpZiAob3B0aW9uc1snYXJpYS1sYWJlbCddKSB7XG4gICAgICAgIGF0dHJPYmpbJ2FyaWEtbGFiZWwnXSA9IG9wdGlvbnNbJ2FyaWEtbGFiZWwnXVxuICAgICAgICBhdHRyT2JqWydyb2xlJ10gPSAnaW1nJ1xuXG4gICAgICAgIC8vIFVuLWhpZGUgdGhlIGljb25cbiAgICAgICAgZGVsZXRlIGF0dHJPYmpbJ2FyaWEtaGlkZGVuJ11cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBPYmplY3Qua2V5cyhhdHRyT2JqKSkge1xuICAgICAgYXR0cmlidXRlcy5wdXNoKGAke29wdGlvbn09XCIke2F0dHJPYmpbb3B0aW9uXX1cImApXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpLnRyaW0oKVxuICB9XG5cbiAgLy8gU2V0IHRoZSBzeW1ib2wgZm9yIGVhc3kgYWNjZXNzXG4gIGRhdGFba2V5XS5zeW1ib2wgPSBrZXlcblxuICAvLyBTZXQgYWxsIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgZGF0YVtrZXldLm9wdGlvbnMgPSB7XG4gICAgdmVyc2lvbjogJzEuMScsXG4gICAgd2lkdGg6IGRhdGFba2V5XS53aWR0aCxcbiAgICBoZWlnaHQ6IGRhdGFba2V5XS5oZWlnaHQsXG4gICAgdmlld0JveDogYDAgMCAke2RhdGFba2V5XS53aWR0aH0gJHtkYXRhW2tleV0uaGVpZ2h0fWAsXG4gICAgY2xhc3M6IGBvY3RpY29uIG9jdGljb24tJHtrZXl9YCxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHJldHVybiBhbiBTVkcgb2JqZWN0XG4gIGRhdGFba2V5XS50b1NWRyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gYDxzdmcgJHtodG1sQXR0cmlidXRlcyhkYXRhW2tleV0sIG9wdGlvbnMpfT4ke2RhdGFba2V5XS5wYXRofTwvc3ZnPmBcbiAgfVxufVxuXG4vLyBJbXBvcnQgZGF0YSBpbnRvIGV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZGF0YVxuIiwiLy8hIG1vbWVudC5qc1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICBnbG9iYWwubW9tZW50ID0gZmFjdG9yeSgpXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBob29rQ2FsbGJhY2s7XG5cbiAgICBmdW5jdGlvbiBob29rcyAoKSB7XG4gICAgICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuICAgIC8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayAoY2FsbGJhY2spIHtcbiAgICAgICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgICAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgcmV0dXJuIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgICAgICB2YXIgcmVzID0gW10sIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGZuKGFycltpXSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChiLCBpKSkge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1wdHkgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICB1bnVzZWRUb2tlbnMgICAgOiBbXSxcbiAgICAgICAgICAgIHVudXNlZElucHV0ICAgICA6IFtdLFxuICAgICAgICAgICAgb3ZlcmZsb3cgICAgICAgIDogLTIsXG4gICAgICAgICAgICBjaGFyc0xlZnRPdmVyICAgOiAwLFxuICAgICAgICAgICAgbnVsbElucHV0ICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICBpbnZhbGlkTW9udGggICAgOiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZEZvcm1hdCAgIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW52YWxpZGF0ZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIGlzbyAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgcGFyc2VkRGF0ZVBhcnRzIDogW10sXG4gICAgICAgICAgICBtZXJpZGllbSAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgcmZjMjgyMiAgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICB3ZWVrZGF5TWlzbWF0Y2ggOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhtKSB7XG4gICAgICAgIGlmIChtLl9wZiA9PSBudWxsKSB7XG4gICAgICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS5fcGY7XG4gICAgfVxuXG4gICAgdmFyIHNvbWU7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzb21lID0gZnVuY3Rpb24gKGZ1bikge1xuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgICAgICBpZiAobS5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSk7XG4gICAgICAgICAgICB2YXIgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpc05vd1ZhbGlkID0gIWlzTmFOKG0uX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG5cbiAgICAgICAgICAgIGlmIChtLl9zdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xuICAgICAgICAgICAgICAgIG0uX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCAoZmxhZ3MpIHtcbiAgICAgICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICAgICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGV4dGVuZChnZXRQYXJzaW5nRmxhZ3MobSksIGZsYWdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxuICAgIC8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG4gICAgdmFyIG1vbWVudFByb3BlcnRpZXMgPSBob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW107XG5cbiAgICBmdW5jdGlvbiBjb3B5Q29uZmlnKHRvLCBmcm9tKSB7XG4gICAgICAgIHZhciBpLCBwcm9wLCB2YWw7XG5cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc0FNb21lbnRPYmplY3QpKSB7XG4gICAgICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faSkpIHtcbiAgICAgICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2YpKSB7XG4gICAgICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sKSkge1xuICAgICAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fc3RyaWN0KSkge1xuICAgICAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3R6bSkpIHtcbiAgICAgICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc1VUQykpIHtcbiAgICAgICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fb2Zmc2V0KSkge1xuICAgICAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3BmKSkge1xuICAgICAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbG9jYWxlKSkge1xuICAgICAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgdmFsID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIHZhciB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAvLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE1vbWVudChjb25maWcpIHtcbiAgICAgICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoY29uZmlnLl9kICE9IG51bGwgPyBjb25maWcuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wIGluIGNhc2UgdXBkYXRlT2Zmc2V0IGNyZWF0ZXMgbmV3IG1vbWVudFxuICAgICAgICAvLyBvYmplY3RzLlxuICAgICAgICBpZiAodXBkYXRlSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNb21lbnQgKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNGbG9vciAobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXkxLCBhcnJheTIsIGRvbnRDb252ZXJ0KSB7XG4gICAgICAgIHZhciBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgICAgICBkaWZmcyA9IDAsXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHx8XG4gICAgICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xuICAgICAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuKG1zZykge1xuICAgICAgICBpZiAoaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICh0eXBlb2YgY29uc29sZSAhPT0gICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGFyZztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0gJ1xcblsnICsgaSArICddICc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9IGtleSArICc6ICcgKyBhcmd1bWVudHNbMF1ba2V5XSArICcsICc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhcm4obXNnICsgJ1xcbkFyZ3VtZW50czogJyArIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICsgJ1xcbicgKyAobmV3IEVycm9yKCkpLnN0YWNrKTtcbiAgICAgICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBmbik7XG4gICAgfVxuXG4gICAgdmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgICAgICBkZXByZWNhdGlvbnNbbmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG4gICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQgKGNvbmZpZykge1xuICAgICAgICB2YXIgcHJvcCwgaTtcbiAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgdGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICAgICAnfCcgKyAoL1xcZHsxLDJ9Lykuc291cmNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgICAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLCBwcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgcGFyZW50Q29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgY2hpbGRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBjaGlsZENvbmZpZ1twcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGV4dGVuZCh7fSwgcmVzW3Byb3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXM7XG5cbiAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgaSwgcmVzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2FsZW5kYXIgKGtleSwgbW9tLCBub3cpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChtb20sIG5vdykgOiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICAgICAgTFRTICA6ICdoOm1tOnNzIEEnLFxuICAgICAgICBMVCAgIDogJ2g6bW0gQScsXG4gICAgICAgIEwgICAgOiAnTU0vREQvWVlZWScsXG4gICAgICAgIExMICAgOiAnTU1NTSBELCBZWVlZJyxcbiAgICAgICAgTExMICA6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICAgICAgTExMTCA6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdCAoa2V5KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuICAgIGZ1bmN0aW9uIGludmFsaWREYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0T3JkaW5hbCA9ICclZCc7XG4gICAgdmFyIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuICAgIGZ1bmN0aW9uIG9yZGluYWwgKG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRSZWxhdGl2ZVRpbWUgPSB7XG4gICAgICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgICAgIHBhc3QgICA6ICclcyBhZ28nLFxuICAgICAgICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgICAgICAgc3MgOiAnJWQgc2Vjb25kcycsXG4gICAgICAgIG0gIDogJ2EgbWludXRlJyxcbiAgICAgICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgICAgIGggIDogJ2FuIGhvdXInLFxuICAgICAgICBoaCA6ICclZCBob3VycycsXG4gICAgICAgIGQgIDogJ2EgZGF5JyxcbiAgICAgICAgZGQgOiAnJWQgZGF5cycsXG4gICAgICAgIE0gIDogJ2EgbW9udGgnLFxuICAgICAgICBNTSA6ICclZCBtb250aHMnLFxuICAgICAgICB5ICA6ICdhIHllYXInLFxuICAgICAgICB5eSA6ICclZCB5ZWFycydcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVsYXRpdmVUaW1lIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJpbmddO1xuICAgICAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xuICAgICAgICAgICAgb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkgOlxuICAgICAgICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFzdEZ1dHVyZSAoZGlmZiwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHZhciBhbGlhc2VzID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRVbml0QWxpYXMgKHVuaXQsIHNob3J0aGFuZCkge1xuICAgICAgICB2YXIgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2xvd2VyQ2FzZSArICdzJ10gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSB1bml0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbiAgICB9XG5cbiAgICB2YXIgcHJpb3JpdGllcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQsIHByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgICAgIHZhciB1bml0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciB1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgICAgICB1bml0cy5wdXNoKHt1bml0OiB1LCBwcmlvcml0eTogcHJpb3JpdGllc1t1XX0pO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICsgYWJzTnVtYmVyO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxuICAgIHZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG4gICAgdmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbiAgICAvLyB0b2tlbjogICAgJ00nXG4gICAgLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuICAgIC8vIG9yZGluYWw6ICAnTW8nXG4gICAgLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG4gICAgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4gKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZGRlZCkge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gJycsIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihhcnJheVtpXSkgPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbiAgICBmdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIGkgPSA1O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoMSAgICAgICAgID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcbiAgICB2YXIgbWF0Y2gyICAgICAgICAgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XG4gICAgdmFyIG1hdGNoMyAgICAgICAgID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxuICAgIHZhciBtYXRjaDQgICAgICAgICA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XG4gICAgdmFyIG1hdGNoNiAgICAgICAgID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuICAgIHZhciBtYXRjaDF0bzIgICAgICA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcbiAgICB2YXIgbWF0Y2gzdG80ICAgICAgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxuICAgIHZhciBtYXRjaDV0bzYgICAgICA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxuICAgIHZhciBtYXRjaDF0bzMgICAgICA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcbiAgICB2YXIgbWF0Y2gxdG80ICAgICAgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxuICAgIHZhciBtYXRjaDF0bzYgICAgICA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcblxuICAgIHZhciBtYXRjaFVuc2lnbmVkICA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbiAgICB2YXIgbWF0Y2hTaWduZWQgICAgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXG5cbiAgICB2YXIgbWF0Y2hPZmZzZXQgICAgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuICAgIHZhciBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbiAgICB2YXIgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuXG4gICAgLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXG4gICAgLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuICAgIHZhciBtYXRjaFdvcmQgPSAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaTtcblxuICAgIHZhciByZWdleGVzID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRSZWdleFRva2VuICh0b2tlbiwgcmVnZXgsIHN0cmljdFJlZ2V4KSB7XG4gICAgICAgIHJlZ2V4ZXNbdG9rZW5dID0gaXNGdW5jdGlvbihyZWdleCkgPyByZWdleCA6IGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbiAodG9rZW4sIGNvbmZpZykge1xuICAgICAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuICAgIGZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2V4RXNjYXBlKHMucmVwbGFjZSgnXFxcXCcsICcnKS5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnZXhFc2NhcGUocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGksIGZ1bmMgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRva2VuID0gW3Rva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgWUVBUiA9IDA7XG4gICAgdmFyIE1PTlRIID0gMTtcbiAgICB2YXIgREFURSA9IDI7XG4gICAgdmFyIEhPVVIgPSAzO1xuICAgIHZhciBNSU5VVEUgPSA0O1xuICAgIHZhciBTRUNPTkQgPSA1O1xuICAgIHZhciBNSUxMSVNFQ09ORCA9IDY7XG4gICAgdmFyIFdFRUsgPSA3O1xuICAgIHZhciBXRUVLREFZID0gODtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgICAgICByZXR1cm4geSA8PSA5OTk5ID8gJycgKyB5IDogJysnICsgeTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCAgIDRdLCAgICAgICAwLCAneWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCAgNV0sICAgICAgIDAsICd5ZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbiAgICAvLyBQUklPUklUSUVTXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1knLCAgICAgIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWScsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignWVlZWScsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W1lFQVJdID0gaW5wdXQubGVuZ3RoID09PSAyID8gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbiAgICB9XG5cbiAgICAvLyBIT09LU1xuXG4gICAgaG9va3MucGFyc2VUd29EaWdpdFllYXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbiAgICB9O1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNMZWFwWWVhciAoKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlR2V0U2V0ICh1bml0LCBrZWVwVGltZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldCAobW9tLCB1bml0KSB7XG4gICAgICAgIHJldHVybiBtb20uaXNWYWxpZCgpID9cbiAgICAgICAgICAgIG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpIDogTmFOO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldCQxIChtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChtb20uaXNWYWxpZCgpICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh1bml0ID09PSAnRnVsbFllYXInICYmIGlzTGVhcFllYXIobW9tLnllYXIoKSkgJiYgbW9tLm1vbnRoKCkgPT09IDEgJiYgbW9tLmRhdGUoKSA9PT0gMjkpIHtcbiAgICAgICAgICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0odmFsdWUsIG1vbS5tb250aCgpLCBkYXlzSW5Nb250aCh2YWx1ZSwgbW9tLm1vbnRoKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBzdHJpbmdHZXQgKHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RyaW5nU2V0ICh1bml0cywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXRpemVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kKG4sIHgpIHtcbiAgICAgICAgcmV0dXJuICgobiAlIHgpICsgeCkgJSB4O1xuICAgIH1cblxuICAgIHZhciBpbmRleE9mO1xuXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIC8vIEkga25vd1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICAgICAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgICAgICByZXR1cm4gbW9kTW9udGggPT09IDEgPyAoaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjgpIDogKDMxIC0gbW9kTW9udGggJSA3ICUgMik7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdNJywgICAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTScsICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTScsICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIHZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vO1xuICAgIHZhciBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyk7XG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzIChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzIDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV0gOlxuICAgICAgICAgICAgdGhpcy5fbW9udGhzWyh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKTtcbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydCAobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpID8gdGhpcy5fbW9udGhzU2hvcnQgOlxuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0WydzdGFuZGFsb25lJ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXSA6XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFtNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLm1vbnRoKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksIGlpLCBtb20sIGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UgKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgICAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKSArICd8XicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gc2V0TW9udGggKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TW9udGggKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXRNb250aCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCAoKSB7XG4gICAgICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleCAoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgZnVuY3Rpb24gbW9udGhzUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLCBsb25nUGllY2VzID0gW10sIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgICAgICBpLCBtb207XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0ZSAoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAgICAgLy8gY2FuJ3QganVzdCBhcHBseSgpIHRvIGNyZWF0ZSBhIGRhdGU6XG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8xODEzNDhcbiAgICAgICAgdmFyIGRhdGU7XG4gICAgICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoeSArIDQwMCwgbSwgZCwgaCwgTSwgcywgbXMpO1xuICAgICAgICAgICAgaWYgKGlzRmluaXRlKGRhdGUuZ2V0RnVsbFllYXIoKSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUgKHkpIHtcbiAgICAgICAgdmFyIGRhdGU7XG4gICAgICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgYXJnc1swXSA9IHkgKyA0MDA7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJncykpO1xuICAgICAgICAgICAgaWYgKGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQtb2YtZmlyc3Qtd2VlayAtIHN0YXJ0LW9mLXllYXJcbiAgICBmdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICAgICAgZndkID0gNyArIGRvdyAtIGRveSxcbiAgICAgICAgICAgIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcbiAgICAgICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgICAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyh5ZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDcsXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgICAgIGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQsXG4gICAgICAgICAgICByZXNZZWFyLCByZXNEYXlPZlllYXI7XG5cbiAgICAgICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrT2ZZZWFyKG1vbSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxuICAgICAgICAgICAgd2VlayA9IE1hdGguZmxvb3IoKG1vbS5kYXlPZlllYXIoKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMSxcbiAgICAgICAgICAgIHJlc1dlZWssIHJlc1llYXI7XG5cbiAgICAgICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSAtIDE7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KTtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpO1xuICAgICAgICAgICAgcmVzV2VlayA9IHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2VlazogcmVzV2VlayxcbiAgICAgICAgICAgIHllYXI6IHJlc1llYXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgICAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbiAgICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuICAgIC8vIFBSSU9SSVRJRVNcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigndycsICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1cnLCAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsndycsICd3dycsICdXJywgJ1dXJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICAvLyBMT0NBTEVTXG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrIChtb20pIHtcbiAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIobW9tLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3kpLndlZWs7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICAgICAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNnRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mV2VlayAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mWWVhciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrIChpbnB1dCkge1xuICAgICAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRJU09XZWVrIChpbnB1dCkge1xuICAgICAgICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4odGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGRkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ0UnLCAwLCAwLCAnaXNvV2Vla2RheScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuICAgIGFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG4gICAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ2QnLCAgICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2UnLCAgICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0UnLCAgICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xuICAgIH1cblxuICAgIC8vIExPQ0FMRVNcbiAgICBmdW5jdGlvbiBzaGlmdFdlZWtkYXlzICh3cywgbikge1xuICAgICAgICByZXR1cm4gd3Muc2xpY2UobiwgNykuY29uY2F0KHdzLnNsaWNlKDAsIG4pKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpO1xuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzIChtLCBmb3JtYXQpIHtcbiAgICAgICAgdmFyIHdlZWtkYXlzID0gaXNBcnJheSh0aGlzLl93ZWVrZGF5cykgPyB0aGlzLl93ZWVrZGF5cyA6XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1sobSAmJiBtICE9PSB0cnVlICYmIHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KSkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ107XG4gICAgICAgIHJldHVybiAobSA9PT0gdHJ1ZSkgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogKG0pID8gd2Vla2RheXNbbS5kYXkoKV0gOiB3ZWVrZGF5cztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpO1xuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQgKG0pIHtcbiAgICAgICAgcmV0dXJuIChtID09PSB0cnVlKSA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNTaG9ydCwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgICAgICA6IChtKSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4gKG0pIHtcbiAgICAgICAgcmV0dXJuIChtID09PSB0cnVlKSA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNNaW4sIHRoaXMuX3dlZWsuZG93KVxuICAgICAgICAgICAgOiAobSkgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlJDEod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBpLCBpaSwgbW9tLCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2UgKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UkMS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayAoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgICAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgICAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0V2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbiAgICBmdW5jdGlvbiB3ZWVrZGF5c1JlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbiAgICBmdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21wdXRlV2Vla2RheXNQYXJzZSAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW5QaWVjZXMgPSBbXSwgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSwgbW9tLCBtaW5wLCBzaG9ydHAsIGxvbmdwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpO1xuICAgICAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBoRm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga0Zvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbiAgICB9XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdobW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtZXJpZGllbSAodG9rZW4sIGxvd2VyY2FzZSkge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGxvd2VyY2FzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gICAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG4gICAgfVxuXG4gICAgYWRkUmVnZXhUb2tlbignYScsICBtYXRjaE1lcmlkaWVtKTtcbiAgICBhZGRSZWdleFRva2VuKCdBJywgIG1hdGNoTWVyaWRpZW0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0gnLCAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdoJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignaycsICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG4gICAgYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbiAgICBhZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICAgICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgICAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICAgICAgdmFyIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUlzUE0gKGlucHV0KSB7XG4gICAgICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAgICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgICAgIHJldHVybiAoKGlucHV0ICsgJycpLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCcpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuICAgIGZ1bmN0aW9uIGxvY2FsZU1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIC8vIFNldHRpbmcgdGhlIGhvdXIgc2hvdWxkIGtlZXAgdGhlIHRpbWUsIGJlY2F1c2UgdGhlIHVzZXIgZXhwbGljaXRseVxuICAgIC8vIHNwZWNpZmllZCB3aGljaCBob3VyIHRoZXkgd2FudC4gU28gdHJ5aW5nIHRvIG1haW50YWluIHRoZSBzYW1lIGhvdXIgKGluXG4gICAgLy8gYSBuZXcgdGltZXpvbmUpIG1ha2VzIHNlbnNlLiBBZGRpbmcvc3VidHJhY3RpbmcgaG91cnMgZG9lcyBub3QgZm9sbG93XG4gICAgLy8gdGhpcyBydWxlLlxuICAgIHZhciBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcblxuICAgIHZhciBiYXNlQ29uZmlnID0ge1xuICAgICAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICAgICAgICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICAgICAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gICAgICAgIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICAgICAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgICAgIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgICAgICAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgICAgICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICAgICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICAgICAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgICAgICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2VcbiAgICB9O1xuXG4gICAgLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xuICAgIHZhciBsb2NhbGVzID0ge307XG4gICAgdmFyIGxvY2FsZUZhbWlsaWVzID0ge307XG4gICAgdmFyIGdsb2JhbExvY2FsZTtcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xuICAgIH1cblxuICAgIC8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuICAgIC8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4gICAgLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuICAgIGZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lcykge1xuICAgICAgICB2YXIgaSA9IDAsIGosIG5leHQsIGxvY2FsZSwgc3BsaXQ7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICAgICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICAgICAgICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgICAgIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgICAgICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgICAgICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgICAgICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlIChrZXksIHZhbHVlcykge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb21lbnQuZHVyYXRpb24uX2xvY2FsZSA9IG1vbWVudC5fbG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29uc29sZSAhPT0gICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy93YXJuIHVzZXIgaWYgYXJndW1lbnRzIGFyZSBwYXNzZWQgYnV0IHRoZSBsb2NhbGUgY291bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0xvY2FsZSAnICsga2V5ICsgICcgbm90IGZvdW5kLiBEaWQgeW91IGZvcmdldCB0byBsb2FkIGl0PycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmaW5lTG9jYWxlIChuYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSwgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoJ2RlZmluZUxvY2FsZU92ZXJyaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAgICAgICAgICAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXG4gICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSwgdG1wTG9jYWxlLCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgICAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICBsb2NhbGUgPSBuZXcgTG9jYWxlKGNvbmZpZyk7XG4gICAgICAgICAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgbG9jYWxlIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRMb2NhbGUgKGtleSkge1xuICAgICAgICB2YXIgbG9jYWxlO1xuXG4gICAgICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAgLy9zaG9ydC1jaXJjdWl0IGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TG9jYWxlcygpIHtcbiAgICAgICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyAobSkge1xuICAgICAgICB2YXIgb3ZlcmZsb3c7XG4gICAgICAgIHZhciBhID0gbS5fYTtcblxuICAgICAgICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9XG4gICAgICAgICAgICAgICAgYVtNT05USF0gICAgICAgPCAwIHx8IGFbTU9OVEhdICAgICAgID4gMTEgID8gTU9OVEggOlxuICAgICAgICAgICAgICAgIGFbREFURV0gICAgICAgIDwgMSB8fCBhW0RBVEVdICAgICAgICA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxuICAgICAgICAgICAgICAgIGFbSE9VUl0gICAgICAgIDwgMCB8fCBhW0hPVVJdICAgICAgICA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XG4gICAgICAgICAgICAgICAgYVtNSU5VVEVdICAgICAgPCAwIHx8IGFbTUlOVVRFXSAgICAgID4gNTkgID8gTUlOVVRFIDpcbiAgICAgICAgICAgICAgICBhW1NFQ09ORF0gICAgICA8IDAgfHwgYVtTRUNPTkRdICAgICAgPiA1OSAgPyBTRUNPTkQgOlxuICAgICAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgICAgICAtMTtcblxuICAgICAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBkZWZhdWx0cyhhLCBiLCBjKSB7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgICAgICAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuICAgIC8vIHRoZSBhcnJheSBzaG91bGQgbWlycm9yIHRoZSBwYXJhbWV0ZXJzIGJlbG93XG4gICAgLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4gICAgLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5IChjb25maWcpIHtcbiAgICAgICAgdmFyIGksIGRhdGUsIGlucHV0ID0gW10sIGN1cnJlbnREYXRlLCBleHBlY3RlZFdlZWtkYXksIHllYXJUb1VzZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgICAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fCBjb25maWcuX2RheU9mWWVhciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAgICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAgICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICAgICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICAgICAgICBpZiAoY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwKSB7XG4gICAgICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gICAgICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDID8gY29uZmlnLl9kLmdldFVUQ0RheSgpIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gICAgICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgICAgICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgICAgICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICAgICAgICBpZiAoY29uZmlnLl93ICYmIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xuXG4gICAgICAgIHcgPSBjb25maWcuX3c7XG4gICAgICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvdyA9IDE7XG4gICAgICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIDEsIDQpLnllYXIpO1xuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgICAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgICAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICAgICAgICAgIHZhciBjdXJXZWVrID0gd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCBkb3csIGRveSk7XG5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5uaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc28gODYwMSByZWdleFxuICAgIC8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxuICAgIHZhciBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuICAgIHZhciBiYXNpY0lzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcblxuICAgIHZhciB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xuXG4gICAgdmFyIGlzb0RhdGVzID0gW1xuICAgICAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICAgICAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC9dLFxuICAgICAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS9dLFxuICAgICAgICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9L10sXG4gICAgICAgIFsnWVlZWU1NREQnLCAvXFxkezh9L10sXG4gICAgICAgIC8vIFlZWVlNTSBpcyBOT1QgYWxsb3dlZCBieSB0aGUgc3RhbmRhcmRcbiAgICAgICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICAgICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgICAgICAgWydZWVlZREREJywgL1xcZHs3fS9dXG4gICAgXTtcblxuICAgIC8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbiAgICB2YXIgaXNvVGltZXMgPSBbXG4gICAgICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICAgICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgICAgICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gICAgICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgWydISCcsIC9cXGRcXGQvXVxuICAgIF07XG5cbiAgICB2YXIgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKChcXC0/XFxkKykvaTtcblxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWcpIHtcbiAgICAgICAgdmFyIGksIGwsXG4gICAgICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgICAgICBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhzdHJpbmcpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhzdHJpbmcpLFxuICAgICAgICAgICAgYWxsb3dUaW1lLCBkYXRlRm9ybWF0LCB0aW1lRm9ybWF0LCB0ekZvcm1hdDtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoWzRdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xuICAgIHZhciByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLztcblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxuICAgICAgICAgICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChob3VyU3RyLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtaW51dGVTdHIsIDEwKVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cikge1xuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICAgICAgaWYgKHllYXIgPD0gNDkpIHtcbiAgICAgICAgICAgIHJldHVybiAyMDAwICsgeWVhcjtcbiAgICAgICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5ZWFyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKS5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKS5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKS5yZXBsYWNlKC9cXHNcXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1dlZWtkYXkod2Vla2RheVN0ciwgcGFyc2VkSW5wdXQsIGNvbmZpZykge1xuICAgICAgICBpZiAod2Vla2RheVN0cikge1xuICAgICAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW50ZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgICAgICAgICAgdmFyIHdlZWtkYXlQcm92aWRlZCA9IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0ciksXG4gICAgICAgICAgICAgICAgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKHBhcnNlZElucHV0WzBdLCBwYXJzZWRJbnB1dFsxXSwgcGFyc2VkSW5wdXRbMl0pLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBvYnNPZmZzZXRzID0ge1xuICAgICAgICBVVDogMCxcbiAgICAgICAgR01UOiAwLFxuICAgICAgICBFRFQ6IC00ICogNjAsXG4gICAgICAgIEVTVDogLTUgKiA2MCxcbiAgICAgICAgQ0RUOiAtNSAqIDYwLFxuICAgICAgICBDU1Q6IC02ICogNjAsXG4gICAgICAgIE1EVDogLTYgKiA2MCxcbiAgICAgICAgTVNUOiAtNyAqIDYwLFxuICAgICAgICBQRFQ6IC03ICogNjAsXG4gICAgICAgIFBTVDogLTggKiA2MFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0LCBtaWxpdGFyeU9mZnNldCwgbnVtT2Zmc2V0KSB7XG4gICAgICAgIGlmIChvYnNPZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gICAgICAgIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKTtcbiAgICAgICAgICAgIHZhciBtID0gaG0gJSAxMDAsIGggPSAoaG0gLSBtKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiBoICogNjAgKyBtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xuICAgICAgICB2YXIgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgdmFyIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhtYXRjaFs0XSwgbWF0Y2hbM10sIG1hdGNoWzJdLCBtYXRjaFs1XSwgbWF0Y2hbNl0sIG1hdGNoWzddKTtcbiAgICAgICAgICAgIGlmICghY2hlY2tXZWVrZGF5KG1hdGNoWzFdLCBwYXJzZWRBcnJheSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XG4gICAgICAgICAgICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcbiAgICAgICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG5cbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdCBvciBmYWxsYmFja1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcblxuICAgICAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXG4gICAgICAgICdodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG4gICAgaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG4gICAgaG9va3MuUkZDXzI4MjIgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xuICAgICAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLlJGQ18yODIyKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fYSA9IFtdO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAgICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICAgICAgaSwgcGFyc2VkSW5wdXQsIHRva2VucywgdG9rZW4sIHNraXBwZWQsXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG5cbiAgICAgICAgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHwgW10pWzBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgdG9rZW4sICdwYXJzZWRJbnB1dCcsIHBhcnNlZElucHV0LFxuICAgICAgICAgICAgLy8gICAgICAgICAncmVnZXgnLCBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPSBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gICAgICAgIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgICAgICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICAgICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwIChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIHZhciBpc1BtO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gICAgICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICAgICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgICAgICBiZXN0TW9tZW50LFxuXG4gICAgICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSk7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChbaS55ZWFyLCBpLm1vbnRoLCBpLmRheSB8fCBpLmRhdGUsIGkuaG91ciwgaS5taW51dGUsIGkuc2Vjb25kLCBpLm1pbGxpc2Vjb25kXSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyAoY29uZmlnKSB7XG4gICAgICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgICAgIGlmIChyZXMuX25leHREYXkpIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICAgICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnIChjb25maWcpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxuICAgICAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgICAgICAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7bnVsbElucHV0OiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2EgPSBtYXAoaW5wdXQuc2xpY2UoMCksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgaXNVVEMpIHtcbiAgICAgICAgdmFyIGMgPSB7fTtcblxuICAgICAgICBpZiAobG9jYWxlID09PSB0cnVlIHx8IGxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoaXNPYmplY3QoaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoaW5wdXQpKSB8fFxuICAgICAgICAgICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICAgICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICAgICAgYy5fbCA9IGxvY2FsZTtcbiAgICAgICAgYy5faSA9IGlucHV0O1xuICAgICAgICBjLl9mID0gZm9ybWF0O1xuICAgICAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYWwgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHZhciBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuICAgIC8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbiAgICAvL1xuICAgIC8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2VcbiAgICAvLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuICAgIGZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgICAgICB2YXIgcmVzLCBpO1xuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xuICAgICAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzID0gbW9tZW50c1swXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuICAgIGZ1bmN0aW9uIG1pbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF4ICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArKG5ldyBEYXRlKCkpO1xuICAgIH07XG5cbiAgICB2YXIgb3JkZXJpbmcgPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXTtcblxuICAgIGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChtKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtKSB7XG4gICAgICAgICAgICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChtW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4obVtrZXldKSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChtW29yZGVyaW5nW2ldXSkge1xuICAgICAgICAgICAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG1bb3JkZXJpbmdbaV1dKSAhPT0gdG9JbnQobVtvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkJDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRHVyYXRpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgbm9ybWFsaXplZElucHV0Lmlzb1dlZWsgfHwgMCxcbiAgICAgICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcbiAgICAgICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgICAgICBtaW51dGVzICogNmU0ICsgLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvL3VzaW5nIDEwMDAgKiA2MCAqIDYwIGluc3RlYWQgb2YgMzZlNSB0byBhdm9pZCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzI5NzhcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICAgICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgICAgICAgIHdlZWtzICogNztcbiAgICAgICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAgICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICAgICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICAgICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgICAgICAgeWVhcnMgKiAxMjtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG5cbiAgICAgICAgdGhpcy5fYnViYmxlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNSb3VuZCAobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBvZmZzZXQgKHRva2VuLCBzZXBhcmF0b3IpIHtcbiAgICAgICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpO1xuICAgICAgICAgICAgdmFyIHNpZ24gPSAnKyc7XG4gICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICAgICAgc2lnbiA9ICctJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaWduICsgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArIHNlcGFyYXRvciArIHplcm9GaWxsKH5+KG9mZnNldCkgJSA2MCwgMik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZnNldCgnWicsICc6Jyk7XG4gICAgb2Zmc2V0KCdaWicsICcnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1onLCAgbWF0Y2hTaG9ydE9mZnNldCk7XG4gICAgYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgICAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgLy8gdGltZXpvbmUgY2h1bmtlclxuICAgIC8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuICAgIC8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxuICAgIHZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuICAgIGZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlcik7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNodW5rICAgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgICAgIHZhciBwYXJ0cyAgID0gKGNodW5rICsgJycpLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAwLCAwXTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgICAgIHJldHVybiBtaW51dGVzID09PSAwID9cbiAgICAgICAgICAwIDpcbiAgICAgICAgICBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG4gICAgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBtb2RlbCkge1xuICAgICAgICB2YXIgcmVzLCBkaWZmO1xuICAgICAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgICAgICByZXMgPSBtb2RlbC5jbG9uZSgpO1xuICAgICAgICAgICAgZGlmZiA9IChpc01vbWVudChpbnB1dCkgfHwgaXNEYXRlKGlucHV0KSA/IGlucHV0LnZhbHVlT2YoKSA6IGNyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQpLmxvY2FsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0IChtKSB7XG4gICAgICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICAgICAgICByZXR1cm4gLU1hdGgucm91bmQobS5fZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG4gICAgfVxuXG4gICAgLy8gSE9PS1NcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbiAgICAvLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbiAgICBob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIC8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuICAgIC8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4gICAgLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuICAgIC8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbiAgICAvL1xuICAgIC8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuICAgIC8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbiAgICAvLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2VcbiAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuICAgIGZ1bmN0aW9uIGdldFNldE9mZnNldCAoaW5wdXQsIGtlZXBMb2NhbFRpbWUsIGtlZXBNaW51dGVzKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0O1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRab25lIChpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCAoKSB7XG4gICAgICAgIGlmICh0aGlzLl90em0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2kgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCB0aGlzLl9pKTtcbiAgICAgICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodFpvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCA9IGlucHV0ID8gY3JlYXRlTG9jYWwoaW5wdXQpLnV0Y09mZnNldCgpIDogMDtcblxuICAgICAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZSAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpIHx8XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkICgpIHtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGMgPSB7fTtcblxuICAgICAgICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xuICAgICAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgICAgICBpZiAoYy5fYSkge1xuICAgICAgICAgICAgdmFyIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xvY2FsICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGNPZmZzZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVXRjICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG4gICAgdmFyIGFzcE5ldFJlZ2V4ID0gL14oXFwtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XG5cbiAgICAvLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuICAgIC8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbiAgICAvLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG4gICAgdmFyIGlzb1JlZ2V4ID0gL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uIChpbnB1dCwga2V5KSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAgICAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcbiAgICAgICAgICAgIG1hdGNoID0gbnVsbCxcbiAgICAgICAgICAgIHNpZ24sXG4gICAgICAgICAgICByZXQsXG4gICAgICAgICAgICBkaWZmUmVzO1xuXG4gICAgICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgbXMgOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGQgIDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICAgICAgTSAgOiBpbnB1dC5fbW9udGhzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gaW5wdXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9IGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeSAgOiAwLFxuICAgICAgICAgICAgICAgIGQgIDogdG9JbnQobWF0Y2hbREFURV0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgICAgICBoICA6IHRvSW50KG1hdGNoW0hPVVJdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbSAgOiB0b0ludChtYXRjaFtNSU5VVEVdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgICAgIHMgIDogdG9JbnQobWF0Y2hbU0VDT05EXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgICAgICBtcyA6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24gLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeSA6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBNIDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgICAgIHcgOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgZCA6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBoIDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIG0gOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgcyA6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7Ly8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmICgnZnJvbScgaW4gZHVyYXRpb24gfHwgJ3RvJyBpbiBkdXJhdGlvbikpIHtcbiAgICAgICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSwgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pKTtcblxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1zID0gZGlmZlJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICBkdXJhdGlvbi5NID0gZGlmZlJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXQgPSBuZXcgRHVyYXRpb24oZHVyYXRpb24pO1xuXG4gICAgICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2xvY2FsZScpKSB7XG4gICAgICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuICAgIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkJDE7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUlzbyAoaW5wLCBzaWduKSB7XG4gICAgICAgIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gICAgICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgICAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgICAgIHZhciByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAgICAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXMgPSB7fTtcblxuICAgICAgICByZXMubW9udGhzID0gb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArXG4gICAgICAgICAgICAob3RoZXIueWVhcigpIC0gYmFzZS55ZWFyKCkpICogMTI7XG4gICAgICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgICAgIC0tcmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4ge21pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlKTtcbiAgICAgICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKHBlcmlvZCAhPT0gbnVsbCAmJiAhaXNOYU4oK3BlcmlvZCkpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUobmFtZSwgJ21vbWVudCgpLicgKyBuYW1lICArICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArIG5hbWUgKyAnKG51bWJlciwgcGVyaW9kKS4gJyArXG4gICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgICAgICB0bXAgPSB2YWw7IHZhbCA9IHBlcmlvZDsgcGVyaW9kID0gdG1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICt2YWwgOiB2YWw7XG4gICAgICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJ0cmFjdCAobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgICAgICB2YXIgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyksXG4gICAgICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgICAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIC8vIE5vIG9wXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgICAgICAgaWYgKG1vbnRocykge1xuICAgICAgICAgICAgc2V0TW9udGgobW9tLCBnZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5cykge1xuICAgICAgICAgICAgc2V0JDEobW9tLCAnRGF0ZScsIGdldChtb20sICdEYXRlJykgKyBkYXlzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFkZCAgICAgID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpO1xuICAgIHZhciBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcblxuICAgIGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGRpZmYgPCAtNiA/ICdzYW1lRWxzZScgOlxuICAgICAgICAgICAgICAgIGRpZmYgPCAtMSA/ICdsYXN0V2VlaycgOlxuICAgICAgICAgICAgICAgIGRpZmYgPCAwID8gJ2xhc3REYXknIDpcbiAgICAgICAgICAgICAgICBkaWZmIDwgMSA/ICdzYW1lRGF5JyA6XG4gICAgICAgICAgICAgICAgZGlmZiA8IDIgPyAnbmV4dERheScgOlxuICAgICAgICAgICAgICAgIGRpZmYgPCA3ID8gJ25leHRXZWVrJyA6ICdzYW1lRWxzZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsZW5kYXIkMSAodGltZSwgZm9ybWF0cykge1xuICAgICAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgICAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcbiAgICAgICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnO1xuXG4gICAgICAgIHZhciBvdXRwdXQgPSBmb3JtYXRzICYmIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSkgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQob3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JldHdlZW4gKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICAgICAgdmFyIGxvY2FsRnJvbSA9IGlzTW9tZW50KGZyb20pID8gZnJvbSA6IGNyZWF0ZUxvY2FsKGZyb20pLFxuICAgICAgICAgICAgbG9jYWxUbyA9IGlzTW9tZW50KHRvKSA/IHRvIDogY3JlYXRlTG9jYWwodG8pO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbEZyb20uaXNWYWxpZCgpICYmIGxvY2FsVG8uaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGluY2x1c2l2aXR5ID0gaW5jbHVzaXZpdHkgfHwgJygpJztcbiAgICAgICAgcmV0dXJuIChpbmNsdXNpdml0eVswXSA9PT0gJygnID8gdGhpcy5pc0FmdGVyKGxvY2FsRnJvbSwgdW5pdHMpIDogIXRoaXMuaXNCZWZvcmUobG9jYWxGcm9tLCB1bml0cykpICYmXG4gICAgICAgICAgICAoaW5jbHVzaXZpdHlbMV0gPT09ICcpJyA/IHRoaXMuaXNCZWZvcmUobG9jYWxUbywgdW5pdHMpIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgICAgICBpbnB1dE1zO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NhbWVPckFmdGVyIChpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlmZiAoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgICAgIHZhciB0aGF0LFxuICAgICAgICAgICAgem9uZURlbHRhLFxuICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCB0aGlzKTtcblxuICAgICAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzogb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMTI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOiBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6IG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDFlMzsgYnJlYWs7IC8vIDEwMDBcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyA2ZTQ7IGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTsgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgICAgICAgICBjYXNlICdkYXknOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gODY0ZTU7IGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDYwNDhlNTsgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBkZWZhdWx0OiBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aERpZmYgKGEsIGIpIHtcbiAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICAgICAgdmFyIHdob2xlTW9udGhEaWZmID0gKChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyKSArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAgICAgLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgICAgICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgICAgIGFuY2hvcjIsIGFkanVzdDtcblxuICAgICAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2hlY2sgZm9yIG5lZ2F0aXZlIHplcm8sIHJldHVybiB6ZXJvIGlmIG5lZ2F0aXZlIHplcm9cbiAgICAgICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG4gICAgfVxuXG4gICAgaG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG4gICAgaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSVNPU3RyaW5nKGtlZXBPZmZzZXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV0YyA9IGtlZXBPZmZzZXQgIT09IHRydWU7XG4gICAgICAgIHZhciBtID0gdXRjID8gdGhpcy5jbG9uZSgpLnV0YygpIDogdGhpcztcbiAgICAgICAgaWYgKG0ueWVhcigpIDwgMCB8fCBtLnllYXIoKSA+IDk5OTkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgdXRjID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkgKyB0aGlzLnV0Y09mZnNldCgpICogNjAgKiAxMDAwKS50b0lTT1N0cmluZygpLnJlcGxhY2UoJ1onLCBmb3JtYXRNb21lbnQobSwgJ1onKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCB1dGMgPyAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBodW1hbiByZWFkYWJsZSByZXByZXNlbnRhdGlvbiBvZiBhIG1vbWVudCB0aGF0IGNhblxuICAgICAqIGFsc28gYmUgZXZhbHVhdGVkIHRvIGdldCBhIG5ldyBtb21lbnQgd2hpY2ggaXMgdGhlIHNhbWVcbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC9kb2NzL2FwaS91dGlsLmh0bWwjdXRpbF9jdXN0b21faW5zcGVjdF9mdW5jdGlvbl9vbl9vYmplY3RzXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZ1bmMgPSAnbW9tZW50JztcbiAgICAgICAgdmFyIHpvbmUgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9jYWwoKSkge1xuICAgICAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgICAgICB6b25lID0gJ1onO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgICAgICB2YXIgeWVhciA9ICgwIDw9IHRoaXMueWVhcigpICYmIHRoaXMueWVhcigpIDw9IDk5OTkpID8gJ1lZWVknIDogJ1lZWVlZWSc7XG4gICAgICAgIHZhciBkYXRldGltZSA9ICctTU0tRERbVF1ISDptbTpzcy5TU1MnO1xuICAgICAgICB2YXIgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHByZWZpeCArIHllYXIgKyBkYXRldGltZSArIHN1ZmZpeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgICAgICBpZiAoIWlucHV0U3RyaW5nKSB7XG4gICAgICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKSA/IGhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyb20gKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHxcbiAgICAgICAgICAgICAgICAgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHt0bzogdGhpcywgZnJvbTogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyb21Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fFxuICAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oe2Zyb206IHRoaXMsIHRvOiB0aW1lfSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xuICAgIC8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbiAgICAvLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgZnVuY3Rpb24gbG9jYWxlIChrZXkpIHtcbiAgICAgICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4nLFxuICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZURhdGEgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICAgIH1cblxuICAgIHZhciBNU19QRVJfU0VDT05EID0gMTAwMDtcbiAgICB2YXIgTVNfUEVSX01JTlVURSA9IDYwICogTVNfUEVSX1NFQ09ORDtcbiAgICB2YXIgTVNfUEVSX0hPVVIgPSA2MCAqIE1TX1BFUl9NSU5VVEU7XG4gICAgdmFyIE1TX1BFUl80MDBfWUVBUlMgPSAoMzY1ICogNDAwICsgOTcpICogMjQgKiBNU19QRVJfSE9VUjtcblxuICAgIC8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XG4gICAgZnVuY3Rpb24gbW9kJDEoZGl2aWRlbmQsIGRpdmlzb3IpIHtcbiAgICAgICAgcmV0dXJuIChkaXZpZGVuZCAlIGRpdmlzb3IgKyBkaXZpc29yKSAlIGRpdmlzb3I7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XG4gICAgICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIGQpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHV0Y1N0YXJ0T2ZEYXRlKHksIG0sIGQpIHtcbiAgICAgICAgLy8gRGF0ZS5VVEMgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgICAgIHJldHVybiBEYXRlLlVUQyh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5VVEMoeSwgbSwgZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE9mICh1bml0cykge1xuICAgICAgICB2YXIgdGltZTtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnRPZkRhdGUgPSB0aGlzLl9pc1VUQyA/IHV0Y1N0YXJ0T2ZEYXRlIDogbG9jYWxTdGFydE9mRGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIDAsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgLSB0aGlzLm1vbnRoKCkgJSAzLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLCBNU19QRVJfSE9VUik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Quc2V0VGltZSh0aW1lKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRPZiAodW5pdHMpIHtcbiAgICAgICAgdmFyIHRpbWU7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXJ0T2ZEYXRlID0gdGhpcy5faXNVVEMgPyB1dGNTdGFydE9mRGF0ZSA6IGxvY2FsU3RhcnRPZkRhdGU7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgLSB0aGlzLm1vbnRoKCkgJSAzICsgMywgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpICsgMSwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KCkgKyA3KSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSArIDcpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkgKyAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfSE9VUiAtIG1vZCQxKHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLCBNU19QRVJfSE9VUikgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfU0VDT05EIC0gbW9kJDEodGltZSwgTVNfUEVSX1NFQ09ORCkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbHVlT2YgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAoKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bml4ICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0RhdGUgKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvQXJyYXkgKCkge1xuICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBbbS55ZWFyKCksIG0ubW9udGgoKSwgbS5kYXRlKCksIG0uaG91cigpLCBtLm1pbnV0ZSgpLCBtLnNlY29uZCgpLCBtLm1pbGxpc2Vjb25kKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvT2JqZWN0ICgpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgICAgICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQkMiAoKSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNpbmdGbGFncyAoKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZEF0ICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dDogdGhpcy5faSxcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICAgICAgaXNVVEM6IHRoaXMuX2lzVVRDLFxuICAgICAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3RcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ2dnJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnR0cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbiAodG9rZW4sIGdldHRlcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG4gICAgfVxuXG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICAgICAnd2Vla1llYXInKTtcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsICAgICd3ZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAgJ2lzb1dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCAnaXNvV2Vla1llYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcbiAgICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrWWVhcicsIDEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignRycsICAgICAgbWF0Y2hTaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdHRycsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignZ2cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gICAgYWRkUmVnZXhUb2tlbignR0dHR0cnLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheSgpLFxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgICAgIGlucHV0LCB0aGlzLmlzb1dlZWsoKSwgdGhpcy5pc29XZWVrZGF5KCksIDEsIDQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyICgpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luWWVhciAoKSB7XG4gICAgICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgICAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIodGhpcywgZG93LCBkb3kpLnllYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgICAgICBpZiAod2VlayA+IHdlZWtzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNldFdlZWtBbGwuY2FsbCh0aGlzLCBpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0V2Vla0FsbCh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdRJywgMCwgJ1FvJywgJ3F1YXJ0ZXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbiAgICBhZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlciAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMykgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdEJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgICAgIHJldHVybiBpc1N0cmljdCA/XG4gICAgICAgICAgKGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZSkgOlxuICAgICAgICAgIGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQ7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbiAgICBhZGRQYXJzZVRva2VuKCdEbycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdKTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXREYXlPZk1vbnRoID0gbWFrZUdldFNldCgnRGF0ZScsIHRydWUpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignREREJywgIG1hdGNoMXRvMyk7XG4gICAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mWWVhciAoaW5wdXQpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhciA9IE1hdGgucm91bmQoKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTUpICsgMTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSBkYXlPZlllYXIpLCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdtJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3MnLCAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldFNlY29uZCA9IG1ha2VHZXRTZXQoJ1NlY29uZHMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTUycsIDRdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTJywgNV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTUycsIDZdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTUycsIDddLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTJywgOF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTUycsIDldLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDAwO1xuICAgIH0pO1xuXG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1MnLCAgICBtYXRjaDF0bzMsIG1hdGNoMSk7XG4gICAgYWRkUmVnZXhUb2tlbignU1MnLCAgIG1hdGNoMXRvMywgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdTU1MnLCAgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG4gICAgdmFyIHRva2VuO1xuICAgIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICAgICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xuICAgIH1cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0TWlsbGlzZWNvbmQgPSBtYWtlR2V0U2V0KCdNaWxsaXNlY29uZHMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigneicsICAwLCAwLCAnem9uZUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFpvbmVBYmJyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab25lTmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbiAgICB9XG5cbiAgICB2YXIgcHJvdG8gPSBNb21lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8uYWRkICAgICAgICAgICAgICAgPSBhZGQ7XG4gICAgcHJvdG8uY2FsZW5kYXIgICAgICAgICAgPSBjYWxlbmRhciQxO1xuICAgIHByb3RvLmNsb25lICAgICAgICAgICAgID0gY2xvbmU7XG4gICAgcHJvdG8uZGlmZiAgICAgICAgICAgICAgPSBkaWZmO1xuICAgIHByb3RvLmVuZE9mICAgICAgICAgICAgID0gZW5kT2Y7XG4gICAgcHJvdG8uZm9ybWF0ICAgICAgICAgICAgPSBmb3JtYXQ7XG4gICAgcHJvdG8uZnJvbSAgICAgICAgICAgICAgPSBmcm9tO1xuICAgIHByb3RvLmZyb21Ob3cgICAgICAgICAgID0gZnJvbU5vdztcbiAgICBwcm90by50byAgICAgICAgICAgICAgICA9IHRvO1xuICAgIHByb3RvLnRvTm93ICAgICAgICAgICAgID0gdG9Ob3c7XG4gICAgcHJvdG8uZ2V0ICAgICAgICAgICAgICAgPSBzdHJpbmdHZXQ7XG4gICAgcHJvdG8uaW52YWxpZEF0ICAgICAgICAgPSBpbnZhbGlkQXQ7XG4gICAgcHJvdG8uaXNBZnRlciAgICAgICAgICAgPSBpc0FmdGVyO1xuICAgIHByb3RvLmlzQmVmb3JlICAgICAgICAgID0gaXNCZWZvcmU7XG4gICAgcHJvdG8uaXNCZXR3ZWVuICAgICAgICAgPSBpc0JldHdlZW47XG4gICAgcHJvdG8uaXNTYW1lICAgICAgICAgICAgPSBpc1NhbWU7XG4gICAgcHJvdG8uaXNTYW1lT3JBZnRlciAgICAgPSBpc1NhbWVPckFmdGVyO1xuICAgIHByb3RvLmlzU2FtZU9yQmVmb3JlICAgID0gaXNTYW1lT3JCZWZvcmU7XG4gICAgcHJvdG8uaXNWYWxpZCAgICAgICAgICAgPSBpc1ZhbGlkJDI7XG4gICAgcHJvdG8ubGFuZyAgICAgICAgICAgICAgPSBsYW5nO1xuICAgIHByb3RvLmxvY2FsZSAgICAgICAgICAgID0gbG9jYWxlO1xuICAgIHByb3RvLmxvY2FsZURhdGEgICAgICAgID0gbG9jYWxlRGF0YTtcbiAgICBwcm90by5tYXggICAgICAgICAgICAgICA9IHByb3RvdHlwZU1heDtcbiAgICBwcm90by5taW4gICAgICAgICAgICAgICA9IHByb3RvdHlwZU1pbjtcbiAgICBwcm90by5wYXJzaW5nRmxhZ3MgICAgICA9IHBhcnNpbmdGbGFncztcbiAgICBwcm90by5zZXQgICAgICAgICAgICAgICA9IHN0cmluZ1NldDtcbiAgICBwcm90by5zdGFydE9mICAgICAgICAgICA9IHN0YXJ0T2Y7XG4gICAgcHJvdG8uc3VidHJhY3QgICAgICAgICAgPSBzdWJ0cmFjdDtcbiAgICBwcm90by50b0FycmF5ICAgICAgICAgICA9IHRvQXJyYXk7XG4gICAgcHJvdG8udG9PYmplY3QgICAgICAgICAgPSB0b09iamVjdDtcbiAgICBwcm90by50b0RhdGUgICAgICAgICAgICA9IHRvRGF0ZTtcbiAgICBwcm90by50b0lTT1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nO1xuICAgIHByb3RvLmluc3BlY3QgICAgICAgICAgID0gaW5zcGVjdDtcbiAgICBwcm90by50b0pTT04gICAgICAgICAgICA9IHRvSlNPTjtcbiAgICBwcm90by50b1N0cmluZyAgICAgICAgICA9IHRvU3RyaW5nO1xuICAgIHByb3RvLnVuaXggICAgICAgICAgICAgID0gdW5peDtcbiAgICBwcm90by52YWx1ZU9mICAgICAgICAgICA9IHZhbHVlT2Y7XG4gICAgcHJvdG8uY3JlYXRpb25EYXRhICAgICAgPSBjcmVhdGlvbkRhdGE7XG4gICAgcHJvdG8ueWVhciAgICAgICA9IGdldFNldFllYXI7XG4gICAgcHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG4gICAgcHJvdG8ud2Vla1llYXIgICAgPSBnZXRTZXRXZWVrWWVhcjtcbiAgICBwcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xuICAgIHByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG4gICAgcHJvdG8ubW9udGggICAgICAgPSBnZXRTZXRNb250aDtcbiAgICBwcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuICAgIHByb3RvLndlZWsgICAgICAgICAgID0gcHJvdG8ud2Vla3MgICAgICAgID0gZ2V0U2V0V2VlaztcbiAgICBwcm90by5pc29XZWVrICAgICAgICA9IHByb3RvLmlzb1dlZWtzICAgICA9IGdldFNldElTT1dlZWs7XG4gICAgcHJvdG8ud2Vla3NJblllYXIgICAgPSBnZXRXZWVrc0luWWVhcjtcbiAgICBwcm90by5pc29XZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyO1xuICAgIHByb3RvLmRhdGUgICAgICAgPSBnZXRTZXREYXlPZk1vbnRoO1xuICAgIHByb3RvLmRheSAgICAgICAgPSBwcm90by5kYXlzICAgICAgICAgICAgID0gZ2V0U2V0RGF5T2ZXZWVrO1xuICAgIHByb3RvLndlZWtkYXkgICAgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG4gICAgcHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbiAgICBwcm90by5kYXlPZlllYXIgID0gZ2V0U2V0RGF5T2ZZZWFyO1xuICAgIHByb3RvLmhvdXIgPSBwcm90by5ob3VycyA9IGdldFNldEhvdXI7XG4gICAgcHJvdG8ubWludXRlID0gcHJvdG8ubWludXRlcyA9IGdldFNldE1pbnV0ZTtcbiAgICBwcm90by5zZWNvbmQgPSBwcm90by5zZWNvbmRzID0gZ2V0U2V0U2Vjb25kO1xuICAgIHByb3RvLm1pbGxpc2Vjb25kID0gcHJvdG8ubWlsbGlzZWNvbmRzID0gZ2V0U2V0TWlsbGlzZWNvbmQ7XG4gICAgcHJvdG8udXRjT2Zmc2V0ICAgICAgICAgICAgPSBnZXRTZXRPZmZzZXQ7XG4gICAgcHJvdG8udXRjICAgICAgICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1VUQztcbiAgICBwcm90by5sb2NhbCAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvTG9jYWw7XG4gICAgcHJvdG8ucGFyc2Vab25lICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldDtcbiAgICBwcm90by5oYXNBbGlnbmVkSG91ck9mZnNldCA9IGhhc0FsaWduZWRIb3VyT2Zmc2V0O1xuICAgIHByb3RvLmlzRFNUICAgICAgICAgICAgICAgID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XG4gICAgcHJvdG8uaXNMb2NhbCAgICAgICAgICAgICAgPSBpc0xvY2FsO1xuICAgIHByb3RvLmlzVXRjT2Zmc2V0ICAgICAgICAgID0gaXNVdGNPZmZzZXQ7XG4gICAgcHJvdG8uaXNVdGMgICAgICAgICAgICAgICAgPSBpc1V0YztcbiAgICBwcm90by5pc1VUQyAgICAgICAgICAgICAgICA9IGlzVXRjO1xuICAgIHByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG4gICAgcHJvdG8uem9uZU5hbWUgPSBnZXRab25lTmFtZTtcbiAgICBwcm90by5kYXRlcyAgPSBkZXByZWNhdGUoJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJywgZ2V0U2V0RGF5T2ZNb250aCk7XG4gICAgcHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKCdtb250aHMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbnRoIGluc3RlYWQnLCBnZXRTZXRNb250aCk7XG4gICAgcHJvdG8ueWVhcnMgID0gZGVwcmVjYXRlKCd5ZWFycyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgeWVhciBpbnN0ZWFkJywgZ2V0U2V0WWVhcik7XG4gICAgcHJvdG8uem9uZSAgID0gZGVwcmVjYXRlKCdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsIGdldFNldFpvbmUpO1xuICAgIHByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZSgnaXNEU1RTaGlmdGVkIGlzIGRlcHJlY2F0ZWQuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RzdC1zaGlmdGVkLyBmb3IgbW9yZSBpbmZvcm1hdGlvbicsIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVbml4IChpbnB1dCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJblpvbmUgKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQgKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHZhciBwcm90byQxID0gTG9jYWxlLnByb3RvdHlwZTtcblxuICAgIHByb3RvJDEuY2FsZW5kYXIgICAgICAgID0gY2FsZW5kYXI7XG4gICAgcHJvdG8kMS5sb25nRGF0ZUZvcm1hdCAgPSBsb25nRGF0ZUZvcm1hdDtcbiAgICBwcm90byQxLmludmFsaWREYXRlICAgICA9IGludmFsaWREYXRlO1xuICAgIHByb3RvJDEub3JkaW5hbCAgICAgICAgID0gb3JkaW5hbDtcbiAgICBwcm90byQxLnByZXBhcnNlICAgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbiAgICBwcm90byQxLnBvc3Rmb3JtYXQgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbiAgICBwcm90byQxLnJlbGF0aXZlVGltZSAgICA9IHJlbGF0aXZlVGltZTtcbiAgICBwcm90byQxLnBhc3RGdXR1cmUgICAgICA9IHBhc3RGdXR1cmU7XG4gICAgcHJvdG8kMS5zZXQgICAgICAgICAgICAgPSBzZXQ7XG5cbiAgICBwcm90byQxLm1vbnRocyAgICAgICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRocztcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0ICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRoc1Nob3J0O1xuICAgIHByb3RvJDEubW9udGhzUGFyc2UgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzUGFyc2U7XG4gICAgcHJvdG8kMS5tb250aHNSZWdleCAgICAgICA9IG1vbnRoc1JlZ2V4O1xuICAgIHByb3RvJDEubW9udGhzU2hvcnRSZWdleCAgPSBtb250aHNTaG9ydFJlZ2V4O1xuICAgIHByb3RvJDEud2VlayA9IGxvY2FsZVdlZWs7XG4gICAgcHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xuICAgIHByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxuICAgIHByb3RvJDEud2Vla2RheXMgICAgICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXM7XG4gICAgcHJvdG8kMS53ZWVrZGF5c01pbiAgICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c01pbjtcbiAgICBwcm90byQxLndlZWtkYXlzU2hvcnQgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzU2hvcnQ7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuXG4gICAgcHJvdG8kMS53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICBwcm90byQxLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcblxuICAgIHByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XG4gICAgcHJvdG8kMS5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuXG4gICAgZnVuY3Rpb24gZ2V0JDEgKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCBzZXR0ZXIpIHtcbiAgICAgICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpO1xuICAgICAgICB2YXIgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlW2ZpZWxkXSh1dGMsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwgKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIC8vICgpXG4gICAgLy8gKDUpXG4gICAgLy8gKGZtdCwgNSlcbiAgICAvLyAoZm10KVxuICAgIC8vICh0cnVlKVxuICAgIC8vICh0cnVlLCA1KVxuICAgIC8vICh0cnVlLCBmbXQsIDUpXG4gICAgLy8gKHRydWUsIGZtdClcbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICAgICAgc2hpZnQgPSBsb2NhbGVTb3J0ZWQgPyBsb2NhbGUuX3dlZWsuZG93IDogMDtcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRocyAoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RNb250aHNTaG9ydCAoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydCAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNNaW4gKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xuICAgIH1cblxuICAgIGdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodG9JbnQobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuXG4gICAgaG9va3MubGFuZyA9IGRlcHJlY2F0ZSgnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLCBnZXRTZXRHbG9iYWxMb2NhbGUpO1xuICAgIGhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJywgZ2V0TG9jYWxlKTtcblxuICAgIHZhciBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBhYnMgKCkge1xuICAgICAgICB2YXIgZGF0YSAgICAgICAgICAgPSB0aGlzLl9kYXRhO1xuXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgdGhpcy5fZGF5cyAgICAgICAgID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICAgICAgdGhpcy5fbW9udGhzICAgICAgID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgICAgIGRhdGEubWlsbGlzZWNvbmRzICA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgICAgICBkYXRhLnNlY29uZHMgICAgICAgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgICAgIGRhdGEubWludXRlcyAgICAgICA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICAgICAgZGF0YS5ob3VycyAgICAgICAgID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICAgICAgZGF0YS5tb250aHMgICAgICAgID0gbWF0aEFicyhkYXRhLm1vbnRocyk7XG4gICAgICAgIGRhdGEueWVhcnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3VidHJhY3QkMSAoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUR1cmF0aW9uKGlucHV0LCB2YWx1ZSk7XG5cbiAgICAgICAgZHVyYXRpb24uX21pbGxpc2Vjb25kcyArPSBkaXJlY3Rpb24gKiBvdGhlci5fbWlsbGlzZWNvbmRzO1xuICAgICAgICBkdXJhdGlvbi5fZGF5cyAgICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9kYXlzO1xuICAgICAgICBkdXJhdGlvbi5fbW9udGhzICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG4gICAgZnVuY3Rpb24gYWRkJDEgKGlucHV0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIDEpO1xuICAgIH1cblxuICAgIC8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIHN1YnRyYWN0KDEsICdzJykgb3Igc3VidHJhY3QoZHVyYXRpb24pXG4gICAgZnVuY3Rpb24gc3VidHJhY3QkMSAoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgLTEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic0NlaWwgKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1YmJsZSAoKSB7XG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG4gICAgICAgIHZhciBkYXlzICAgICAgICAgPSB0aGlzLl9kYXlzO1xuICAgICAgICB2YXIgbW9udGhzICAgICAgID0gdGhpcy5fbW9udGhzO1xuICAgICAgICB2YXIgZGF0YSAgICAgICAgID0gdGhpcy5fZGF0YTtcbiAgICAgICAgdmFyIHNlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCB5ZWFycywgbW9udGhzRnJvbURheXM7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxuICAgICAgICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgICAgICAgaWYgKCEoKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKSkpIHtcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICAgICAgICAgIGRheXMgPSAwO1xuICAgICAgICAgICAgbW9udGhzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAgICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgICAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICAgICAgc2Vjb25kcyAgICAgICAgICAgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgZGF0YS5zZWNvbmRzICAgICAgPSBzZWNvbmRzICUgNjA7XG5cbiAgICAgICAgbWludXRlcyAgICAgICAgICAgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBkYXRhLm1pbnV0ZXMgICAgICA9IG1pbnV0ZXMgJSA2MDtcblxuICAgICAgICBob3VycyAgICAgICAgICAgICA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIGRhdGEuaG91cnMgICAgICAgID0gaG91cnMgJSAyNDtcblxuICAgICAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgICAgICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgICAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgICAgIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgICAgICBtb250aHMgJT0gMTI7XG5cbiAgICAgICAgZGF0YS5kYXlzICAgPSBkYXlzO1xuICAgICAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICAgICAgZGF0YS55ZWFycyAgPSB5ZWFycztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzVG9Nb250aHMgKGRheXMpIHtcbiAgICAgICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgICAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgICAgICAgcmV0dXJuIGRheXMgKiA0ODAwIC8gMTQ2MDk3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyAobW9udGhzKSB7XG4gICAgICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICAgICAgICByZXR1cm4gbW9udGhzICogMTQ2MDk3IC8gNDgwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcyAodW5pdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5cztcbiAgICAgICAgdmFyIG1vbnRocztcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuICAgICAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vbnRoJzogICByZXR1cm4gbW9udGhzO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOiByZXR1cm4gbW9udGhzIC8gMztcbiAgICAgICAgICAgICAgICBjYXNlICd5ZWFyJzogICAgcmV0dXJuIG1vbnRocyAvIDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJyAgIDogcmV0dXJuIGRheXMgLyA3ICAgICArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXknICAgIDogcmV0dXJuIGRheXMgICAgICAgICArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvdXInICAgOiByZXR1cm4gZGF5cyAqIDI0ICAgICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnIDogcmV0dXJuIGRheXMgKiAxNDQwICArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWNvbmQnIDogcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOiByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgdGhpcy5hcygnbXMnKT9cbiAgICBmdW5jdGlvbiB2YWx1ZU9mJDEgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcbiAgICAgICAgICAgICh0aGlzLl9tb250aHMgJSAxMikgKiAyNTkyZTYgK1xuICAgICAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBcyAoYWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFzKGFsaWFzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYXNNaWxsaXNlY29uZHMgPSBtYWtlQXMoJ21zJyk7XG4gICAgdmFyIGFzU2Vjb25kcyAgICAgID0gbWFrZUFzKCdzJyk7XG4gICAgdmFyIGFzTWludXRlcyAgICAgID0gbWFrZUFzKCdtJyk7XG4gICAgdmFyIGFzSG91cnMgICAgICAgID0gbWFrZUFzKCdoJyk7XG4gICAgdmFyIGFzRGF5cyAgICAgICAgID0gbWFrZUFzKCdkJyk7XG4gICAgdmFyIGFzV2Vla3MgICAgICAgID0gbWFrZUFzKCd3Jyk7XG4gICAgdmFyIGFzTW9udGhzICAgICAgID0gbWFrZUFzKCdNJyk7XG4gICAgdmFyIGFzUXVhcnRlcnMgICAgID0gbWFrZUFzKCdRJyk7XG4gICAgdmFyIGFzWWVhcnMgICAgICAgID0gbWFrZUFzKCd5Jyk7XG5cbiAgICBmdW5jdGlvbiBjbG9uZSQxICgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldCQyICh1bml0cykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpc1t1bml0cyArICdzJ10oKSA6IE5hTjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2RhdGFbbmFtZV0gOiBOYU47XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ21pbGxpc2Vjb25kcycpO1xuICAgIHZhciBzZWNvbmRzICAgICAgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyk7XG4gICAgdmFyIG1pbnV0ZXMgICAgICA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKTtcbiAgICB2YXIgaG91cnMgICAgICAgID0gbWFrZUdldHRlcignaG91cnMnKTtcbiAgICB2YXIgZGF5cyAgICAgICAgID0gbWFrZUdldHRlcignZGF5cycpO1xuICAgIHZhciBtb250aHMgICAgICAgPSBtYWtlR2V0dGVyKCdtb250aHMnKTtcbiAgICB2YXIgeWVhcnMgICAgICAgID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuICAgIGZ1bmN0aW9uIHdlZWtzICgpIHtcbiAgICAgICAgcmV0dXJuIGFic0Zsb29yKHRoaXMuZGF5cygpIC8gNyk7XG4gICAgfVxuXG4gICAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcbiAgICB2YXIgdGhyZXNob2xkcyA9IHtcbiAgICAgICAgc3M6IDQ0LCAgICAgICAgIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgICAgICBzIDogNDUsICAgICAgICAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgbSA6IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICBoIDogMjIsICAgICAgICAgLy8gaG91cnMgdG8gZGF5XG4gICAgICAgIGQgOiAyNiwgICAgICAgICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgICAgIE0gOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxuICAgIH07XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuICAgIGZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxIChwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgbG9jYWxlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgICAgICAgdmFyIHNlY29uZHMgID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSk7XG4gICAgICAgIHZhciBtaW51dGVzICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpO1xuICAgICAgICB2YXIgaG91cnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcbiAgICAgICAgdmFyIGRheXMgICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSk7XG4gICAgICAgIHZhciBtb250aHMgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpO1xuICAgICAgICB2YXIgeWVhcnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcblxuICAgICAgICB2YXIgYSA9IHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSAgfHxcbiAgICAgICAgICAgICAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICAgJiYgWydzcycsIHNlY29uZHNdIHx8XG4gICAgICAgICAgICAgICAgbWludXRlcyA8PSAxICAgICAgICAgICAgICYmIFsnbSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gICAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICAgICAgICAgICAgICBob3VycyAgIDw9IDEgICAgICAgICAgICAgJiYgWydoJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgaG91cnMgICA8IHRocmVzaG9sZHMuaCAgICYmIFsnaGgnLCBob3Vyc10gICB8fFxuICAgICAgICAgICAgICAgIGRheXMgICAgPD0gMSAgICAgICAgICAgICAmJiBbJ2QnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICBkYXlzICAgIDwgdGhyZXNob2xkcy5kICAgJiYgWydkZCcsIGRheXNdICAgIHx8XG4gICAgICAgICAgICAgICAgbW9udGhzICA8PSAxICAgICAgICAgICAgICYmIFsnTSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgIG1vbnRocyAgPCB0aHJlc2hvbGRzLk0gICAmJiBbJ01NJywgbW9udGhzXSAgfHxcbiAgICAgICAgICAgICAgICB5ZWFycyAgIDw9IDEgICAgICAgICAgICAgJiYgWyd5J10gICAgICAgICAgIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICAgICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgICAgICBhWzRdID0gbG9jYWxlO1xuICAgICAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nIChyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKHJvdW5kaW5nRnVuY3Rpb24pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG4gICAgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkICh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICAgICAgICB9XG4gICAgICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgICAgICBpZiAodGhyZXNob2xkID09PSAncycpIHtcbiAgICAgICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaHVtYW5pemUgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgICAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuICAgIGZ1bmN0aW9uIHNpZ24oeCkge1xuICAgICAgICByZXR1cm4gKCh4ID4gMCkgLSAoeCA8IDApKSB8fCAreDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0lTT1N0cmluZyQxKCkge1xuICAgICAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxuICAgICAgICAvLyAgKiBtaWxsaXNlY29uZHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIGhvdXJzXG4gICAgICAgIC8vICAqIGRheXMgZG8gbm90IGJ1YmJsZSBhdCBhbGxcbiAgICAgICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgaXMgbm8gY29udGV4dC1mcmVlIGNvbnZlcnNpb24gYmV0d2VlbiBob3VycyBhbmQgZGF5c1xuICAgICAgICAvLyAodGhpbmsgb2YgY2xvY2sgY2hhbmdlcylcbiAgICAgICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2Vjb25kcyA9IGFicyQxKHRoaXMuX21pbGxpc2Vjb25kcykgLyAxMDAwO1xuICAgICAgICB2YXIgZGF5cyAgICAgICAgID0gYWJzJDEodGhpcy5fZGF5cyk7XG4gICAgICAgIHZhciBtb250aHMgICAgICAgPSBhYnMkMSh0aGlzLl9tb250aHMpO1xuICAgICAgICB2YXIgbWludXRlcywgaG91cnMsIHllYXJzO1xuXG4gICAgICAgIC8vIDM2MDAgc2Vjb25kcyAtPiA2MCBtaW51dGVzIC0+IDEgaG91clxuICAgICAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICAgICAgc2Vjb25kcyAlPSA2MDtcbiAgICAgICAgbWludXRlcyAlPSA2MDtcblxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgICAgIHllYXJzICA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICAgICAgbW9udGhzICU9IDEyO1xuXG5cbiAgICAgICAgLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2RvcmRpbGxlL21vbWVudC1pc29kdXJhdGlvbi9ibG9iL21hc3Rlci9tb21lbnQuaXNvZHVyYXRpb24uanNcbiAgICAgICAgdmFyIFkgPSB5ZWFycztcbiAgICAgICAgdmFyIE0gPSBtb250aHM7XG4gICAgICAgIHZhciBEID0gZGF5cztcbiAgICAgICAgdmFyIGggPSBob3VycztcbiAgICAgICAgdmFyIG0gPSBtaW51dGVzO1xuICAgICAgICB2YXIgcyA9IHNlY29uZHMgPyBzZWNvbmRzLnRvRml4ZWQoMykucmVwbGFjZSgvXFwuPzArJC8sICcnKSA6ICcnO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpO1xuXG4gICAgICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiAnUDBEJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b3RhbFNpZ24gPSB0b3RhbCA8IDAgPyAnLScgOiAnJztcbiAgICAgICAgdmFyIHltU2lnbiA9IHNpZ24odGhpcy5fbW9udGhzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICAgICAgdmFyIGRheXNTaWduID0gc2lnbih0aGlzLl9kYXlzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICAgICAgdmFyIGhtc1NpZ24gPSBzaWduKHRoaXMuX21pbGxpc2Vjb25kcykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIHRvdGFsU2lnbiArICdQJyArXG4gICAgICAgICAgICAoWSA/IHltU2lnbiArIFkgKyAnWScgOiAnJykgK1xuICAgICAgICAgICAgKE0gPyB5bVNpZ24gKyBNICsgJ00nIDogJycpICtcbiAgICAgICAgICAgIChEID8gZGF5c1NpZ24gKyBEICsgJ0QnIDogJycpICtcbiAgICAgICAgICAgICgoaCB8fCBtIHx8IHMpID8gJ1QnIDogJycpICtcbiAgICAgICAgICAgIChoID8gaG1zU2lnbiArIGggKyAnSCcgOiAnJykgK1xuICAgICAgICAgICAgKG0gPyBobXNTaWduICsgbSArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAocyA/IGhtc1NpZ24gKyBzICsgJ1MnIDogJycpO1xuICAgIH1cblxuICAgIHZhciBwcm90byQyID0gRHVyYXRpb24ucHJvdG90eXBlO1xuXG4gICAgcHJvdG8kMi5pc1ZhbGlkICAgICAgICA9IGlzVmFsaWQkMTtcbiAgICBwcm90byQyLmFicyAgICAgICAgICAgID0gYWJzO1xuICAgIHByb3RvJDIuYWRkICAgICAgICAgICAgPSBhZGQkMTtcbiAgICBwcm90byQyLnN1YnRyYWN0ICAgICAgID0gc3VidHJhY3QkMTtcbiAgICBwcm90byQyLmFzICAgICAgICAgICAgID0gYXM7XG4gICAgcHJvdG8kMi5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xuICAgIHByb3RvJDIuYXNTZWNvbmRzICAgICAgPSBhc1NlY29uZHM7XG4gICAgcHJvdG8kMi5hc01pbnV0ZXMgICAgICA9IGFzTWludXRlcztcbiAgICBwcm90byQyLmFzSG91cnMgICAgICAgID0gYXNIb3VycztcbiAgICBwcm90byQyLmFzRGF5cyAgICAgICAgID0gYXNEYXlzO1xuICAgIHByb3RvJDIuYXNXZWVrcyAgICAgICAgPSBhc1dlZWtzO1xuICAgIHByb3RvJDIuYXNNb250aHMgICAgICAgPSBhc01vbnRocztcbiAgICBwcm90byQyLmFzUXVhcnRlcnMgICAgID0gYXNRdWFydGVycztcbiAgICBwcm90byQyLmFzWWVhcnMgICAgICAgID0gYXNZZWFycztcbiAgICBwcm90byQyLnZhbHVlT2YgICAgICAgID0gdmFsdWVPZiQxO1xuICAgIHByb3RvJDIuX2J1YmJsZSAgICAgICAgPSBidWJibGU7XG4gICAgcHJvdG8kMi5jbG9uZSAgICAgICAgICA9IGNsb25lJDE7XG4gICAgcHJvdG8kMi5nZXQgICAgICAgICAgICA9IGdldCQyO1xuICAgIHByb3RvJDIubWlsbGlzZWNvbmRzICAgPSBtaWxsaXNlY29uZHM7XG4gICAgcHJvdG8kMi5zZWNvbmRzICAgICAgICA9IHNlY29uZHM7XG4gICAgcHJvdG8kMi5taW51dGVzICAgICAgICA9IG1pbnV0ZXM7XG4gICAgcHJvdG8kMi5ob3VycyAgICAgICAgICA9IGhvdXJzO1xuICAgIHByb3RvJDIuZGF5cyAgICAgICAgICAgPSBkYXlzO1xuICAgIHByb3RvJDIud2Vla3MgICAgICAgICAgPSB3ZWVrcztcbiAgICBwcm90byQyLm1vbnRocyAgICAgICAgID0gbW9udGhzO1xuICAgIHByb3RvJDIueWVhcnMgICAgICAgICAgPSB5ZWFycztcbiAgICBwcm90byQyLmh1bWFuaXplICAgICAgID0gaHVtYW5pemU7XG4gICAgcHJvdG8kMi50b0lTT1N0cmluZyAgICA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b0pTT04gICAgICAgICA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi5sb2NhbGUgICAgICAgICA9IGxvY2FsZTtcbiAgICBwcm90byQyLmxvY2FsZURhdGEgICAgID0gbG9jYWxlRGF0YTtcblxuICAgIHByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoJ3RvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpJywgdG9JU09TdHJpbmckMSk7XG4gICAgcHJvdG8kMi5sYW5nID0gbGFuZztcblxuICAgIC8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdYJywgMCwgMCwgJ3VuaXgnKTtcbiAgICBhZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG4gICAgYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0LCAxMCkgKiAxMDAwKTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG4gICAgfSk7XG5cbiAgICAvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cblxuICAgIGhvb2tzLnZlcnNpb24gPSAnMi4yNC4wJztcblxuICAgIHNldEhvb2tDYWxsYmFjayhjcmVhdGVMb2NhbCk7XG5cbiAgICBob29rcy5mbiAgICAgICAgICAgICAgICAgICAgPSBwcm90bztcbiAgICBob29rcy5taW4gICAgICAgICAgICAgICAgICAgPSBtaW47XG4gICAgaG9va3MubWF4ICAgICAgICAgICAgICAgICAgID0gbWF4O1xuICAgIGhvb2tzLm5vdyAgICAgICAgICAgICAgICAgICA9IG5vdztcbiAgICBob29rcy51dGMgICAgICAgICAgICAgICAgICAgPSBjcmVhdGVVVEM7XG4gICAgaG9va3MudW5peCAgICAgICAgICAgICAgICAgID0gY3JlYXRlVW5peDtcbiAgICBob29rcy5tb250aHMgICAgICAgICAgICAgICAgPSBsaXN0TW9udGhzO1xuICAgIGhvb2tzLmlzRGF0ZSAgICAgICAgICAgICAgICA9IGlzRGF0ZTtcbiAgICBob29rcy5sb2NhbGUgICAgICAgICAgICAgICAgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XG4gICAgaG9va3MuaW52YWxpZCAgICAgICAgICAgICAgID0gY3JlYXRlSW52YWxpZDtcbiAgICBob29rcy5kdXJhdGlvbiAgICAgICAgICAgICAgPSBjcmVhdGVEdXJhdGlvbjtcbiAgICBob29rcy5pc01vbWVudCAgICAgICAgICAgICAgPSBpc01vbWVudDtcbiAgICBob29rcy53ZWVrZGF5cyAgICAgICAgICAgICAgPSBsaXN0V2Vla2RheXM7XG4gICAgaG9va3MucGFyc2Vab25lICAgICAgICAgICAgID0gY3JlYXRlSW5ab25lO1xuICAgIGhvb2tzLmxvY2FsZURhdGEgICAgICAgICAgICA9IGdldExvY2FsZTtcbiAgICBob29rcy5pc0R1cmF0aW9uICAgICAgICAgICAgPSBpc0R1cmF0aW9uO1xuICAgIGhvb2tzLm1vbnRoc1Nob3J0ICAgICAgICAgICA9IGxpc3RNb250aHNTaG9ydDtcbiAgICBob29rcy53ZWVrZGF5c01pbiAgICAgICAgICAgPSBsaXN0V2Vla2RheXNNaW47XG4gICAgaG9va3MuZGVmaW5lTG9jYWxlICAgICAgICAgID0gZGVmaW5lTG9jYWxlO1xuICAgIGhvb2tzLnVwZGF0ZUxvY2FsZSAgICAgICAgICA9IHVwZGF0ZUxvY2FsZTtcbiAgICBob29rcy5sb2NhbGVzICAgICAgICAgICAgICAgPSBsaXN0TG9jYWxlcztcbiAgICBob29rcy53ZWVrZGF5c1Nob3J0ICAgICAgICAgPSBsaXN0V2Vla2RheXNTaG9ydDtcbiAgICBob29rcy5ub3JtYWxpemVVbml0cyAgICAgICAgPSBub3JtYWxpemVVbml0cztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVSb3VuZGluZyAgPSBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG4gICAgaG9va3MuY2FsZW5kYXJGb3JtYXQgICAgICAgID0gZ2V0Q2FsZW5kYXJGb3JtYXQ7XG4gICAgaG9va3MucHJvdG90eXBlICAgICAgICAgICAgID0gcHJvdG87XG5cbiAgICAvLyBjdXJyZW50bHkgSFRNTDUgaW5wdXQgdHlwZSBvbmx5IHN1cHBvcnRzIDI0LWhvdXIgZm9ybWF0c1xuICAgIGhvb2tzLkhUTUw1X0ZNVCA9IHtcbiAgICAgICAgREFURVRJTUVfTE9DQUw6ICdZWVlZLU1NLUREVEhIOm1tJywgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIC8+XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMX1NFQ09ORFM6ICdZWVlZLU1NLUREVEhIOm1tOnNzJywgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMC4wMDFcIiAvPlxuICAgICAgICBEQVRFOiAnWVlZWS1NTS1ERCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxuICAgICAgICBUSU1FOiAnSEg6bW0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiAvPlxuICAgICAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIFRJTUVfTVM6ICdISDptbTpzcy5TU1MnLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgICAgIFdFRUs6ICdHR0dHLVtXXVdXJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgICAgIE1PTlRIOiAnWVlZWS1NTScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwibW9udGhcIiAvPlxuICAgIH07XG5cbiAgICByZXR1cm4gaG9va3M7XG5cbn0pKSk7XG4iLCI8c2NyaXB0PlxuXG4vLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vamF2YXNjcmlwdHNvdXJjZS5jb20vYmVhdC1jb3VudGVyL1xubGV0IG1lc3NhZ2UgPSAnJztcbmxldCBiZWF0Q291bnRlciA9IDA7XG5sZXQgYXZlcmFnZVRvdGFsID0gMDtcbmxldCB0b3RhbEJwbSA9IDA7XG5sZXQgZmlyc3RUaW1lID0gMDtcbmxldCBsYXN0VGltZSA9IDA7XG5cbmxldCB0aW1lb3V0SWQgPSBudWxsO1xuXG5mdW5jdGlvbiBiZWF0KCl7XG4gIG1lc3NhZ2UgPSAnJztcbiAgaWYodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe3Jlc2V0KCl9LDMwMDApO1xuXG4gIGxldCBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gIGxldCBjdXJyZW50VmFsdWUgPSA2MDAwMCAqIGJlYXRDb3VudGVyIC8gKGN1cnJlbnRUaW1lIC0gZmlyc3RUaW1lKTtcblxuICBpZihiZWF0Q291bnRlciA9PSAwKXtcbiAgICBhdmVyYWdlVG90YWwgPSAxMDA7XG4gICAgdG90YWxCcG0gPSAxMDA7XG4gICAgZmlyc3RUaW1lID0gY3VycmVudFRpbWU7XG4gICAgYmVhdENvdW50ZXIgPSAxO1xuXG4gIH1lbHNle1xuXG4gICAgYXZlcmFnZVRvdGFsID0gTWF0aC5yb3VuZChjdXJyZW50VmFsdWUgKiAxMDApIC8gMTAwO1xuICAgIHRvdGFsQnBtID0gTWF0aC5yb3VuZChjdXJyZW50VmFsdWUpO1xuICAgIGJlYXRDb3VudGVyKys7XG5cbiAgfVxuICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuICBtZXNzYWdlID0gYEF1dG9yZXNldC4gQnBtIHZhbHVlIHdhcyAke3RvdGFsQnBtfS5gO1xuICBiZWF0Q291bnRlciA9IDA7XG4gIGF2ZXJhZ2VUb3RhbCA9IDA7XG4gIHRvdGFsQnBtID0gMDtcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1kYXJrIHNoYWRvd1wiPlxuPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gIFNvbmcgQmVhdCBDYWxjdWxhdG9yXG48L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHB5LTVcIj57dG90YWxCcG19IEJQTTwvaDM+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgcC00XCIgb246Y2xpY2s9e2JlYXR9PkJlYXQ8L2J1dHRvbj5cbiAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBweS0zXCI+PHNtYWxsIGNsYXNzPVwidGV4dC1pbmZvXCI+U3RhcnQgaGl0dGluZyB0aGUgYmVhdCBidXR0b24gdG8gdGhlIGJlYXQgb2YgYSBzb25nIHRvIGNhbGN1bGF0ZSB0aGUgc29uZydzIEJQTS48L3NtYWxsPjwvcD5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgdGV4dC1tdXRlZCBzbWFsbFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgICB7I2lmIGJlYXRDb3VudGVyfVxuICAgICAgU2FtcGxlZCB7YmVhdENvdW50ZXJ9IHRpbWV7YmVhdENvdW50ZXI9PTE/Jyc6J3MnfSwgYXZlcmFnZSBicG0gaXMge3RvdGFsQnBtfS5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIG9uOmNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cdDwvZGl2PlxuXG5cbjwvZGl2PlxuIiwiLyogZ2xvYmFsIHdpbmRvdywgZXhwb3J0cywgZGVmaW5lICovXG5cbiFmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIHZhciByZSA9IHtcbiAgICAgICAgbm90X3N0cmluZzogL1tec10vLFxuICAgICAgICBub3RfYm9vbDogL1tedF0vLFxuICAgICAgICBub3RfdHlwZTogL1teVF0vLFxuICAgICAgICBub3RfcHJpbWl0aXZlOiAvW152XS8sXG4gICAgICAgIG51bWJlcjogL1tkaWVmZ10vLFxuICAgICAgICBudW1lcmljX2FyZzogL1tiY2RpZWZndXhYXS8sXG4gICAgICAgIGpzb246IC9bal0vLFxuICAgICAgICBub3RfanNvbjogL1teal0vLFxuICAgICAgICB0ZXh0OiAvXlteXFx4MjVdKy8sXG4gICAgICAgIG1vZHVsbzogL15cXHgyNXsyfS8sXG4gICAgICAgIHBsYWNlaG9sZGVyOiAvXlxceDI1KD86KFsxLTldXFxkKilcXCR8XFwoKFteKV0rKVxcKSk/KFxcKyk/KDB8J1teJF0pPygtKT8oXFxkKyk/KD86XFwuKFxcZCspKT8oW2ItZ2lqb3N0VHV2eFhdKS8sXG4gICAgICAgIGtleTogL14oW2Etel9dW2Etel9cXGRdKikvaSxcbiAgICAgICAga2V5X2FjY2VzczogL15cXC4oW2Etel9dW2Etel9cXGRdKikvaSxcbiAgICAgICAgaW5kZXhfYWNjZXNzOiAvXlxcWyhcXGQrKVxcXS8sXG4gICAgICAgIHNpZ246IC9eWystXS9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcHJpbnRmKGtleSkge1xuICAgICAgICAvLyBgYXJndW1lbnRzYCBpcyBub3QgYW4gYXJyYXksIGJ1dCBzaG91bGQgYmUgZmluZSBmb3IgdGhpcyBjYWxsXG4gICAgICAgIHJldHVybiBzcHJpbnRmX2Zvcm1hdChzcHJpbnRmX3BhcnNlKGtleSksIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2c3ByaW50ZihmbXQsIGFyZ3YpIHtcbiAgICAgICAgcmV0dXJuIHNwcmludGYuYXBwbHkobnVsbCwgW2ZtdF0uY29uY2F0KGFyZ3YgfHwgW10pKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNwcmludGZfZm9ybWF0KHBhcnNlX3RyZWUsIGFyZ3YpIHtcbiAgICAgICAgdmFyIGN1cnNvciA9IDEsIHRyZWVfbGVuZ3RoID0gcGFyc2VfdHJlZS5sZW5ndGgsIGFyZywgb3V0cHV0ID0gJycsIGksIGssIHBoLCBwYWQsIHBhZF9jaGFyYWN0ZXIsIHBhZF9sZW5ndGgsIGlzX3Bvc2l0aXZlLCBzaWduXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmVlX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlX3RyZWVbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHBhcnNlX3RyZWVbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJzZV90cmVlW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHBoID0gcGFyc2VfdHJlZVtpXSAvLyBjb252ZW5pZW5jZSBwdXJwb3NlcyBvbmx5XG4gICAgICAgICAgICAgICAgaWYgKHBoLmtleXMpIHsgLy8ga2V5d29yZCBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd2W2N1cnNvcl1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBoLmtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNwcmludGYoJ1tzcHJpbnRmXSBDYW5ub3QgYWNjZXNzIHByb3BlcnR5IFwiJXNcIiBvZiB1bmRlZmluZWQgdmFsdWUgXCIlc1wiJywgcGgua2V5c1trXSwgcGgua2V5c1trLTFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ1twaC5rZXlzW2tdXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBoLnBhcmFtX25vKSB7IC8vIHBvc2l0aW9uYWwgYXJndW1lbnQgKGV4cGxpY2l0KVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd2W3BoLnBhcmFtX25vXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy8gcG9zaXRpb25hbCBhcmd1bWVudCAoaW1wbGljaXQpXG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3ZbY3Vyc29yKytdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlLm5vdF90eXBlLnRlc3QocGgudHlwZSkgJiYgcmUubm90X3ByaW1pdGl2ZS50ZXN0KHBoLnR5cGUpICYmIGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZygpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlLm51bWVyaWNfYXJnLnRlc3QocGgudHlwZSkgJiYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInICYmIGlzTmFOKGFyZykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc3ByaW50ZignW3NwcmludGZdIGV4cGVjdGluZyBudW1iZXIgYnV0IGZvdW5kICVUJywgYXJnKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmUubnVtYmVyLnRlc3QocGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfcG9zaXRpdmUgPSBhcmcgPj0gMFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGgudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBhcnNlSW50KGFyZywgMTApLnRvU3RyaW5nKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYXJnLCAxMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwYXJzZUludChhcmcsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaic6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBKU09OLnN0cmluZ2lmeShhcmcsIG51bGwsIHBoLndpZHRoID8gcGFyc2VJbnQocGgud2lkdGgpIDogMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGgucHJlY2lzaW9uID8gcGFyc2VGbG9hdChhcmcpLnRvRXhwb25lbnRpYWwocGgucHJlY2lzaW9uKSA6IHBhcnNlRmxvYXQoYXJnKS50b0V4cG9uZW50aWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGgucHJlY2lzaW9uID8gcGFyc2VGbG9hdChhcmcpLnRvRml4ZWQocGgucHJlY2lzaW9uKSA6IHBhcnNlRmxvYXQoYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwaC5wcmVjaXNpb24gPyBTdHJpbmcoTnVtYmVyKGFyZy50b1ByZWNpc2lvbihwaC5wcmVjaXNpb24pKSkgOiBwYXJzZUZsb2F0KGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBhcnNlSW50KGFyZywgMTApID4+PiAwKS50b1N0cmluZyg4KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBTdHJpbmcoYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBoLnByZWNpc2lvbiA/IGFyZy5zdWJzdHJpbmcoMCwgcGgucHJlY2lzaW9uKSA6IGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gU3RyaW5nKCEhYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gKHBoLnByZWNpc2lvbiA/IGFyZy5zdWJzdHJpbmcoMCwgcGgucHJlY2lzaW9uKSA6IGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBhcnNlSW50KGFyZywgMTApID4+PiAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy52YWx1ZU9mKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwYXJzZUludChhcmcsIDEwKSA+Pj4gMCkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwYXJzZUludChhcmcsIDEwKSA+Pj4gMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZS5qc29uLnRlc3QocGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGFyZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlLm51bWJlci50ZXN0KHBoLnR5cGUpICYmICghaXNfcG9zaXRpdmUgfHwgcGguc2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSBpc19wb3NpdGl2ZSA/ICcrJyA6ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJnLnRvU3RyaW5nKCkucmVwbGFjZShyZS5zaWduLCAnJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZF9jaGFyYWN0ZXIgPSBwaC5wYWRfY2hhciA/IHBoLnBhZF9jaGFyID09PSAnMCcgPyAnMCcgOiBwaC5wYWRfY2hhci5jaGFyQXQoMSkgOiAnICdcbiAgICAgICAgICAgICAgICAgICAgcGFkX2xlbmd0aCA9IHBoLndpZHRoIC0gKHNpZ24gKyBhcmcpLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBwYWQgPSBwaC53aWR0aCA/IChwYWRfbGVuZ3RoID4gMCA/IHBhZF9jaGFyYWN0ZXIucmVwZWF0KHBhZF9sZW5ndGgpIDogJycpIDogJydcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IHBoLmFsaWduID8gc2lnbiArIGFyZyArIHBhZCA6IChwYWRfY2hhcmFjdGVyID09PSAnMCcgPyBzaWduICsgcGFkICsgYXJnIDogcGFkICsgc2lnbiArIGFyZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIHZhciBzcHJpbnRmX2NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gICAgZnVuY3Rpb24gc3ByaW50Zl9wYXJzZShmbXQpIHtcbiAgICAgICAgaWYgKHNwcmludGZfY2FjaGVbZm10XSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwcmludGZfY2FjaGVbZm10XVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9mbXQgPSBmbXQsIG1hdGNoLCBwYXJzZV90cmVlID0gW10sIGFyZ19uYW1lcyA9IDBcbiAgICAgICAgd2hpbGUgKF9mbXQpIHtcbiAgICAgICAgICAgIGlmICgobWF0Y2ggPSByZS50ZXh0LmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKG1hdGNoWzBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoID0gcmUubW9kdWxvLmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKCclJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChtYXRjaCA9IHJlLnBsYWNlaG9sZGVyLmV4ZWMoX2ZtdCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ19uYW1lcyB8PSAxXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZF9saXN0ID0gW10sIHJlcGxhY2VtZW50X2ZpZWxkID0gbWF0Y2hbMl0sIGZpZWxkX21hdGNoID0gW11cbiAgICAgICAgICAgICAgICAgICAgaWYgKChmaWVsZF9tYXRjaCA9IHJlLmtleS5leGVjKHJlcGxhY2VtZW50X2ZpZWxkKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgocmVwbGFjZW1lbnRfZmllbGQgPSByZXBsYWNlbWVudF9maWVsZC5zdWJzdHJpbmcoZmllbGRfbWF0Y2hbMF0ubGVuZ3RoKSkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmaWVsZF9tYXRjaCA9IHJlLmtleV9hY2Nlc3MuZXhlYyhyZXBsYWNlbWVudF9maWVsZCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGZpZWxkX21hdGNoID0gcmUuaW5kZXhfYWNjZXNzLmV4ZWMocmVwbGFjZW1lbnRfZmllbGQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9saXN0LnB1c2goZmllbGRfbWF0Y2hbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1tzcHJpbnRmXSBmYWlsZWQgdG8gcGFyc2UgbmFtZWQgYXJndW1lbnQga2V5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1tzcHJpbnRmXSBmYWlsZWQgdG8gcGFyc2UgbmFtZWQgYXJndW1lbnQga2V5JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXSA9IGZpZWxkX2xpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ19uYW1lcyB8PSAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcmdfbmFtZXMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc3ByaW50Zl0gbWl4aW5nIHBvc2l0aW9uYWwgYW5kIG5hbWVkIHBsYWNlaG9sZGVycyBpcyBub3QgKHlldCkgc3VwcG9ydGVkJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJzZV90cmVlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXRjaFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtX25vOiAgICBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM6ICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ246ICAgICAgICBtYXRjaFszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZF9jaGFyOiAgICBtYXRjaFs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAgICAgICBtYXRjaFs1XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAgICAgICBtYXRjaFs2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogICBtYXRjaFs3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICAgICAgICBtYXRjaFs4XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdbc3ByaW50Zl0gdW5leHBlY3RlZCBwbGFjZWhvbGRlcicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZm10ID0gX2ZtdC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpbnRmX2NhY2hlW2ZtdF0gPSBwYXJzZV90cmVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhwb3J0IHRvIGVpdGhlciBicm93c2VyIG9yIG5vZGUuanNcbiAgICAgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXhwb3J0c1snc3ByaW50ZiddID0gc3ByaW50ZlxuICAgICAgICBleHBvcnRzWyd2c3ByaW50ZiddID0gdnNwcmludGZcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvd1snc3ByaW50ZiddID0gc3ByaW50ZlxuICAgICAgICB3aW5kb3dbJ3ZzcHJpbnRmJ10gPSB2c3ByaW50ZlxuXG4gICAgICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAnc3ByaW50Zic6IHNwcmludGYsXG4gICAgICAgICAgICAgICAgICAgICd2c3ByaW50Zic6IHZzcHJpbnRmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIHF1b3RlLXByb3BzICovXG59KCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiIsIjxzY3JpcHQ+XG5cbmltcG9ydCBzcHJpbnRmSnMgZnJvbSBcInNwcmludGYtanNcIjtcbmNvbnN0IHByaW50ZiA9IHNwcmludGZKcy5zcHJpbnRmO1xuXG5cbmxldCBmZm1wZWcgPSB0cnVlO1xubGV0IG9yaWdpbmFsID0gMTMwO1xubGV0IHRhcmdldCA9IDE2MDtcblxuZnVuY3Rpb24gc29uZ1RlbXBvQ2hhbmdlKG9yaWdpbmFsQnBtLCB0YXJnZXRCcG0pe1xuXG4gICAgaWYodHlwZW9mIG9yaWdpbmFsQnBtICE9PSAnbnVtYmVyJykgcmV0dXJuIDE7XG4gICAgaWYob3JpZ2luYWxCcG0gPiA5MDApIHJldHVybiAxO1xuICAgIGlmKG9yaWdpbmFsQnBtIDwgMTApIHJldHVybiAxO1xuXG4gICAgaWYodHlwZW9mIHRhcmdldEJwbSAhPT0gJ251bWJlcicpIHJldHVybiAxO1xuICAgIGlmKHRhcmdldEJwbSA+IDkwMCkgcmV0dXJuIDE7XG4gICAgaWYodGFyZ2V0QnBtIDwgMTApIHJldHVybiAxO1xuXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHRhcmdldEJwbSAtIG9yaWdpbmFsQnBtO1xuICAgIHJldHVybiAgKGRpZmZlcmVuY2UgLyBvcmlnaW5hbEJwbSkrMTtcblxufVxuXG4kOiBhZGp1c3RtZW50ID0gc29uZ1RlbXBvQ2hhbmdlKG9yaWdpbmFsLCB0YXJnZXQpLnRvUHJlY2lzaW9uKDMpO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsgc2hhZG93XCI+XG48ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgQ2FsY3VsYXRlIFNvbmcgVGVtcG8gQ2hhbmdlXG48L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXHRcdFx0PCEtLSA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMTBcIiBtYXg9XCI5MDBcIiBiaW5kOnZhbHVlPXtvcmlnaW5hbH0gcGxhY2Vob2xkZXI9XCJvcmlnaW5hbFwiPiA8YWJiciB0aXRsZT1cIkJlYXRzIFBlciBNaW51dGVcIj5icG08L2FiYnI+PC9wPlxuXHRcdFx0PHAgY2xhc3M9XCJjYXJkLXRleHRcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjEwXCIgbWF4PVwiOTAwXCIgYmluZDp2YWx1ZT17dGFyZ2V0fSBwbGFjZWhvbGRlcj1cInRhcmdldFwiPiA8YWJiciB0aXRsZT1cIkJlYXRzIFBlciBNaW51dGVcIj5icG08L2FiYnI+PC9wPiAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzbWFsbFwiIGZvcj1cIm9yaWdpbmFsQmVhdFwiPk9yaWdpbmFsIDxhYmJyIHRpdGxlPVwiQmVhdHMgUGVyIE1pbnV0ZVwiPkJQTTwvYWJicj48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm9yaWdpbmFsQmVhdFwiIG1pbj1cIjEwXCIgbWF4PVwiOTAwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBiaW5kOnZhbHVlPXtvcmlnaW5hbH0gcGxhY2Vob2xkZXI9XCJvcmlnaW5hbFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInNtYWxsXCIgZm9yPVwidGFyZ2V0QmVhdFwiPlRhcmdldCA8YWJiciB0aXRsZT1cIkJlYXRzIFBlciBNaW51dGVcIj5CUE08L2FiYnI+PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0YXJnZXRCZWF0XCIgbWluPVwiMTBcIiBtYXg9XCI5MDBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGJpbmQ6dmFsdWU9e3RhcmdldH0gcGxhY2Vob2xkZXI9XCJ0YXJnZXRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBtYi0zXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBiaW5kOmNoZWNrZWQ9e2ZmbXBlZ30gaWQ9XCJmZm1wZWdNb2RlXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgc21hbGxcIiBmb3I9XCJmZm1wZWdNb2RlXCI+XG4gICAgICAgICAgU2hvdyA8YSBocmVmPVwiaHR0cHM6Ly9mZm1wZWcub3JnL1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5GRm1wZWc8L2E+IENvbW1hbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJvcmlnaW5hbEJlYXRcIj5PcmlnaW5hbCBCZWF0PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwib3JpZ2luYWxCZWF0XCIgbWluPVwiMTBcIiBtYXg9XCI5MDBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwid2lkdGg6IDVyZW07XCIgYmluZDp2YWx1ZT17b3JpZ2luYWx9IHBsYWNlaG9sZGVyPVwib3JpZ2luYWxcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXJnZXRCZWF0XCI+VGFyZ2V0IEJlYXQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0YXJnZXRCZWF0XCIgbWluPVwiMTBcIiBtYXg9XCI5MDBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwid2lkdGg6IDVyZW07XCIgYmluZDp2YWx1ZT17dGFyZ2V0fSBwbGFjZWhvbGRlcj1cInRhcmdldFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAtLT5cblxuXG5cblxuXG4gICAgICB7I2lmIGZmbXBlZ31cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJvcmRlciBib3JkZXIgc2Vjb25kYXJ5IHJvdW5kZWQgcC0zIG1iLTNcIj5cbiAgICAgICAgZmZtcGVnIC1pIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5pbnB1dC1maWxlLm1wMzwvc3Bhbj4gLWFmIGF0ZW1wbz08c3Ryb25nPnthZGp1c3RtZW50fTwvc3Ryb25nPiA8c3BhbiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+b3V0cHV0LWZpbGUte3RhcmdldH0ubXAzPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHNtYWxsIHRleHQtc2Vjb25kYXJ5XCI+PHN0cm9uZz4tYWY8L3N0cm9uZz4gU2ltcGxlIGZpbHRlcmdyYXBocyBhcmUgY29uZmlndXJlZCB3aXRoIHRoZSBwZXItc3RyZWFtIC1maWx0ZXIgb3B0aW9uICh3aXRoIC12ZiBhbmQgLWFmIGFsaWFzZXMgZm9yIHZpZGVvIGFuZCBhdWRpbyByZXNwZWN0aXZlbHkpLiA8YSBocmVmPVwiaHR0cHM6Ly9mZm1wZWcub3JnL2ZmbXBlZy5odG1sI0ZpbHRlcmluZ1wiPiZyYXF1bzwvYT48L3A+XG4gICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBzbWFsbCB0ZXh0LXNlY29uZGFyeVwiPjxzdHJvbmc+YXRlbXBvPC9zdHJvbmc+IEFkanVzdCBhdWRpbyB0ZW1wby4gVGhlIGZpbHRlciBhY2NlcHRzIGV4YWN0bHkgb25lIHBhcmFtZXRlciwgdGhlIGF1ZGlvIHRlbXBvLiBJZiBub3Qgc3BlY2lmaWVkIHRoZW4gdGhlIGZpbHRlciB3aWxsIGFzc3VtZSBub21pbmFsIDEuMCB0ZW1wby4gVGVtcG8gbXVzdCBiZSBpbiB0aGUgWzAuNSwgMTAwLjBdIHJhbmdlLiBOb3RlIHRoYXQgdGVtcG8gZ3JlYXRlciB0aGFuIDIgd2lsbCBza2lwIHNvbWUgc2FtcGxlcyByYXRoZXIgdGhhbiBibGVuZCB0aGVtIGluLiA8YSBocmVmPVwiaHR0cHM6Ly9mZm1wZWcub3JnL2ZmbXBlZy1maWx0ZXJzLmh0bWwjYXRlbXBvXCI+JnJhcXVvPC9hPjwvcD5cbiAgICAgICAgIHs6ZWxzZX1cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXByaW1hcnkgc2hhZG93IHRleHQtY2VudGVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgIHtwcmludGYoJyUuMmYnLChhZGp1c3RtZW50LTEpKjEwMCl9JVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgey9pZn1cblxuXG5cblx0PC9kaXY+XG48L2Rpdj5cbiIsIihmdW5jdGlvbigpe1xuICB2YXIgQ09OU1RBTlRTID0ge1xuICAgIGRheXM6IDEwMDAgKiA2MCAqIDYwICogMjQsXG4gICAgaG91cnM6IDEwMDAgKiA2MCAqIDYwLFxuICAgIG1pbnV0ZXM6IDEwMDAgKiA2MCxcbiAgICBzZWNvbmRzOiAxMDAwXG4gIH07XG5cbiAgdmFyIE1haW5zcHJpbmcgPSBmdW5jdGlvbihkYXRlMSwgZGF0ZTIpe1xuICAgIGlmIChkYXRlMiA9PSBudWxsKSB7XG4gICAgICBkYXRlMiA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwZWxsT3V0KGRpZmZCZXR3ZWVuVGltZXMoZGF0ZTEsIGRhdGUyKSk7XG4gIH1cblxuICAvLyBFeHBvcnQgZm9yIE5vZGUgb3IgYnJvd3NlclxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgIT09IG51bGwgPyBtb2R1bGUuZXhwb3J0cyA6IHZvaWQgMCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gTWFpbnNwcmluZztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLk1haW5zcHJpbmcgPSBNYWluc3ByaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlmZkJldHdlZW5UaW1lcyhkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgZGlmZiwgZnV0dXJlO1xuXG4gICAgaWYgKGRhdGUxID4gZGF0ZTIpIHtcbiAgICAgIGRpZmYgPSBkYXRlMSAtIGRhdGUyO1xuICAgICAgZnV0dXJlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IGRhdGUyIC0gZGF0ZTE7XG4gICAgICBmdXR1cmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXM6IGRpZmYsXG4gICAgICBmdXR1cmU6IGZ1dHVyZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBleHRyYWN0VGltZUVsZW1lbnQodGltZSwgdmFsdWUsIGNvbnN0YW50KSB7XG4gICAgdmFyIGVsYXBzZWQ7XG4gICAgaWYgKHRpbWUgPiBjb25zdGFudCkge1xuICAgICAgZWxhcHNlZCA9IE1hdGguZmxvb3IodGltZSAvIGNvbnN0YW50KTtcbiAgICAgIHRpbWUgPSB0aW1lIC0gKGNvbnN0YW50ICogZWxhcHNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsYXBzZWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGltZTogdGltZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVsYXBzZWQ6IGVsYXBzZWRcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNwZWxsT3V0KHRpbWVEaWZmKSB7XG4gICAgdmFyIGNvbnN0YW50TmFtZSwgY29uc3RhbnRWYWx1ZSwgZWxhcHNlZCwgb3V0cHV0LCByZWYsIHRpbWUsIHRvdGFsVGltZSwgdmFsdWU7XG4gICAgb3V0cHV0ID0ge1xuICAgICAgaW5GdXR1cmU6IHRpbWVEaWZmLmZ1dHVyZVxuICAgIH07XG4gICAgdG90YWxUaW1lID0gdGltZURpZmYubXM7XG4gICAgZm9yIChjb25zdGFudE5hbWUgaW4gQ09OU1RBTlRTKSB7XG4gICAgICBjb25zdGFudFZhbHVlID0gQ09OU1RBTlRTW2NvbnN0YW50TmFtZV07XG4gICAgICByZWYgPSBleHRyYWN0VGltZUVsZW1lbnQodG90YWxUaW1lLCBjb25zdGFudE5hbWUsIGNvbnN0YW50VmFsdWUpLCB0aW1lID0gcmVmLnRpbWUsIHZhbHVlID0gcmVmLnZhbHVlLCBlbGFwc2VkID0gcmVmLmVsYXBzZWQ7XG4gICAgICB0b3RhbFRpbWUgPSB0aW1lO1xuICAgICAgb3V0cHV0W3ZhbHVlXSA9IGVsYXBzZWQ7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJ5ZWFyXCI6MjAwMSxcInNwcmluZ1wiOlwiMjAwMS0wMy0yMFQxMzozMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDEtMDYtMjFUMDc6Mzg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwMS0wOS0yMlQyMzowNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDEtMTItMjFUMTk6MjI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwMixcInNwcmluZ1wiOlwiMjAwMi0wMy0yMFQxOToxNjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDItMDYtMjFUMTM6MjU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwMi0wOS0yM1QwNDo1NjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDItMTItMjJUMDE6MTU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwMyxcInNwcmluZ1wiOlwiMjAwMy0wMy0yMVQwMTowMDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDMtMDYtMjFUMTk6MTE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwMy0wOS0yM1QxMDo0NzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDMtMTItMjJUMDc6MDQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwNCxcInNwcmluZ1wiOlwiMjAwNC0wMy0yMFQwNjo0OTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDQtMDYtMjFUMDA6NTc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwNC0wOS0yMlQxNjozMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDQtMTItMjFUMTI6NDI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwNSxcInNwcmluZ1wiOlwiMjAwNS0wMy0yMFQxMjozNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDUtMDYtMjFUMDY6NDY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwNS0wOS0yMlQyMjoyMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDUtMTItMjFUMTg6MzU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwNixcInNwcmluZ1wiOlwiMjAwNi0wMy0yMFQxODoyNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDYtMDYtMjFUMTI6MjY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwNi0wOS0yM1QwNDowNDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDYtMTItMjJUMDA6MjI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwNyxcInNwcmluZ1wiOlwiMjAwNy0wMy0yMVQwMDowNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDctMDYtMjFUMTg6MDY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwNy0wOS0yM1QwOTo1MTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDctMTItMjJUMDY6MDg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwOCxcInNwcmluZ1wiOlwiMjAwOC0wMy0yMFQwNTo0OTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDgtMDYtMjFUMDA6MDA6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwOC0wOS0yMlQxNTo0NTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDgtMTItMjFUMTI6MDQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAwOSxcInNwcmluZ1wiOlwiMjAwOS0wMy0yMFQxMTo0NDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMDktMDYtMjFUMDU6NDU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAwOS0wOS0yMlQyMToxODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMDktMTItMjFUMTc6NDc6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxMCxcInNwcmluZ1wiOlwiMjAxMC0wMy0yMFQxNzozMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTAtMDYtMjFUMTE6Mjg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxMC0wOS0yM1QwMzowOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTAtMTItMjFUMjM6Mzg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxMSxcInNwcmluZ1wiOlwiMjAxMS0wMy0yMFQyMzoyMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTEtMDYtMjFUMTc6MTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxMS0wOS0yM1QwOTowNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTEtMTItMjJUMDU6MzA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxMixcInNwcmluZ1wiOlwiMjAxMi0wMy0yMFQwNToxNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTItMDYtMjBUMjM6MDg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxMi0wOS0yMlQxNDo0OTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTItMTItMjFUMTE6MTI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxMyxcInNwcmluZ1wiOlwiMjAxMy0wMy0yMFQxMTowMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTMtMDYtMjFUMDU6MDQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxMy0wOS0yMlQyMDo0NDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTMtMTItMjFUMTc6MTE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxNCxcInNwcmluZ1wiOlwiMjAxNC0wMy0yMFQxNjo1NzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTQtMDYtMjFUMTA6NTI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxNC0wOS0yM1QwMjozMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTQtMTItMjFUMjM6MDM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxNSxcInNwcmluZ1wiOlwiMjAxNS0wMy0yMFQyMjo0NTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTUtMDYtMjFUMTY6Mzg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxNS0wOS0yM1QwODoyMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTUtMTItMjJUMDQ6NDg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxNixcInNwcmluZ1wiOlwiMjAxNi0wMy0yMFQwNDozMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTYtMDYtMjBUMjI6MzU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxNi0wOS0yMlQxNDoyMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTYtMTItMjFUMTA6NDU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxNyxcInNwcmluZ1wiOlwiMjAxNy0wMy0yMFQxMDoyOTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTctMDYtMjFUMDQ6MjU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxNy0wOS0yMlQyMDowMjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTctMTItMjFUMTY6Mjk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxOCxcInNwcmluZ1wiOlwiMjAxOC0wMy0yMFQxNjoxNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTgtMDYtMjFUMTA6MDc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxOC0wOS0yM1QwMTo1NDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTgtMTItMjFUMjI6MjI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAxOSxcInNwcmluZ1wiOlwiMjAxOS0wMy0yMFQyMTo1ODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMTktMDYtMjFUMTU6NTQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAxOS0wOS0yM1QwNzo1MDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMTktMTItMjJUMDQ6MTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyMCxcInNwcmluZ1wiOlwiMjAyMC0wMy0yMFQwMzo1MDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjAtMDYtMjBUMjE6NDM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyMC0wOS0yMlQxMzozMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjAtMTItMjFUMTA6MDM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyMSxcInNwcmluZ1wiOlwiMjAyMS0wMy0yMFQwOTozNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjEtMDYtMjFUMDM6MzI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyMS0wOS0yMlQxOToyMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjEtMTItMjFUMTU6NTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyMixcInNwcmluZ1wiOlwiMjAyMi0wMy0yMFQxNTozMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjItMDYtMjFUMDk6MTQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyMi0wOS0yM1QwMTowNDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjItMTItMjFUMjE6NDg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyMyxcInNwcmluZ1wiOlwiMjAyMy0wMy0yMFQyMToyNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjMtMDYtMjFUMTQ6NTg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyMy0wOS0yM1QwNjo1MDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjMtMTItMjJUMDM6Mjg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyNCxcInNwcmluZ1wiOlwiMjAyNC0wMy0yMFQwMzowNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjQtMDYtMjBUMjA6NTE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyNC0wOS0yMlQxMjo0NDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjQtMTItMjFUMDk6MjA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyNSxcInNwcmluZ1wiOlwiMjAyNS0wMy0yMFQwOTowMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjUtMDYtMjFUMDI6NDI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyNS0wOS0yMlQxODoyMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjUtMTItMjFUMTU6MDM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyNixcInNwcmluZ1wiOlwiMjAyNi0wMy0yMFQxNDo0NjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjYtMDYtMjFUMDg6MjU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyNi0wOS0yM1QwMDowNjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjYtMTItMjFUMjA6NTA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyNyxcInNwcmluZ1wiOlwiMjAyNy0wMy0yMFQyMDoyNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjctMDYtMjFUMTQ6MTE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyNy0wOS0yM1QwNjowMjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjctMTItMjJUMDI6NDM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyOCxcInNwcmluZ1wiOlwiMjAyOC0wMy0yMFQwMjoxNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjgtMDYtMjBUMjA6MDI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyOC0wOS0yMlQxMTo0NTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjgtMTItMjFUMDg6MjA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAyOSxcInNwcmluZ1wiOlwiMjAyOS0wMy0yMFQwODowMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMjktMDYtMjFUMDE6NDg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAyOS0wOS0yMlQxNzozNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMjktMTItMjFUMTQ6MTQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzMCxcInNwcmluZ1wiOlwiMjAzMC0wMy0yMFQxMzo1MTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzAtMDYtMjFUMDc6MzE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzMC0wOS0yMlQyMzoyNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzAtMTItMjFUMjA6MDk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzMSxcInNwcmluZ1wiOlwiMjAzMS0wMy0yMFQxOTo0MTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzEtMDYtMjFUMTM6MTc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzMS0wOS0yM1QwNToxNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzEtMTItMjJUMDE6NTY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzMixcInNwcmluZ1wiOlwiMjAzMi0wMy0yMFQwMToyMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzItMDYtMjBUMTk6MDk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzMi0wOS0yMlQxMToxMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzItMTItMjFUMDc6NTc6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzMyxcInNwcmluZ1wiOlwiMjAzMy0wMy0yMFQwNzoyMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzMtMDYtMjFUMDE6MDE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzMy0wOS0yMlQxNjo1MjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzMtMTItMjFUMTM6NDU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzNCxcInNwcmluZ1wiOlwiMjAzNC0wMy0yMFQxMzoxODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzQtMDYtMjFUMDY6NDU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzNC0wOS0yMlQyMjo0MTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzQtMTItMjFUMTk6MzU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzNSxcInNwcmluZ1wiOlwiMjAzNS0wMy0yMFQxOTowMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzUtMDYtMjFUMTI6MzM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzNS0wOS0yM1QwNDozOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzUtMTItMjJUMDE6MzE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzNixcInNwcmluZ1wiOlwiMjAzNi0wMy0yMFQwMTowMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzYtMDYtMjBUMTg6MzE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzNi0wOS0yMlQxMDoyMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzYtMTItMjFUMDc6MTI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzNyxcInNwcmluZ1wiOlwiMjAzNy0wMy0yMFQwNjo1MDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzctMDYtMjFUMDA6MjI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzNy0wOS0yMlQxNjoxMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzctMTItMjFUMTM6MDg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzOCxcInNwcmluZ1wiOlwiMjAzOC0wMy0yMFQxMjo0MDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzgtMDYtMjFUMDY6MDk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzOC0wOS0yMlQyMjowMjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzgtMTItMjFUMTk6MDE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjAzOSxcInNwcmluZ1wiOlwiMjAzOS0wMy0yMFQxODozMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwMzktMDYtMjFUMTE6NTg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjAzOS0wOS0yM1QwMzo1MDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwMzktMTItMjJUMDA6NDE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0MCxcInNwcmluZ1wiOlwiMjA0MC0wMy0yMFQwMDoxMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDAtMDYtMjBUMTc6NDY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0MC0wOS0yMlQwOTo0NDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDAtMTItMjFUMDY6MzM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0MSxcInNwcmluZ1wiOlwiMjA0MS0wMy0yMFQwNjowNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDEtMDYtMjBUMjM6Mzc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0MS0wOS0yMlQxNToyNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDEtMTItMjFUMTI6MTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0MixcInNwcmluZ1wiOlwiMjA0Mi0wMy0yMFQxMTo1MzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDItMDYtMjFUMDU6MTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0Mi0wOS0yMlQyMToxMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDItMTItMjFUMTg6MDQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0MyxcInNwcmluZ1wiOlwiMjA0My0wMy0yMFQxNzoyOTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDMtMDYtMjFUMTA6NTk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0My0wOS0yM1QwMzowNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDMtMTItMjJUMDA6MDI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0NCxcInNwcmluZ1wiOlwiMjA0NC0wMy0xOVQyMzoyMDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDQtMDYtMjBUMTY6NTA6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0NC0wOS0yMlQwODo0NzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDQtMTItMjFUMDU6NDM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0NSxcInNwcmluZ1wiOlwiMjA0NS0wMy0yMFQwNTowODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDUtMDYtMjBUMjI6MzQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0NS0wOS0yMlQxNDozMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDUtMTItMjFUMTE6MzY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0NixcInNwcmluZ1wiOlwiMjA0Ni0wMy0yMFQxMDo1ODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDYtMDYtMjFUMDQ6MTU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0Ni0wOS0yMlQyMDoyMjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDYtMTItMjFUMTc6Mjg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0NyxcInNwcmluZ1wiOlwiMjA0Ny0wMy0yMFQxNjo1MjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDctMDYtMjFUMTA6MDI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0Ny0wOS0yM1QwMjowNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDctMTItMjFUMjM6MDc6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0OCxcInNwcmluZ1wiOlwiMjA0OC0wMy0xOVQyMjozNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDgtMDYtMjBUMTU6NTQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0OC0wOS0yMlQwODowMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDgtMTItMjFUMDU6MDI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA0OSxcInNwcmluZ1wiOlwiMjA0OS0wMy0yMFQwNDoyODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNDktMDYtMjBUMjE6NDc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA0OS0wOS0yMlQxMzo0MjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNDktMTItMjFUMTA6NTE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1MCxcInNwcmluZ1wiOlwiMjA1MC0wMy0yMFQxMDoyMDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTAtMDYtMjFUMDM6MzM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1MC0wOS0yMlQxOToyOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTAtMTItMjFUMTY6Mzk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1MSxcInNwcmluZ1wiOlwiMjA1MS0wMy0yMFQxNTo1ODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTEtMDYtMjFUMDk6MTc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1MS0wOS0yM1QwMToyNjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTEtMTItMjFUMjI6MzM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1MixcInNwcmluZ1wiOlwiMjA1Mi0wMy0xOVQyMTo1NjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTItMDYtMjBUMTU6MTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1Mi0wOS0yMlQwNzoxNjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTItMTItMjFUMDQ6MTg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1MyxcInNwcmluZ1wiOlwiMjA1My0wMy0yMFQwMzo0NjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTMtMDYtMjBUMjE6MDM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1My0wOS0yMlQxMzowNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTMtMTItMjFUMTA6MDk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1NCxcInNwcmluZ1wiOlwiMjA1NC0wMy0yMFQwOTozNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTQtMDYtMjFUMDI6NDc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1NC0wOS0yMlQxOTowMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTQtMTItMjFUMTY6MTA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1NSxcInNwcmluZ1wiOlwiMjA1NS0wMy0yMFQxNToyODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTUtMDYtMjFUMDg6Mzk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1NS0wOS0yM1QwMDo0ODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTUtMTItMjFUMjE6NTY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1NixcInNwcmluZ1wiOlwiMjA1Ni0wMy0xOVQyMToxMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTYtMDYtMjBUMTQ6Mjk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1Ni0wOS0yMlQwNjo0MDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTYtMTItMjFUMDM6NTI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1NyxcInNwcmluZ1wiOlwiMjA1Ny0wMy0yMFQwMzowODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTctMDYtMjBUMjA6MTk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1Ny0wOS0yMlQxMjoyMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTctMTItMjFUMDk6NDI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1OCxcInNwcmluZ1wiOlwiMjA1OC0wMy0yMFQwOTowNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTgtMDYtMjFUMDI6MDM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1OC0wOS0yMlQxODowNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTgtMTItMjFUMTU6MjQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA1OSxcInNwcmluZ1wiOlwiMjA1OS0wMy0yMFQxNDo0NDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNTktMDYtMjFUMDc6NDc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA1OS0wOS0yM1QwMDowMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNTktMTItMjFUMjE6MTg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2MCxcInNwcmluZ1wiOlwiMjA2MC0wMy0xOVQyMDozNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjAtMDYtMjBUMTM6NDQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2MC0wOS0yMlQwNTo0NzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjAtMTItMjFUMDM6MDA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2MSxcInNwcmluZ1wiOlwiMjA2MS0wMy0yMFQwMjoyNjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjEtMDYtMjBUMTk6MzM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2MS0wOS0yMlQxMTozMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjEtMTItMjFUMDg6NDk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2MixcInNwcmluZ1wiOlwiMjA2Mi0wMy0yMFQwODowNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjItMDYtMjFUMDE6MTA6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2Mi0wOS0yMlQxNzoxOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjItMTItMjFUMTQ6NDI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2MyxcInNwcmluZ1wiOlwiMjA2My0wMy0yMFQxMzo1OTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjMtMDYtMjFUMDc6MDI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2My0wOS0yMlQyMzowODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjMtMTItMjFUMjA6MjI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2NCxcInNwcmluZ1wiOlwiMjA2NC0wMy0xOVQxOTo0MDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjQtMDYtMjBUMTI6NDc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2NC0wOS0yMlQwNDo1ODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjQtMTItMjFUMDI6MTA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2NSxcInNwcmluZ1wiOlwiMjA2NS0wMy0yMFQwMToyNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjUtMDYtMjBUMTg6MzE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2NS0wOS0yMlQxMDo0MTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjUtMTItMjFUMDc6NTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2NixcInNwcmluZ1wiOlwiMjA2Ni0wMy0yMFQwNzoxOTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjYtMDYtMjFUMDA6MTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2Ni0wOS0yMlQxNjoyNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjYtMTItMjFUMTM6NDU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2NyxcInNwcmluZ1wiOlwiMjA2Ny0wMy0yMFQxMjo1NTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjctMDYtMjFUMDU6NTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2Ny0wOS0yMlQyMjoyMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjctMTItMjFUMTk6NDQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2OCxcInNwcmluZ1wiOlwiMjA2OC0wMy0xOVQxODo1MTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjgtMDYtMjBUMTE6NTU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2OC0wOS0yMlQwNDowOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjgtMTItMjFUMDE6MzQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA2OSxcInNwcmluZ1wiOlwiMjA2OS0wMy0yMFQwMDo0NDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNjktMDYtMjBUMTc6NDA6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA2OS0wOS0yMlQwOTo1MTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNjktMTItMjFUMDc6MjE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3MCxcInNwcmluZ1wiOlwiMjA3MC0wMy0yMFQwNjozNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzAtMDYtMjBUMjM6MjI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3MC0wOS0yMlQxNTo0NTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzAtMTItMjFUMTM6MTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3MSxcInNwcmluZ1wiOlwiMjA3MS0wMy0yMFQxMjozNjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzEtMDYtMjFUMDU6MjE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3MS0wOS0yMlQyMTozOTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzEtMTItMjFUMTk6MDU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3MixcInNwcmluZ1wiOlwiMjA3Mi0wMy0xOVQxODoxOTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzItMDYtMjBUMTE6MTI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3Mi0wOS0yMlQwMzoyNjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzItMTItMjFUMDA6NTQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3MyxcInNwcmluZ1wiOlwiMjA3My0wMy0yMFQwMDoxMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzMtMDYtMjBUMTc6MDY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3My0wOS0yMlQwOToxNDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzMtMTItMjFUMDY6NTA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3NCxcInNwcmluZ1wiOlwiMjA3NC0wMy0yMFQwNjowOTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzQtMDYtMjBUMjI6NTk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3NC0wOS0yMlQxNTowNDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzQtMTItMjFUMTI6MzY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3NSxcInNwcmluZ1wiOlwiMjA3NS0wMy0yMFQxMTo0ODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzUtMDYtMjFUMDQ6NDE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3NS0wOS0yMlQyMTowMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzUtMTItMjFUMTg6Mjg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3NixcInNwcmluZ1wiOlwiMjA3Ni0wMy0xOVQxNzozNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzYtMDYtMjBUMTA6MzU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3Ni0wOS0yMlQwMjo0ODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzYtMTItMjFUMDA6MTI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3NyxcInNwcmluZ1wiOlwiMjA3Ny0wMy0xOVQyMzozMDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzctMDYtMjBUMTY6MjM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3Ny0wOS0yMlQwODozNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzctMTItMjFUMDY6MDA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3OCxcInNwcmluZ1wiOlwiMjA3OC0wMy0yMFQwNToxMTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzgtMDYtMjBUMjE6NTg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3OC0wOS0yMlQxNDoyNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzgtMTItMjFUMTE6NTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA3OSxcInNwcmluZ1wiOlwiMjA3OS0wMy0yMFQxMTowMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwNzktMDYtMjFUMDM6NTE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA3OS0wOS0yMlQyMDoxNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwNzktMTItMjFUMTc6NDY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4MCxcInNwcmluZ1wiOlwiMjA4MC0wMy0xOVQxNjo0MzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODAtMDYtMjBUMDk6MzM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4MC0wOS0yMlQwMTo1NTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODAtMTItMjBUMjM6MzE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4MSxcInNwcmluZ1wiOlwiMjA4MS0wMy0xOVQyMjozNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODEtMDYtMjBUMTU6MTY6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4MS0wOS0yMlQwNzozODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODEtMTItMjFUMDU6MjI6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4MixcInNwcmluZ1wiOlwiMjA4Mi0wMy0yMFQwNDozMjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODItMDYtMjBUMjE6MDQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4Mi0wOS0yMlQxMzoyNDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODItMTItMjFUMTE6MDY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4MyxcInNwcmluZ1wiOlwiMjA4My0wMy0yMFQxMDowODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODMtMDYtMjFUMDI6NDE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4My0wOS0yMlQxOToxMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODMtMTItMjFUMTY6NTE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4NCxcInNwcmluZ1wiOlwiMjA4NC0wMy0xOVQxNTo1ODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODQtMDYtMjBUMDg6Mzk6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4NC0wOS0yMlQwMDo1ODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODQtMTItMjBUMjI6NDA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4NSxcInNwcmluZ1wiOlwiMjA4NS0wMy0xOVQyMTo1MzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODUtMDYtMjBUMTQ6MzM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4NS0wOS0yMlQwNjo0MzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODUtMTItMjFUMDQ6Mjk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4NixcInNwcmluZ1wiOlwiMjA4Ni0wMy0yMFQwMzozNjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODYtMDYtMjBUMjA6MTE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4Ni0wOS0yMlQxMjozMzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODYtMTItMjFUMTA6MjQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4NyxcInNwcmluZ1wiOlwiMjA4Ny0wMy0yMFQwOToyNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODctMDYtMjFUMDI6MDU6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4Ny0wOS0yMlQxODoyNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODctMTItMjFUMTY6MDc6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4OCxcInNwcmluZ1wiOlwiMjA4OC0wMy0xOVQxNToxNjowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODgtMDYtMjBUMDc6NTc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4OC0wOS0yMlQwMDoxODowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODgtMTItMjBUMjE6NTY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA4OSxcInNwcmluZ1wiOlwiMjA4OS0wMy0xOVQyMTowNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwODktMDYtMjBUMTM6NDM6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA4OS0wOS0yMlQwNjowNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwODktMTItMjFUMDM6NTM6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5MCxcInNwcmluZ1wiOlwiMjA5MC0wMy0yMFQwMzowMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTAtMDYtMjBUMTk6Mzc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5MC0wOS0yMlQxMjowMTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTAtMTItMjFUMDk6NDU6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5MSxcInNwcmluZ1wiOlwiMjA5MS0wMy0yMFQwODo0MDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTEtMDYtMjFUMDE6MTc6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5MS0wOS0yMlQxNzo0OTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTEtMTItMjFUMTU6Mzc6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5MixcInNwcmluZ1wiOlwiMjA5Mi0wMy0xOVQxNDozMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTItMDYtMjBUMDc6MTQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5Mi0wOS0yMVQyMzo0MTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTItMTItMjBUMjE6MzE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5MyxcInNwcmluZ1wiOlwiMjA5My0wMy0xOVQyMDozNTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTMtMDYtMjBUMTM6MDg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5My0wOS0yMlQwNTozMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTMtMTItMjFUMDM6MjE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5NCxcInNwcmluZ1wiOlwiMjA5NC0wMy0yMFQwMjoyMDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTQtMDYtMjBUMTg6NDA6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5NC0wOS0yMlQxMToxNTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTQtMTItMjFUMDk6MTE6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5NSxcInNwcmluZ1wiOlwiMjA5NS0wMy0yMFQwODoxNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTUtMDYtMjFUMDA6Mzg6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5NS0wOS0yMlQxNzoxMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTUtMTItMjFUMTU6MDA6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5NixcInNwcmluZ1wiOlwiMjA5Ni0wMy0xOVQxNDowMzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTYtMDYtMjBUMDY6MzE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5Ni0wOS0yMVQyMjo1NTowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTYtMTItMjBUMjA6NDY6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5NyxcInNwcmluZ1wiOlwiMjA5Ny0wMy0xOVQxOTo0OTowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTctMDYtMjBUMTI6MTQ6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5Ny0wOS0yMlQwNDozNzowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTctMTItMjFUMDI6Mzg6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5OCxcInNwcmluZ1wiOlwiMjA5OC0wMy0yMFQwMTozODowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTgtMDYtMjBUMTg6MDE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5OC0wOS0yMlQxMDoyMjowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTgtMTItMjFUMDg6MTk6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjA5OSxcInNwcmluZ1wiOlwiMjA5OS0wMy0yMFQwNzoxNzowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIwOTktMDYtMjBUMjM6NDE6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjA5OS0wOS0yMlQxNjoxMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIwOTktMTItMjFUMTQ6MDQ6MDAuMDAwWlwifSx7XCJ5ZWFyXCI6MjEwMCxcInNwcmluZ1wiOlwiMjEwMC0wMy0yMFQxMzowNDowMC4wMDBaXCIsXCJzdW1tZXJcIjpcIjIxMDAtMDYtMjFUMDU6MzI6MDAuMDAwWlwiLFwiZmFsbFwiOlwiMjEwMC0wOS0yMlQyMjowMDowMC4wMDBaXCIsXCJ3aW50ZXJcIjpcIjIxMDAtMTItMjFUMTk6NTE6MDAuMDAwWlwifV0iLCI8c2NyaXB0PlxuXG5pbXBvcnQgbWFpbnNwcmluZyBmcm9tICdtYWluc3ByaW5nJztcbmltcG9ydCBzb2xzdGljZXNBbmRFcXVpbm94ZXMgZnJvbSAnc29sc3RpY2VzLWFuZC1lcXVpbm94ZXMnO1xuZnVuY3Rpb24gbWFrZUV2ZW50cygpe1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAvL3RvZGF5LnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkrOCk7XG4gIGxldCB0bXBMaXN0ID0gW107XG4gIGZ1bmN0aW9uIGxhYmVsRXZlbnQoaSl7XG4gICAgY29uc3QgbyA9IGkuY291bnRkb3duO1xuICAgIGNvbnN0IHAgPSB7XG4gICAgICBkYXlzOiBvLmRheXM9PTE/J2RheSc6J2RheXMnLFxuICAgICAgaG91cnM6IG8uaG91cnM9PTE/J2hvdXInOidob3VycycsXG4gICAgICBtaW51dGVzOiBvLm1pbnV0ZXM9PTE/J21pbnV0ZSc6J21pbnV0ZXMnLFxuICAgICAgc2Vjb25kczogby5zZWNvbmRzPT0xPydzZWNvbmQnOidzZWNvbmRzJyxcbiAgICB9XG4gICAgaS50ZXh0ID0gW1xuICAgICAgYCR7aS5sYWJlbH0gaXMgaW5gLFxuICAgICAgby5kYXlzPT0wP3VuZGVmaW5lZDpgJHtvLmRheXN9ICR7cC5kYXlzfSxgLFxuICAgICAgby5ob3Vycz09MD91bmRlZmluZWQ6YCR7by5ob3Vyc30gJHtwLmhvdXJzfSxgLFxuICAgICAgby5taW51dGVzPT0wP3VuZGVmaW5lZDpgJHtvLm1pbnV0ZXN9ICR7cC5taW51dGVzfSBhbmRgLFxuICAgICAgYCR7by5zZWNvbmRzfSAke3Auc2Vjb25kc30uYFxuICAgIF0uam9pbignICcpO1xuICAgIHJldHVybiBpXG4gIH1cbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgdGhpc1llYXIgPSBzb2xzdGljZXNBbmRFcXVpbm94ZXMuZmlsdGVyKGk9PmkueWVhcj09KHllYXIpKS5wb3AoKTtcbiAgY29uc3QgbmV4dFllYXIgPSBzb2xzdGljZXNBbmRFcXVpbm94ZXMuZmlsdGVyKGk9PmkueWVhcj09KHllYXIrMSkpLnBvcCgpO1xuICB0bXBMaXN0LnB1c2goe25hbWU6ICdTcHJpbmcnLCBsYWJlbDonVmVybmFsIChTcHJpbmcpIEVxdWlub3gnLCBjb3VudGRvd246IG1haW5zcHJpbmcobmV3IERhdGUodGhpc1llYXIuc3ByaW5nKSx0b2RheSl9KTtcbiAgdG1wTGlzdC5wdXNoKHtuYW1lOiAnU3VtbWVyJywgbGFiZWw6J1N1bW1lciBTb2xzdGljZScsIGNvdW50ZG93bjogbWFpbnNwcmluZyhuZXcgRGF0ZSh0aGlzWWVhci5zdW1tZXIpLHRvZGF5KX0pO1xuICB0bXBMaXN0LnB1c2goe25hbWU6ICdGYWxsJywgICBsYWJlbDonQXV0dW1uYWwgRXF1aW5veCcsICAgY291bnRkb3duOiBtYWluc3ByaW5nKG5ldyBEYXRlKHRoaXNZZWFyLmZhbGwpLHRvZGF5KX0pO1xuICB0bXBMaXN0LnB1c2goe25hbWU6ICdXaW50ZXInLCBsYWJlbDonV2ludGVyIFNvbHN0aWNlJywgY291bnRkb3duOiBtYWluc3ByaW5nKG5ldyBEYXRlKHRoaXNZZWFyLndpbnRlciksdG9kYXkpfSk7XG4gIHRtcExpc3QucHVzaCh7bmFtZTogJ1NwcmluZycsIGxhYmVsOnllYXIrMSsnIFZlcm5hbCAoU3ByaW5nKSBFcXVpbm94JywgY291bnRkb3duOiBtYWluc3ByaW5nKG5ldyBEYXRlKG5leHRZZWFyLnNwcmluZyksdG9kYXkpfSk7XG4gIHRtcExpc3QucHVzaCh7bmFtZTogJ1N1bW1lcicsIGxhYmVsOnllYXIrMSsnIFN1bW1lciBTb2xzdGljZScsIGNvdW50ZG93bjogbWFpbnNwcmluZyhuZXcgRGF0ZShuZXh0WWVhci5zdW1tZXIpLHRvZGF5KX0pO1xuICB0bXBMaXN0LnB1c2goe25hbWU6ICdGYWxsJywgICBsYWJlbDp5ZWFyKzErJyBBdXR1bW5hbCBFcXVpbm94JywgICBjb3VudGRvd246IG1haW5zcHJpbmcobmV3IERhdGUobmV4dFllYXIuZmFsbCksdG9kYXkpfSk7XG4gIHRtcExpc3QucHVzaCh7bmFtZTogJ1dpbnRlcicsIGxhYmVsOnllYXIrMSsnIFdpbnRlciBTb2xzdGljZScsIGNvdW50ZG93bjogbWFpbnNwcmluZyhuZXcgRGF0ZShuZXh0WWVhci53aW50ZXIpLHRvZGF5KX0pO1xuICB0bXBMaXN0ID0gdG1wTGlzdC5maWx0ZXIoaT0+aS5jb3VudGRvd24uaW5GdXR1cmUpO1xuICB0bXBMaXN0ID0gdG1wTGlzdC5tYXAoaT0+bGFiZWxFdmVudChpKSlcbiAgY29uc3QgdHJhY2tlciA9IG5ldyBTZXQoKTtcblxuICBjb25zdCByZXNwb25zZSA9IFtdO1xuICBmb3IgKGxldCBlbnRyeSBvZiB0bXBMaXN0KSB7XG4gICAgaWYoIXRyYWNrZXIuaGFzKGVudHJ5Lm5hbWUpKXtcbiAgICAgIHJlc3BvbnNlLnB1c2goZW50cnkpO1xuICAgICAgdHJhY2tlci5hZGQoZW50cnkubmFtZSlcbiAgICB9XG4gIH1cbiAgcmVzcG9uc2VbMF0ubmV4dCA9IHRydWU7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxubGV0IGV2ZW50cyA9IG1ha2VFdmVudHMoKTtcbnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gIGV2ZW50cyA9IG1ha2VFdmVudHMoKTtcbn0sMTAwMClcblxuXG48L3NjcmlwdD5cblxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1kYXJrIHNoYWRvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICBTb2xzdGljZSBhbmQgRXF1aW5veCBDYWxjdWxhdG9yXG4gIDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB5LTNcIj5cblxuXG4gICAgeyNlYWNoIGV2ZW50cyBhcyBldmVudH1cbiAgICAgIHsjaWYgZXZlbnQubmV4dH1cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHBiLTQgdGV4dC1pbmZvIGxlYWRcIj57ZXZlbnQudGV4dH08L3A+XG4gICAgICB7OmVsc2V9XG4gICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBwYi0yIHRleHQtbXV0ZWRcIj57ZXZlbnQudGV4dH08L3A+XG4gICAgICB7L2lmfVxuICAgIHsvZWFjaH1cblxuXG5cdDwvZGl2PlxuPC9kaXY+XG4iLCJjb25zdCBhZHZpY2UgPSBbXG4gIGBBc2sgeW91ciBvbGRlciBzZWxmIGFib3V0IHRoZSByZWdyZXRzIHRoZXkgbWF5IGhhdmUuIFdpbGwgdGhleSBiZSBoYXBweSB5b3UgbmV2ZXIgZmluaXNoZWQgYW5kIGFsd2F5cyBxdWl0P2AsXG4gIGBBIHR3byBob3VyIG5vbi1zdG9wIHdvcmtvdXQsIGl0IGlzIGEgcmV3YXJkIGZvciBwZXJzaXN0ZW5jZSBlYXJuZWQgd2l0aCBzZXZlcmFsIG1vbnRocyBvZiBwcmVwYXJhdGlvbiBhbmQgZW5kdXJhbmNlIHRyYWluaW5nLmAsXG4gIGBBIFdvcmtvdXQgaXMgc2ltaWxhciB0byByZWFjaGluZyBNb3VudCBFdmVyZXN0LiBCZWZvcmUgeW91IGFycml2ZSB5b3UgaGF2ZSB0byBlZHVjYXRlIHlvdXIgbWluZCBhbmQgaW5jcmVtZW50YWxseSBwcmVwYXJlIHlvdXIgYm9keSBieSBpbmNyZWFzaW5nIGl0cyBlbmR1cmFuY2UuIElmIHlvdSBqdXN0IGRyZXNzIHlvdXJzZWxmIHRvIGxvb2sgbGlrZSBldmVyeWJvZHkgZWxzZSwgZ2V0IHRoZSBzYW1lIGVxdWlwbWVudCwgYW5kIG5vdGVib29rcywgYW5kIGV2ZW4gZnJpZW5kczsgeW91IHdpbGwgbm90IHRyaXVtcGgsIHlvdSB3aWxsIGVpdGhlciBnaXZlIHVwLCBmYWlsLCBvciBkaWUgYSBzdHVwaWQgYW5kIHdvcnRobGVzcyBkZWF0aC5gLFxuICBgQSB3b3Jrb3V0IG11c3QgYmUgbm9uIHN0b3AsIG9uY2UgeW91IHN0b3AsIGl0IGlzIG92ZXIsIHlvdSBnbyBob21lLCByZXN0IGFuZCB3b3Jrb3V0IGEgbGl0dGxlIGJpdCBsb25nZXIgdGhlIG5leHQgZGF5LmAsXG4gIGBBIHdvcmtvdXQgc2hvdWxkIGxhc3Qgb3ZlciB0d28gaG91cnMuYCxcbiAgYEJlY29tZSBhIGdyZWF0IHdhcnJpb3IuYCxcbiAgYEJlY29tZSBhIGxlYWRlciBhbmQgc3ludGhlc2l6ZSB5b3VyIG93biBpZGVhcywgdXNlIHRoZSBzY2llbnRpZmljIG1ldGhvZCB0byBhc3NlcyB0aGVpciBlZmZpY2FjeS5gLFxuICBgQmVjb21lIHVsdHJhLCBiZWNvbWUgc3VwZXJodW1hbiBieSBleHRlbmRpbmcgeW91ciBlbmR1cmFuY2UgdG8gZ3JlYXRlciBhbmQgZ3JlYXRlciBoZWlnaHRzLmAsXG4gIGBCZSByZXNwZWN0ZnVsIG9mIG90aGVyIHBlb3BsZSdzIGhhcmQgd29yay5gLFxuICBgQ2hlY2sgaWYgeW91ciBicmVhdGggc21lbGxzLmAsXG4gIGBDaGVjayB5b3VyIGJvZHkgb2RvciwgZG8gbm90IHVzZSBkZW9kb3JhbnRzLiBVc2UgaGFuZCBzYW5pdGl6ZXIgdG8ga2lsbCBvZG9yIGNhdXNpbmcgYmFjdGVyaWEuYCxcbiAgYERhbmNlIHdpdGggeW91ciBmZWV0IGxpa2UgYSBib3hpbmcgYnV0dGVyZmx5LmAsXG4gIGBEbyBub3QgcG9pbnQgeW91ciBwaG9uZSBjYW1lcmEgYXQgb3RoZXIgcGVvcGxlLmAsXG4gIGBEbyBub3QgcHJldGVuZCB0byB3b3JrIG91dCwgdGhlIG9ubHkgcGVyc29uIHlvdSBhcmUgY2hlYXRpbmcgYXQgYSBneW0gaXMgeW91cnNlbGYuIEluIGEgZmV3IHdlZWtzIHBlb3BsZSB3aWxsIG5vdGljZSB0aGF0IHlvdSBtYWRlIG5vIHByb2dyZXNzIGFuZCB3aWxsIHRoaW5rIGxlc3Mgb2YgeW91LmAsXG4gIGBEbyBub3QgdGFsaywgdG8gZWFjaCBvdGhlciwgb3Igb24gdGhlIHBob25lLCBleGVyY2lzZSByZXF1aXJlcyBmb2N1cyBhbmQgdGFsa2luZyBpcyB0b28gZGlzdHJhY3RpbmcgdG8gZXZlcnlvbmUgYXJvdW5kIHlvdS5gLFxuICBgRG8gbm90IHVzZSBlcXVpcG1lbnQgdGhhdCBmb3JjZXMgeW91IHRvIGxheSBkb3duLCBpdCB3aWxsIG1ha2UgeW91IGxvb2sgcmVhbGx5IGJhZC5gLFxuICBgRG8gbm90IHdhbGsgaW50byBvdGhlciBwZW9wbGUncyBwZXJzb25hbCBzcGFjZS5gLFxuICBgRG9uJ3QgY29weSB3b3Jrb3V0cywgbm90IGV2ZXJ5b25lIGlzIHdvcmtpbmcgb3V0LmAsXG4gIGBEb24ndCBjcmVlcCB1cC5gLFxuICBgRG9uJ3QgZHJvcCB3ZWlnaHRzLmAsXG4gIGBEb24ndCBlYXQgY2hlYXQgbWVhbHMuYCxcbiAgYERvbid0IGdpdmUgdXAuYCxcbiAgYERvbid0IGdydW50LmAsXG4gIGBEb24ndCBqdWRnZSwgZm9jdXMgb24geW91IG93biBleGVyY2lzZSwgc29tZXRpbWVzIHBlb3BsZSBjb21lIGhlcmUgdG8gZ2V0IGF3YXkgZnJvbSB0aGVpciBwcm9ibGVtcy5gLFxuICBgRG9uJ3QgbGF5LmAsXG4gIGBEb24ndCBsZWFuIGludG8gcGVvcGxlLmAsXG4gIGBEb24ndCBsaWUsIGRvbid0IGNoZWF0LCBkb24ndCBzdGVhbDsgZG9uJ3QgdG9sZXJhdGUgYW55IG9mIHRob3NlIHdobyBkby5gLFxuICBgRG9uJ3QgbGlmdCB0b28gaGVhdnksIHlvdSB3b24ndCBpbXByZXNzIGFueW9uZS5gLFxuICBgRG9uJ3QgbWFrZSBkaXN0cmFjdGluZyBub2lzZXMuYCxcbiAgYERvbid0IHByZXRlbmQuYCxcbiAgYERvbid0IHJlc3QuYCxcbiAgYERvbid0IHJlc3QsIHVzZSBhIGxvd2VyIHdlaWdodCBkdXJpbmcgeW91ciByZXN0LmAsXG4gIGBEb24ndCBzaXQuYCxcbiAgYERvbid0IHNpdCBkb3duLmAsXG4gIGBEb24ndCBzdGFyZS5gLFxuICBgRG9uJ3Qgc3dpbmcgd2VpZ2h0cy5gLFxuICBgRG9uJ3Qgc3dpbmcgd2VpZ2h0cywgZW5nYWdlIGFzIG1hbnkgbXVzY2xlcyBhcyB5b3UgY2FuLmAsXG4gIGBEb24ndCB0YWtlIGRheXMgb2ZmLmAsXG4gIGBEb24ndCB0YWtlIHNlbGZpZXMgb3IgcGhvdG9zLCBwZW9wbGUgZG9uJ3Qgd2FudCB0byBiZSBpbiB5b3VyIHBpY3R1cmVzLmAsXG4gIGBEb24ndCB0YWxrLmAsXG4gIGBEb24ndCB1c2UgeW91ciBwaG9uZS5gLFxuICBgRG9uJ3Qgd2VhciBncmF5IG9yIGJsYWNrLCBkcmVzcyBsaWtlIGFuIGF0aGxldGUgb3Igc3VwZXJoZXJvLCB5b3VyIG9sZGVyIHNlbGYgd2lsbCByZWdyZXQgZHJlc3NpbmcgdXAgbGlrZSBldmVyeWJvZHkgZWxzZS5gLFxuICBgRHJpbmsgd2F0ZXIuYCxcbiAgYEVuc3VyZSBwcm9wZXIgbGV2ZWxzIG9mIFNvZGl1bSwgTWFnbmVzaXVtLCBaaW5jLCBDYWxjaXVtLCBhbmQgUG90YXNzaXVtLmAsXG4gIGBFdmVyeXRoaW5nIHlvdSB0aGluayB5b3Uga25vdyBpcyB3cm9uZywgYW5kIG1vc3Qgb2YgdGhlIHJpZ2h0IHRoaW5ncyByZXF1aXJlIHRoYXQgeW91IHN0b3AgcHJldGVuZGluZyB0aGF0IHlvdSBrbm93IGhvdyB0byBkbyBpdCwgYW5kIGFjdHVhbGx5IGZpZ3VyZSBpdCBvdXQgYnkgdHJpYWwgYW5kIGVycm9yIG9uIHlvdXIgb3duLmAsXG4gIGBGb2N1cy5gLFxuICBgRm9jdXMgb24geW91ciBicmVhdGhpbmcuYCxcbiAgYEZvY3VzIG9uIHlvdXIgZGFuY2UgbW92ZXMuYCxcbiAgYEZvY3VzIG9uIHlvdXIgZXhlcmNpc2UuYCxcbiAgYEdldCByaWQgb2YgeW91ciBtaWNyb3dhdmUsIGN1dCB0aGUgZGFtbiBjb3JkLmAsXG4gIGBHZXQgdXAuYCxcbiAgYElmIHlvdSBhcmUgZGVzcGVyYXRlIHRvIGJlZ2luIGxvc2luZyB3ZWlnaHQgcmlnaHQgbm93LCByaWdodCB0aGlzIG1vbWVudDsgZ28gaG9tZSBhbmQgY3V0IG9mZiBhbGwgdGhlIHBsdWdzIGZyb20geW91ciBlbGVjdHJpYyBhcHBsaWFuY2VzLmAsXG4gIGBJZiB5b3UgYXJlIG92ZXJ3ZWlnaHQsIGFkZCBzaHJlZGRlZCBsZXR0dWNlIHRvIHlvdXIgZGlldCwgaXQgd2lsbCBsb3dlciB0aGUgY2Fsb3JpYyBkZW5zaXR5IG9mIHlvdXIgZGFpbHkgZm9vZCBpbnRha2UsIHRodXMgeW91IHdpbGwgY29uc3VtZSBsZXNzIGNhbG9yaWVzIHBlciBkYXkuYCxcbiAgYElmIHlvdSBhcmUgb3ZlcndlaWdodDsgZ2V0IHJpZCBvZiBhbGwga2l0Y2hlbiBhcHBsaWFuY2VzIGluY2x1ZGluZyB5b3VyIHJlZnJpZ2VyYXRvciwgc3RvdmUsIGVsZWN0cmljIHNraWxsZXRzLCBvdmVucywgdG9hc3RlcjsgYW5kIGV2ZW4gdGhlIG1peGVyLmAsXG4gIGBJZiB5b3UgYXJlIHNpY2sgZ28gaG9tZSwgZG9uJ3QgbWFrZSBvdGhlciBwZW9wbGUgc2ljay5gLFxuICBgSWYgeW91IGRvIGVuZCB1cCB3b3JraW5nIG91dCBldmVyeSBkYXkgYnV0IGZhaWwgdG8gc2hvdyBwcm9ncmVzcyBpbiBhIGZldyB3ZWVrcywgdGhlbiBwZW9wbGUgd2lsbCBrbm93IHlvdSBqdXN0IHNwZW50IGEgZmV3IHdlZWtzIHByZXRlbmRpbmcgdG8gd29yayBvdXQuYCxcbiAgYElmIHlvdSBmZWVsIHRoYXQgeW91IGFyZSB0b28gbGFyZ2UgdG8gYmVnaW4geW91ciB3b3Jrb3V0IGF0IHRoZSBneW0sIHlvdSBzaG91bGQgc3RhcnQgYXQgdGhlIEFwcGFsYWNoaWFuIG9yIFBhY2lmaWMgQ3Jlc3QgVHJhaWwuYCxcbiAgYElmIHlvdSBoYWQgdG8gc3RvcCB0aGVuIHlvdSBjaG9zZSB3ZWlnaHRzIHRoYXQgYXJlIGp1c3QgdG9vIGhlYXZ5IGZvciB5b3UgdG8gbGlmdC5gLFxuICBgSWYgeW91IGhhdmUgdG8gc3RvcCB0aGVuLCBpdCBpcyB0b28gaGVhdnkuYCxcbiAgYElmIFlvdSBsaWZ0IGhlYXZ5IHRvIHByZXRlbmQgeW91IGFyZSBhIGJhZCBhc3MsIHRob3NlIHdobyB3aWxsIG5vdGljZSB5b3UsIHdpbGwgc2VlIHRoYXQgeW91IGFyZSBzaXR0aW5nIGFyb3VuZCBwcmV0ZW5kaW5nIHRvIHJlc3QgeW91ciBsZWdzIHRvIGFuIGFybSB3b3Jrb3V0LCB3aGlsZSBwbGF5aW5nIHdpdGggeW91ciBwaG9uZSBpbiB0aGUgbWlkZGxlIG9mIGEgZ3ltLmAsXG4gIGBJdCBpcyBub3QgaG93IGhlYXZ5IHlvdSBsaWZ0LCBpdCBpcyBob3cgbG9uZyB5b3UgbGlmdCB5b3VyIGhlYXZ5IGZvci5gLFxuICBgS2VlcCBtb3ZpbmcuYCxcbiAgYExvd2VyIHlvdXIgd2VpZ2h0IGlmIGl0IGlzIHRvbyBoZWF2eSwgZG9uJ3Qgc3RvcCAtIGdldCB1bmRlciB0aGUgbXVzY2xlIHBhaW4sIGZhaWx1cmUsIGFuZCBwYWluIGJ1aWxkdXAuYCxcbiAgYE1ha2Ugc3VyZSB5b3UgY29tZSBiYWNrIHRvbW9ycm93LmAsXG4gIGBNb3ZlIHlvdXIgZmVldC5gLFxuICBgTW92ZSB5b3VyIGZlZXQsIGxpa2UgYSBib3hlci5gLFxuICBgTmV2ZXIgU3RvcC5gLFxuICBgTmV2ZXIgdXNlIG1hY2hpbmVzIHRoYXQgcmVxdWlyZSBzaXR0aW5nIG9yIGxheWluZyBkb3duLmAsXG4gIGBQcmVwYXJlIHRvIHJldHVybiB0b21vcnJvdy5gLFxuICBgUHV0IGFsbCB0aGUgd2VpZ2h0cyB5b3UgYXJlIG5vdCB1c2luZyBiYWNrIG9uIHRoZSByYWNrLmAsXG4gIGBQdXQgeW91ciBwaG9uZSBhd2F5LmAsXG4gIGBRdWl0IHNtb2tpbmcsIHBlb3BsZSBjYW4ndCBjYXJlIGFib3V0IHlvdSBpZiB5b3UgZG9uJ3QgY2FyZSBhYm91dCB5b3Vyc2VsZi5gLFxuICBgUmUtaHlkcmF0ZS5gLFxuICBgUmVzcGVjdCBwZXJzb25hbCBzcGFjZS5gLFxuICBgU3RvcCBQcmV0ZW5kaW5nLmAsXG4gIGBTdG9wIFJlc3RpbmcuYCxcbiAgYFN0b3Agc3dpbmdpbmcgeW91ciB3ZWlnaHRzLmAsXG4gIGBUaGUgYXV0aGVudGljaXR5IG9mIHlvdXIgd29ya291dCwgcmVwcmVzZW50cyB0aGUgYXV0aGVudGljaXR5IG9mIHlvdXIgbWluZC5gLFxuICBgVGhlcmUgaXMgbm8gc3VjaCB0aGluZyBhcyBzZXRzIGFuZCByZXBzLCB5b3VyIGJvZHkgd2lsbCBub3QgcmVjZWl2ZSB0aGUgc2lnbmFsIHRvIGFkYXB0IHlvdXIgbXVzY3VsYXR1cmUgaWYgeW91IGp1c3Qgd29ya291dCBmb3IgdHdvIG1pbnV0ZXMgYW4gaG91ci5gLFxuICBgVGhlcmUgaXMgbm8gdGltZSwgdXNlIGJvdGggb2YgeW91ciBoYW5kcyBhdCB0aGUgc2FtZSB0aW1lLCBkb24ndCBtYWtlIGl0IGVhc3ksIG1ha2UgaXQgZGlmZmljdWx0OyB0ZWxsIHlvdXIgYm9keSB0aGF0IHlvdSBuZWVkIG1vcmUuYCxcbiAgYFRoZSB0cml1bXBoIGlzIG5vdCBpbiB3aGF0IHlvdSBsb29rIGxpa2UsIGFueWJvZHkgY2FuIGhhdmUgc3VyZ2VyeSwgdGhlIHRyaXVtcGggaXMgYSBzaGFtIC0gYmVjb21lIGEgcHJvdGVjdG9yIG9mIHlvdXIgeWVhcnMsIGtlZXBlciBvZiB5b3VyIHlvdXRoLmAsXG4gIGBXb3JraW5nIG91dCB3aXRob3V0IG1vbnRocyBvZiB0cmFpbmluZyBhbmQgcHJlcGFyYXRpb25zIGxlYWRpbmcgdXAgdG8geW91ciB3b3Jrb3V0LCB3aWxsIHJlc3VsdCBpbiBsZXRoYXJneSwgZGVoeWRyYXRpb24sIGluanVyeSwgYW5kIGRlYXRoLmAsXG4gIGBZb3UgbXVzdCBhY2NlcHQgdGhlIHJlc3BvbnNpYmlsaXR5IGZvciB5b3VyIG93biBleGlzdGVuY2UsIG9ubHkgeW91IGNhbiBmaXggeW91ciBwcm9ibGVtcy5gLFxuICBgWW91IG11c3QgdHJhaW4gZm9yIHNldmVyYWwgbW9udGhzLCBwcmlvciB0byB5b3VyIGZpcnN0IHJlYWwgd29ya291dC5gLFxuXTtcblxuZnVuY3Rpb24gbWFpbigpe1xuICByZXR1cm4gYWR2aWNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmFuZG9taXplIHRoZSBvcmRlciBvZiB0aGUgZWxlbWVudHMgaW4gYSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyciAtIFRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvcHldIC0gU2V0cyBpZiBzaG91bGQgcmV0dXJuIGEgc2h1ZmZsZWQgY29weSBvZiB0aGUgZ2l2ZW4gYXJyYXkuIEJ5IGRlZmF1bHQgaXQncyBhIGZhbHN5IHZhbHVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMucm5nXSAtIFNwZWNpZmllcyBhIGN1c3RvbSByYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZShhcnIsIG9wdGlvbnMpIHtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2h1ZmZsZSBleHBlY3QgYW4gYXJyYXkgYXMgcGFyYW1ldGVyLicpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGNvbGxlY3Rpb24gPSBhcnIsXG4gICAgICBsZW4gPSBhcnIubGVuZ3RoLFxuICAgICAgcm5nID0gb3B0aW9ucy5ybmcgfHwgTWF0aC5yYW5kb20sXG4gICAgICByYW5kb20sXG4gICAgICB0ZW1wO1xuXG4gIGlmIChvcHRpb25zLmNvcHkgPT09IHRydWUpIHtcbiAgICBjb2xsZWN0aW9uID0gYXJyLnNsaWNlKCk7XG4gIH1cblxuICB3aGlsZSAobGVuKSB7XG4gICAgcmFuZG9tID0gTWF0aC5mbG9vcihybmcoKSAqIGxlbik7XG4gICAgbGVuIC09IDE7XG4gICAgdGVtcCA9IGNvbGxlY3Rpb25bbGVuXTtcbiAgICBjb2xsZWN0aW9uW2xlbl0gPSBjb2xsZWN0aW9uW3JhbmRvbV07XG4gICAgY29sbGVjdGlvbltyYW5kb21dID0gdGVtcDtcbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufTtcblxuLyoqXG4gKiBQaWNrIG9uZSBvciBtb3JlIHJhbmRvbSBlbGVtZW50cyBmcm9tIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyciAtIFRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucGlja3NdIC0gU3BlY2lmaWVzIGhvdyBtYW55IHJhbmRvbSBlbGVtZW50cyB5b3Ugd2FudCB0byBwaWNrLiBCeSBkZWZhdWx0IGl0IHBpY2tzIDEuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5ybmddIC0gU3BlY2lmaWVzIGEgY3VzdG9tIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuc2h1ZmZsZS5waWNrID0gZnVuY3Rpb24oYXJyLCBvcHRpb25zKSB7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NodWZmbGUucGljaygpIGV4cGVjdCBhbiBhcnJheSBhcyBwYXJhbWV0ZXIuJyk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5nID0gb3B0aW9ucy5ybmcgfHwgTWF0aC5yYW5kb20sXG4gICAgICBwaWNrcyA9IG9wdGlvbnMucGlja3MgfHwgMTtcblxuICBpZiAodHlwZW9mIHBpY2tzID09PSAnbnVtYmVyJyAmJiBwaWNrcyAhPT0gMSkge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoLFxuICAgICAgICBjb2xsZWN0aW9uID0gYXJyLnNsaWNlKCksXG4gICAgICAgIHJhbmRvbSA9IFtdLFxuICAgICAgICBpbmRleDtcblxuICAgIHdoaWxlIChwaWNrcyAmJiBsZW4pIHtcbiAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihybmcoKSAqIGxlbik7XG4gICAgICByYW5kb20ucHVzaChjb2xsZWN0aW9uW2luZGV4XSk7XG4gICAgICBjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBsZW4gLT0gMTtcbiAgICAgIHBpY2tzIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbTtcbiAgfVxuXG4gIHJldHVybiBhcnJbTWF0aC5mbG9vcihybmcoKSAqIGFyci5sZW5ndGgpXTtcbn07XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gc2h1ZmZsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUsIHVwcGVyLCBwcmVjaXNpb249Mil7XG5cbiAgbGV0IHBjdCA9ICgxMDAuMCAqIHZhbHVlIC8gdXBwZXIpIC8gMTAwO1xuXG4gIHBjdCA9IHBjdC50b1ByZWNpc2lvbihwcmVjaXNpb24pO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCBwY3QgKVxuXG59XG4iLCI8c2NyaXB0PlxuXG5pbXBvcnQgb2N0aWNvbnMgZnJvbSAnb2N0aWNvbnMnO1xuaW1wb3J0IGJvZHlidWlsZGluZ0FkdmljZSBmcm9tICdib2R5YnVpbGRpbmctYWR2aWNlJztcblxuaW1wb3J0IHNodWZmbGVBcnJheSBmcm9tICdzaHVmZmxlLWFycmF5JztcbmltcG9ydCBjYWxjdWxhdGVQZXJjZW50IGZyb20gJ2NhbGN1bGF0ZS1wZXJjZW50JztcblxuaW1wb3J0IHNwcmludGZKcyBmcm9tIFwic3ByaW50Zi1qc1wiO1xuY29uc3QgcHJpbnRmID0gc3ByaW50ZkpzLnNwcmludGY7XG5cbmxldCB0aXRsZSA9ICdCb2R5YnVpbGRpbmcgQWR2aWNlJztcblxuLypcbiAgMCBpcyBQcmVmZXJlbmNlIFZpZXdcbiAgMSBpcyBBcHBsaWNhdGlvbiBWaWV3XG4gIEFkZCBhcyBtYW55IGFzIG5lZWRlZC5cbiovXG5sZXQgdmlldyA9IDE7IC8vIGNvbnRyb2xsZWQgdmlhIFVJIGljb25zXG5cbi8vIFByZWZlcmVuY2VzXG5sZXQgZHVyYXRpb24gPSAyNTsgLy8gc2Vjb25kcywgdXNlciBjYW4gc2V0IHRoaXMgaW4gUHJlZmVyZW5jZXNcblxuLy8gVGltZXIgU3RhdGUsIGF1dG9tYXRpY2FsbHkgY29tcHV0ZWRcbmxldCBlbGFwc2VkID0gMDsgLy8gZWxhcHNlZCBzZWNvbmRzXG5sZXQgcHJvZ3Jlc3MgPSAwOyAvLyBob3cgbG9uZyBhZHZpY2UgYXBwZWFyZWQgdGh1cyBmYXJcbmxldCBwcm9jZXNzaW9uID0gMDsgLy8gb3ZlcmFsbCBwcm9ncmVzcyB0aHJvdWdoIHRoZSBjdXJyZW50IHNodWZmbGUuXG5cbi8vIERhdGEgU3RhdGVcbmxldCBsaXN0ID0gc2h1ZmZsZUFycmF5KGJvZHlidWlsZGluZ0FkdmljZSgpKTtcbmxldCBpbmRleCA9IDA7XG5cbi8vIEluaXRpYWxpemVcbmxldCBhZHZpY2UgPSBsaXN0W2luZGV4XTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcblxuICBpZihlbGFwc2VkID49IGR1cmF0aW9uKXtcbiAgICAvLyBBZHZhbmNlXG4gICAgbmV4dCgpO1xuICB9XG4gIGVsYXBzZWQrKzsgLy8gZWFjaCBzZWNvbmQgZWxhcHNlZCBpcyBpbmNyZW1lbnRlZFxuICBwcm9ncmVzcyA9IGNhbGN1bGF0ZVBlcmNlbnQoZWxhcHNlZCwgZHVyYXRpb24pICogMTAwO1xuICBwcm9jZXNzaW9uID0gcHJpbnRmKCclLjBmJyxjYWxjdWxhdGVQZXJjZW50KGluZGV4KzEsIGxpc3QubGVuZ3RoKSoxMDApXG59LCAxMDAwKVxuXG5mdW5jdGlvbiBuZXh0KCl7XG5cbiAgLy8gUmVzZXQgVGltZXIgU3RhdGVcbiAgZWxhcHNlZCA9IDA7XG4gIHByb2dyZXNzID0gMDtcblxuICAvLyBQZXJmb3JtIEluZGV4IExvZ2ljXG4gIGluZGV4Kys7XG4gIGlmKGluZGV4KzE+bGlzdC5sZW5ndGgpe1xuICAgIC8vIEVuZCBvZiBsaXN0LCByZS1zaHVmZmxlLCBhbmQgcmVzZXQgaW5kZXguXG4gICAgbGlzdCA9IHNodWZmbGVBcnJheShib2R5YnVpbGRpbmdBZHZpY2UoKSk7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgLy8gU2V0IEFkdmljZVxuICBhZHZpY2UgPSBsaXN0W2luZGV4XTtcblxufVxuXG5cbjwvc2NyaXB0PlxuXG5cblxueyNpZiB2aWV3ID09IDB9XG5cbiAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1kYXJrIHNoYWRvd1wiIHN0eWxlPVwibWluLWhlaWdodDogMjNyZW07XCIgPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBsZWFkXCI+XG4gICAgICBQcmVmZXJlbmNlc1xuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tdGV4dCBidG4tc20gYm9yZGVyIGJvcmRlci1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIiBvbjpjbGljaz1cIntlID0+IHZpZXcgPSAxfVwiPntAaHRtbCBvY3RpY29ucy5jaGVja2xpc3QudG9TVkcoeyBcImNsYXNzXCI6IFwiZmlsbC13aGl0ZVwiIH0pfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHktM1wiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInNtYWxsXCIgZm9yPVwiZHVyYXRpb25cIj5NZXNzYWdlIER1cmF0aW9uPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImR1cmF0aW9uXCIgbWluPVwiMTBcIiBtYXg9XCIxMjBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGJpbmQ6dmFsdWU9e2R1cmF0aW9ufSBwbGFjZWhvbGRlcj1cInNlY29uZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJkdXJhdGlvbi1hZGRvblwiPnNlY29uZHM8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHQgc21hbGwgdGV4dC1pbmZvXCI+XG4gICAgICBEYXRhYmFzZSBjb250YWlucyB7bGlzdC5sZW5ndGh9IGl0ZW1zLiBDdXJyZW50IHNodWZmbGUgcHJvZ3Jlc3Mge3Byb2Nlc3Npb259JS5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG57OmVsc2UgaWYgdmlldyA9PSAxfVxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgYmctZGFyayBzaGFkb3dcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDIzcmVtO1wiID5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBsZWFkXCI+XG4gICAgICB7dGl0bGV9XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10ZXh0IGJ0bi1zbSBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIG9uOmNsaWNrPVwie2UgPT4gdmlldyA9IDB9XCI+e0BodG1sIG9jdGljb25zLmdlYXIudG9TVkcoeyBcImNsYXNzXCI6IFwiZmlsbC13aGl0ZVwiIH0pfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIFx0PGRpdiBjbGFzcz1cImNhcmQtYm9keSBweS0zXCI+XG5cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHBiLTQgdGV4dC13YXJuaW5nIGxlYWQgdGV4dC1jZW50ZXIgcHQtNFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIG9uOmNsaWNrPXtuZXh0fT57YWR2aWNlfTwvcD5cblxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgc3R5bGU9XCJoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogYmxhY2s7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgYmctd2FybmluZ1wiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPVwid2lkdGg6IHtwcm9ncmVzc30lO1wiIGFyaWEtdmFsdWVub3c9XCJ7cHJvZ3Jlc3N9XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG10LTFcIiBzdHlsZT1cImhlaWdodDogMXB4OyBiYWNrZ3JvdW5kOiBibGFjaztcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zZWNvbmRhcnlcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOiB7cHJvY2Vzc2lvbn0lO1wiIGFyaWEtdmFsdWVub3c9XCJ7cHJvY2Vzc2lvbn1cIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gIFx0PC9kaXY+XG4gIDwvZGl2PlxuXG57L2lmfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0KXtcblxuICBpZihsaXN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gIGlmKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICB2YXIgbWluID0gMDtcbiAgdmFyIG1heCA9IGxpc3QubGVuZ3RoLTE7XG5cbiAgdmFyIGlkeCA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICBcbiAgcmV0dXJuIGxpc3RbaWR4XTtcblxufVxuIiwiPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgb25lT2YgZnJvbSAnb25lb2YnO1xubGV0IHZpZGVvcyA9IFtdO1xubGV0IHZpZGVvID0gJyc7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy9UaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxufVxuXG5vbk1vdW50KGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwieW91dHViZS5qc29uXCIpO1xuICB2aWRlb3MgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHZpZGVvID0gb25lT2YodmlkZW9zKTtcblxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgdmlkZW8gPSBvbmVPZih2aWRlb3MpO1xuICB9LCBnZXRSYW5kb21JbnRJbmNsdXNpdmUoMTAqMTAwMCwyMCoxMDAwKSlcblxufSlcblxuXG5cbjwvc2NyaXB0PlxuXG5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY2FyZCBiZy1kYXJrIHRleHQtd2hpdGUgc2hhZG93XCI+XG48ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAge3ZpZGVvLnRpdGxlfVxuPC9kaXY+XG4gIDxhIGhyZWY9XCJ7dmlkZW8udXJsfVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInt2aWRlby5pbWFnZX1cIiBjbGFzcz1cImNhcmQtaW1nLWJvdHRvbVwiIGFsdD1cInt2aWRlby50aXRsZX1cIj48L2E+XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XG5leHBvcnQgbGV0IHRpdGxlID0gJ1ByZWZlcmVuY2VzIENhcmQnO1xuXG5pbXBvcnQgb2N0aWNvbnMgZnJvbSAnb2N0aWNvbnMnO1xuXG5cbi8qXG4gIDAgaXMgUHJlZmVyZW5jZSBWaWV3XG4gIDEgaXMgQXBwbGljYXRpb24gVmlld1xuKi9cbmxldCB2aWV3ID0gMTsgLy8gY29udHJvbGxlZCB2aWEgVUkgaWNvbnNcblxuPC9zY3JpcHQ+XG5cblxuXG57I2lmIHZpZXcgPT0gMH1cblxuICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsgc2hhZG93XCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAyM3JlbTtcIiA+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGxlYWRcIj5cbiAgICAgIFByZWZlcmVuY2VzXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10ZXh0IGJ0bi1zbSBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIG9uOmNsaWNrPVwie2UgPT4gdmlldyA9IDF9XCI+e0BodG1sIG9jdGljb25zLmNoZWNrbGlzdC50b1NWRyh7IFwiY2xhc3NcIjogXCJmaWxsLXdoaXRlXCIgfSl9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweS0zXCI+XG5cbiAgICA8c2xvdCBuYW1lPVwicHJlZmVyZW5jZXNcIj5cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgIFByZWZlcmVuY2VzIEVtcHR5XG4gICAgICA8L3A+XG5cdFx0PC9zbG90PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG57OmVsc2UgaWYgdmlldyA9PSAxfVxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgYmctZGFyayBzaGFkb3dcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDIzcmVtO1wiID5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBsZWFkXCI+XG4gICAgICB7dGl0bGV9XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi10ZXh0IGJ0bi1zbSBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIG9uOmNsaWNrPVwie2UgPT4gdmlldyA9IDB9XCI+e0BodG1sIG9jdGljb25zLmdlYXIudG9TVkcoeyBcImNsYXNzXCI6IFwiZmlsbC13aGl0ZVwiIH0pfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIFx0PGRpdiBjbGFzcz1cImNhcmQtYm9keSBweS0zXCI+XG5cbiAgICA8c2xvdCBuYW1lPVwiYXBwbGljYXRpb25cIj5cbiAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgIEFwcGxpY2F0aW9uIEVtcHR5XG4gICAgICA8L3A+XG5cdFx0PC9zbG90PlxuXG4gIFx0PC9kaXY+XG4gIDwvZGl2PlxuXG57L2lmfVxuIiwiPHNjcmlwdD5cblxuICBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbiAgaW1wb3J0IG9jdGljb25zIGZyb20gJ29jdGljb25zJztcblxuXHRpbXBvcnQgUHJlZmVyZW5jZUNhcmQgZnJvbSAnLi4vY29udGFpbmVycy9QcmVmZXJlbmNlQ2FyZC5zdmVsdGUnO1xuXG4gIC8vIFByZWZlcmVuY2VzXG5cbiAgbGV0IGl0ZW1zID0gMztcblxuICAvLyBBcHBsaWNhdGlvblxuXG4gIGxldCBuZXdzID0gW1xuICAgIHtkYXRlOicyMDIwLTAxLTIzVDAxOjA3OjM4Ljc3M1onLCBodG1sOidUZXN0aW5nIGNvbXBvbmVudCBjb21wb3NpdGlvbiBieSBnZW5lcmFsaXppbmcgQm9keWJ1aWxkaW5nIEFkdmljZSBQcmVmZXJlbmNlcyBQYW5lIGludG8gYSBnZW5lcmljIHJldXNhYmxlIGNvbnRhaW5lci4gRW1wbG95aW5nIHRoZSBjb250YWluZXIgaW4gTmV3cyBjb21wb25lbnQuJ30sXG4gICAge2RhdGU6JzIwMjAtMDEtMjJUMDM6Mzg6MTkuNjgwWicsIGh0bWw6J0ltcHJvdmVkIHRoZSByYW5kb21uZXNzIG9mIEJvZHlidWlsZGluZyBBZHZpY2UuIEl0ZW1zIGJlZ2luIHJlcGVhdGluZyBhZnRlciBhYm91dCA4NCBzZWxlY3Rpb25zLiBJIGFkZGVkIGEgdGlueSBsaXR0bGUgc3ViLXByb2dyZXNzIGJhciB0byBzaG93IHdoZW4gdGhlIHN5c3RlbSB3aWxsIHJlc2V0LCByZS1zaHVmZmxlLCBhbmQgYmVnaW4gcGFyYWRpbmcgdGhlIG5ld2x5IHJlLXNodWZmbGVkIGxpc3QuJ30sXG4gICAge2RhdGU6JzIwMjAtMDEtMjJUMDM6MjM6MTkuNjgwWicsIGh0bWw6J0FkZGVkIFByZWZlcmVuY2VzIFBhbmUgdG8gQm9keWJ1aWxkaW5nIEFkdmljZS4gQm9keWJ1aWxkaW5nIEFkdmljZSBpcyBtZWFudCB0byBzZXJ2ZSBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciBtb3JlIGNvbXBsZXggY29tcG9uZW50cy4nfSxcbiAgICB7ZGF0ZTonMjAyMC0wMS0yMlQwMzoyMjoxOS42ODBaJywgaHRtbDonVGVzdGluZyA8YSBocmVmPVwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5vY3RpY29uczwvYT4uIEkgbG92ZSB0aGUgJyArIG9jdGljb25zLnNxdWlycmVsLnRvU1ZHKHsgXCJjbGFzc1wiOiBcImZpbGwtd2hpdGVcIiwgXCJ3aWR0aFwiOiA0NSB9KSArICcgaWNvbi4nfSxcbiAgXTtcblxuICBmdW5jdGlvbiByZWNhbGN1bGF0ZVRpbWVzdGFtcHMoKXtcbiAgICBuZXdzID0gbmV3c1xuICAgICAgLm1hcChpPT57IGkuYWdvID0gbW9tZW50KGkuZGF0ZSkuZnJvbShtb21lbnQoKSk7IHJldHVybiBpOyB9KVxuICAgICAgLm1hcChpPT57IGkuaHRtbCA9IG9jdGljb25zLnNxdWlycmVsLnRvU1ZHKHsgXCJjbGFzc1wiOiBcImZpbGwtd2hpdGUgc2hha2VcIiB9KSArICcgJyArIGkuaHRtbDsgcmV0dXJuIGk7IH0pXG4gIH1cblxuICAvLyBUaW1lcnNcblxuICBzZXRJbnRlcnZhbChyZWNhbGN1bGF0ZVRpbWVzdGFtcHMsNjAwMDApXG5cbiAgLy8gSW5pdGlhbGl6YXRpb25cblxuICByZWNhbGN1bGF0ZVRpbWVzdGFtcHMoKTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7fVxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTt9XG4gIDIwJSwgNDAlLCA2MCUsIDgwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO31cbn1cblxuLnNoYWtlOmhvdmVyIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xufVxuXG48L3N0eWxlPlxuXG5cblxuXG48UHJlZmVyZW5jZUNhcmQgdGl0bGU9XCJOZXdzXCI+XG5cblx0PGRpdiBzbG90PVwicHJlZmVyZW5jZXNcIiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJzbWFsbFwiIGZvcj1cImR1cmF0aW9uXCI+TmV3cyBJdGVtczwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiZHVyYXRpb25cIiBtaW49XCIyXCIgbWF4PVwiMTBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGJpbmQ6dmFsdWU9e2l0ZW1zfSBwbGFjZWhvbGRlcj1cIm51bWJlciBvZiBpdGVtcyB0byBkaXNwbGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImR1cmF0aW9uLWFkZG9uXCI+aXRlbXM8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cblx0PC9kaXY+XG5cblx0PGRpdiBzbG90PVwiYXBwbGljYXRpb25cIiBjbGFzcz1cImNhcmQtdGV4dFwiIHN0eWxlPVwibWF4LWhlaWdodDogMThyZW07IG92ZXJmbG93LXk6IGF1dG87XCI+XG4gICAgeyNlYWNoIG5ld3MgYXMgaXRlbSwgaX1cbiAgICAgIHsjaWYgaTxpdGVtc31cbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1pbmZvIHNtYWxsXCI+XG4gICAgICAgICAge0BodG1sIGl0ZW0uaHRtbH0gJm1pZGRvdDsge2l0ZW0uYWdvfVxuICAgICAgICA8L3A+XG4gICAgICB7L2lmfVxuICAgIHsvZWFjaH1cblx0PC9kaXY+XG5cbjwvUHJlZmVyZW5jZUNhcmQ+XG4iLCI8c2NyaXB0PlxuXG5pbXBvcnQgb2N0aWNvbnMgZnJvbSAnb2N0aWNvbnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmltcG9ydCBTb25nQmVhdENhbGN1bGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Tb25nQmVhdENhbGN1bGF0b3Iuc3ZlbHRlJztcbmltcG9ydCBTb25nVGVtcG9DaGFuZ2VDYWxjdWxhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvU29uZ1RlbXBvQ2hhbmdlQ2FsY3VsYXRvci5zdmVsdGUnO1xuaW1wb3J0IFNlYXNvbkNhbGN1bGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFzb25DYWxjdWxhdG9yLnN2ZWx0ZSc7XG5pbXBvcnQgQm9keWJ1aWxkaW5nQWR2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQm9keWJ1aWxkaW5nQWR2aWNlLnN2ZWx0ZSc7XG5pbXBvcnQgUmFuZG9tVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9SYW5kb21WaWRlby5zdmVsdGUnO1xuaW1wb3J0IE5ld3MgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzLnN2ZWx0ZSc7XG5cblxuY29uc3QgdmlkZW9zID0ge1xuICBjcmVhdGVkOiAnMjAyMC0wMS0xN1QwMTo1Nzo0OS43MzBaJyxcbiAgbW9kaWZpZWQ6ICcyMDIwLTAxLTE3VDAxOjU3OjQ5LjczMFonLFxuICBjaGFuZ2VkOiAncmVjZW50bHknLFxuICBuYW1lOiAnVmlkZW8gTGlicmFyeScsXG4gIHRleHQ6ICdDYXQgUGVhIFZpZGVvIExpYnJhcnkgY29udGFpbnMgaHVuZHJlZHMgb2YgaW50ZXJlc3RpbmcsIGluZm9ybWF0aXZlLCBhbmQgZWR1Y2F0aW9uYWwgdmlkZW9zLicsXG4gIHVybDogJy92aWRlbz9wPTAmaT04JyxcbiAgaW1nOiAndmlkZW9zLnBuZycsXG59XG5cblxuXG5cblxubGV0IG5ld3MgPSBbXG4gIHtkYXRlOicyMDIwLTAxLTIyVDAzOjM4OjE5LjY4MFonLCBodG1sOidJbXByb3ZlZCB0aGUgcmFuZG9tbmVzcyBvZiBCb2R5YnVpbGRpbmcgQWR2aWNlLiBJdGVtcyBiZWdpbiByZXBlYXRpbmcgYWZ0ZXIgYWJvdXQgODQgc2VsZWN0aW9ucy4gSSBhZGRlZCBhIHRpbnkgbGl0dGxlIHN1Yi1wcm9ncmVzcyBiYXIgdG8gc2hvdyB3aGVuIHRoZSBzeXN0ZW0gd2lsbCByZXNldCwgcmUtc2h1ZmZsZSwgYW5kIGJlZ2luIHBhcmFkaW5nIHRoZSBuZXdseSByZS1zaHVmZmxlZCBsaXN0Lid9LFxuICB7ZGF0ZTonMjAyMC0wMS0yMlQwMzoyMzoxOS42ODBaJywgaHRtbDonQWRkZWQgUHJlZmVyZW5jZXMgUGFuZSB0byBCb2R5YnVpbGRpbmcgQWR2aWNlLiBCb2R5YnVpbGRpbmcgQWR2aWNlIGlzIG1lYW50IHRvIHNlcnZlIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIG1vcmUgY29tcGxleCBjb21wb25lbnRzLid9LFxuICB7ZGF0ZTonMjAyMC0wMS0yMlQwMzoyMjoxOS42ODBaJywgaHRtbDonVGVzdGluZyA8YSBocmVmPVwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5vY3RpY29uczwvYT4uIEkgbG92ZSB0aGUgJyArIG9jdGljb25zLnNxdWlycmVsLnRvU1ZHKHsgXCJjbGFzc1wiOiBcImZpbGwtd2hpdGVcIiwgXCJ3aWR0aFwiOiA0NSB9KSArICcgaWNvbi4nfSxcbl07XG5cbmZ1bmN0aW9uIHJlY2FsY3VsYXRlVGltZXN0YW1wcygpe1xuICB2aWRlb3MuY2hhbmdlZCA9IG1vbWVudCh2aWRlb3MubW9kaWZpZWQpLmZyb20obW9tZW50KCkpXG4gIG5ld3MgPSBuZXdzLm1hcChpPT57IGkuYWdvID0gbW9tZW50KGkuZGF0ZSkuZnJvbShtb21lbnQoKSk7IHJldHVybiBpOyB9KVxufVxuc2V0SW50ZXJ2YWwocmVjYWxjdWxhdGVUaW1lc3RhbXBzLDYwMDAwKVxucmVjYWxjdWxhdGVUaW1lc3RhbXBzKCk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5DYXQgUGVhPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuXG5cblxuXG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtMiByb3ctY29scy14bC00XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHBiLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1kYXJrIHNoYWRvd1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCJ7dmlkZW9zLnVybH1cIj48aW1nIHNyYz1cInt2aWRlb3MuaW1nfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwie3ZpZGVvcy5uYW1lfVwiPjwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtM1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10ZXh0XCI+e3ZpZGVvcy5uYW1lfTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt2aWRlb3MudGV4dH08L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwie3ZpZGVvcy51cmx9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57dmlkZW9zLm5hbWV9ICZyYXF1bzs8L2E+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5VcGRhdGVkIHt2aWRlb3MuY2hhbmdlZH08L3NtYWxsPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHBiLTNcIj5cbiAgICA8U2Vhc29uQ2FsY3VsYXRvci8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHBiLTNcIj5cbiAgICA8U29uZ0JlYXRDYWxjdWxhdG9yLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wgcGItM1wiPlxuICAgIDxTb25nVGVtcG9DaGFuZ2VDYWxjdWxhdG9yLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wgcGItM1wiPlxuICAgIDxCb2R5YnVpbGRpbmdBZHZpY2UvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbCBwYi0zXCI+XG4gICAgPE5ld3MvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbCBwYi0zXCI+XG4gICAgPFJhbmRvbVZpZGVvLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wgcGItM1wiPlxuICAgIDxSYW5kb21WaWRlby8+XG4gICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6WyJkYXRhIiwidGhpcyIsInJlcXVpcmUiLCJzcHJpbnRmSnMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUN6QjtBQUNBLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUNqRCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDeEQsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsWUFBWSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsWUFBWSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsWUFBWSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDeEMsWUFBWSxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDckMsWUFBWSxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDaEMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdkMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FB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RSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDO0FBQ0EsWUFBWSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsWUFBWSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEQsWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsUUFBUSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLFFBQVEsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxRQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsU0FBUztBQUNULFFBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakMsWUFBWSxXQUFXLENBQUMs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LEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQztBQUNBLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7QUFDNUMsUUFBUSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEUsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7QUFDOUMsUUFBUSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWTtBQUM1QyxRQUFRLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9ELEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFF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LE9BQU8sRUFBRSxFQUFFO0FBQzdCLFlBQVksT0FBTyxHQUFHLENBQUM7QUFDdkIsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QztBQUNBLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUM3QixZQUFZLE9BQU8sR0FBRyxDQUFDO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBLFFBQVEsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFDaEU7QUFDQSxRQUFRLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEM7QUFDQSxRQUFRLFFBQVEsS0FBSztBQUNyQixZQUFZLEtBQUssTUFBTSxFQUFFLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDcEUsWUFBWSxLQUFLLE9BQU8sRUFBRSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDaEUsWUFBWSxLQUFLLFNBQVMsRUFBRSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0FBQ3RFLFlBQVksS0FBSyxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNO0FBQy9ELFlBQVksS0FBSyxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNO0FBQy9ELFlBQVksS0FBSyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNO0FBQzlELFlBQVksS0FBSyxLQUFLLEVBQUUs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Q0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0FBQ3JELFFBQVEsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQzFDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0FBQ3RELFFBQVEsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO0FBQzNDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO0FBQ3ZELFFBQVEsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQzVDLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBSSxhQUFhLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDO0FBQ0EsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUNkLElBQUksS0FBSyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFDMUQsUUFBUSxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVDLEtBQUs7QUFDTDtBQUNBLElBQUksU0FBUyxPQUFPLENB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LFNBQVE7QUFDdEMsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7QUFDdkMsUUFBUSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBTztBQUNuQyxRQUFRLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxTQUFRO0FBQ3JDLEFBU0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7MkJDaklRLEdBQU0sSUFBQyxNQUFNLGtCQUFFLEdBQVUsTUFBQyxDQUFDLElBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBaEMsR0FBTSxJQUFDLE1BQU0sa0JBQUUsR0FBVSxNQUFDLENBQUMsSUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EzRm5DLGVBQWUsQ0FBQyxXQUFX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LFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQywwQkFBMEIs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
