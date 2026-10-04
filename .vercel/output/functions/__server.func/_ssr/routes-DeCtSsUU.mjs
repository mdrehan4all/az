import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, c as Clock3, i as Play, l as CalendarPlus, n as Volume2, o as MapPin, s as Download, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DeCtSsUU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wedding = {
	year: 2026,
	bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
	bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
	bride: {
		name: "Arzoo Firdos",
		relation: "D/O Haji Moulana Shakil Ahmed Habibi",
		address: "Dinemar Danga, Garerdhar, Gondalpara"
	},
	groom: {
		name: "Md Arman",
		relation: "S/O Sattar Khan",
		address: "BT Road, Parsad Nagar, Belgharia"
	},
	venue: {
		title: "At Own Residence",
		lines: ["Dinemar Danga, Garerdhar", "Gondalpara"]
	},
	events: [
		{
			name: "Milad-un-Nabi",
			dateLabel: "24 November",
			weekday: "Tuesday",
			time: "3:00 PM",
			start: "20261124T150000",
			end: "20261124T163000"
		},
		{
			name: "Haldi",
			dateLabel: "24 November",
			weekday: "Tuesday",
			time: "5:00 PM",
			start: "20261124T170000",
			end: "20261124T190000"
		},
		{
			name: "Mehendi",
			dateLabel: "24 November",
			weekday: "Tuesday",
			time: "9:00 PM",
			start: "20261124T210000",
			end: "20261124T233000"
		},
		{
			name: "Nikah",
			dateLabel: "25 November",
			weekday: "Wednesday",
			time: "9:00 PM",
			start: "20261125T210000",
			end: "20261125T233000"
		},
		{
			name: "Reception",
			dateLabel: "29 November",
			weekday: "Sunday",
			time: "9:00 PM",
			start: "20261129T210000",
			end: "20261129T233000"
		}
	]
};
function googleCalendarUrl(event) {
	const details = encodeURIComponent(`${wedding.bride.name} weds ${wedding.groom.name}\n${wedding.venue.title}\n${wedding.venue.lines.join(", ")}`);
	const location = encodeURIComponent(`${wedding.venue.title}, ${wedding.venue.lines.join(", ")}`);
	return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${event.name} — ${wedding.bride.name} & ${wedding.groom.name}`)}&dates=${event.start}/${event.end}&details=${details}&location=${location}`;
}
function Ornament({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "180",
		height: "18",
		viewBox: "0 0 180 18",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 9H72",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 9H172",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 2.5 L97 9 L90 15.5 L83 9 Z",
				fill: "currentColor"
			})
		]
	});
}
function CrescentMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "36",
		height: "36",
		viewBox: "0 0 36 36",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M22.2 6.2a12.4 12.4 0 1 0 7.6 21.4A13.2 13.2 0 1 1 22.2 6.2Z",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "27.4",
			cy: "9.4",
			r: "1.5",
			fill: "currentColor"
		})]
	});
}
function InvitationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 opacity-[0.14]",
				style: {
					backgroundImage: "url(/wedding/mandala.jpg)",
					backgroundSize: "920px",
					backgroundPosition: "center top",
					backgroundRepeat: "no-repeat"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Couple, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebrations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venue, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blessing, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-dvh items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/wedding/lanterns.jpg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/wedding/atmosphere.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-veil" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-4 border border-gold/35 sm:inset-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 border border-gold/15 sm:inset-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-6 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrescentMark, { className: "rise-1 mb-5 text-gold-bright ornament-glow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-1 font-arabic text-[1.7rem] leading-snug text-ivory sm:text-[2rem]",
						lang: "ar",
						dir: "rtl",
						children: wedding.bismillah
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-2 mt-3 max-w-sm font-display text-sm italic text-ivory-soft sm:text-base",
						children: wedding.bismillahEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "rise-3 my-7 text-gold-bright" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-3 font-formal text-[11px] font-semibold uppercase tracking-[0.42em] text-gold",
						children: "You are invited"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-4 mt-5 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl",
						children: wedding.bride.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-4 mt-3 font-script text-4xl text-gold-bright",
						children: "weds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "rise-5 mt-2 font-display text-5xl italic leading-[1.05] text-ivory sm:text-6xl",
						children: wedding.groom.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-6 mt-8 font-formal text-[11px] uppercase tracking-[0.38em] text-gold",
						children: "November 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#celebrations",
						className: "rise-6 mt-10 inline-flex min-h-11 items-center justify-center border border-gold/50 px-6 font-formal text-[11px] uppercase tracking-[0.28em] text-gold-bright transition-colors duration-200 hover:bg-gold hover:text-bg",
						children: "View celebrations"
					})
				]
			})
		]
	});
}
function Couple() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-3xl px-6 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold",
				children: "The blessed union"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mx-auto my-6 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-4xl italic text-ivory",
							children: wedding.bride.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-base text-muted",
							children: wedding.bride.relation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-sm italic text-ivory-soft",
							children: wedding.bride.address
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-4xl text-gold-bright",
						children: "weds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-4xl italic text-ivory",
							children: wedding.groom.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-base text-muted",
							children: wedding.groom.relation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-sm italic text-ivory-soft",
							children: wedding.groom.address
						})
					] })
				]
			})
		]
	});
}
function Celebrations() {
	const grouped = groupEvents();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "celebrations",
		className: "relative bg-bg-deep/80 px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold",
					children: "The celebrations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mx-auto my-6 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-8 text-left",
					children: grouped.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 font-formal text-[11px] font-semibold uppercase tracking-[0.28em] text-gold",
						children: [
							group.weekday,
							" · ",
							group.dateLabel
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-gold/15 overflow-hidden border border-gold/20 bg-surface/70",
						children: group.items.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex items-center gap-3 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-xl italic text-ivory sm:text-2xl",
									children: event.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-center gap-2 font-formal text-[11px] uppercase tracking-[0.16em] text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
										className: "size-3.5 shrink-0 text-gold",
										"aria-hidden": true
									}), event.time]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: googleCalendarUrl(event),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex size-11 shrink-0 items-center justify-center border border-gold/30 text-gold transition-colors duration-150 hover:bg-gold hover:text-bg",
								"aria-label": `Add ${event.name} to Google Calendar`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "size-4" })
							})]
						}, event.name))
					})] }, group.dateLabel))
				})
			]
		})
	});
}
function groupEvents() {
	const map = /* @__PURE__ */ new Map();
	for (const event of wedding.events) {
		const existing = map.get(event.dateLabel);
		if (existing) existing.items.push(event);
		else map.set(event.dateLabel, {
			dateLabel: event.dateLabel,
			weekday: event.weekday,
			items: [event]
		});
	}
	return [...map.values()];
}
function Venue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/wedding/courtyard.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 venue-veil" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "mb-4 size-6 text-gold",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold",
						children: wedding.venue.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "my-6 text-gold-bright" }),
					wedding.venue.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl italic leading-snug text-ivory",
						children: line
					}, line)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-sm font-display text-base italic text-ivory-soft",
						children: "All functions will be held at the family residence. The honour of your presence is requested."
					})
				]
			})
		]
	});
}
function Film() {
	const videoRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = videoRef.current;
		if (!el) return;
		const onPlay = () => setPlaying(true);
		const onPause = () => setPlaying(false);
		el.addEventListener("play", onPlay);
		el.addEventListener("pause", onPause);
		return () => {
			el.removeEventListener("play", onPlay);
			el.removeEventListener("pause", onPause);
		};
	}, []);
	function togglePlay() {
		const el = videoRef.current;
		if (!el) return;
		if (el.paused) el.play();
		else el.pause();
	}
	function toggleMute() {
		const el = videoRef.current;
		if (!el) return;
		el.muted = !el.muted;
		setMuted(el.muted);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "film",
		className: "bg-bg px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-formal text-[11px] font-semibold uppercase tracking-[0.4em] text-gold",
					children: "Wedding film"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mx-auto my-6 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-8 font-display text-lg italic text-ivory-soft",
					children: "A cinematic invitation for Arzoo Firdos & Md Arman"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "film-shadow relative overflow-hidden border border-gold/25 bg-bg-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						className: "aspect-[9/16] w-full bg-bg-deep object-cover",
						playsInline: true,
						controls: false,
						poster: "/wedding/card-bg.jpg",
						preload: "metadata",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/wedding/invitation.mp4",
							type: "video/mp4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "film-veil absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-3 pb-3 pt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: togglePlay,
								className: "inline-flex min-h-11 min-w-11 items-center justify-center border border-gold/40 bg-bg/50 text-ivory transition-transform duration-150 active:scale-[0.96]",
								"aria-label": playing ? "Pause invitation video" : "Play invitation video",
								children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleMute,
								className: "inline-flex min-h-11 min-w-11 items-center justify-center border border-gold/40 bg-bg/50 text-ivory transition-transform duration-150 active:scale-[0.96]",
								"aria-label": muted ? "Unmute" : "Mute",
								children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/wedding/invitation.mp4",
								download: "Arzoo-Arman-Nikah-Invitation.mp4",
								className: "inline-flex min-h-11 items-center gap-2 border border-gold/50 bg-gold px-4 font-formal text-[10px] uppercase tracking-[0.22em] text-bg transition-transform duration-150 active:scale-[0.96]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Save video"]
							})
						]
					})]
				})
			]
		})
	});
}
function Blessing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative px-6 pb-16 pt-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto mb-10 max-w-xs" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl italic text-ivory-soft",
				children: "May Allah bless this union with love, faith, and barakah."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-arabic text-2xl text-gold-bright",
				lang: "ar",
				dir: "rtl",
				children: "آمين"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-formal text-[10px] uppercase tracking-[0.32em] text-muted",
				children: [
					wedding.bride.name,
					" · ",
					wedding.groom.name,
					" · ",
					wedding.year
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationPage, {});
}
//#endregion
export { Home as component };
