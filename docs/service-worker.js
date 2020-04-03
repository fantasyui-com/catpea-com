!function(){"use strict";const r=["client/index.dfff1a8d.js","client/video.79d8736e.js","client/big.a2fecb63.js","client/daw.551d4b84.js","client/client.a590fb2d.js","client/Icon.80dde63b.js","client/SongMachine.1b50acb0.js","client/client.44ba3051.js","client/warrior.043ee852.js","client/News.9c2e68be.js","client/index.0673134c.js"].concat(["service-worker-index.html","album-covers/hash-bang-slash.png","album-covers/hash-bang-slash.xcf","album-covers/nowhereman.png","album-covers/poor-fellows.jpg","album-covers/poor-fellows.xcf","book.json","cats/cat-01.kra","cats/cat-01.png","cats/cat-02.kra","cats/cat-02.png","cats/cat-03.kra","cats/cat-03.png","daw.jpg","favicon.png","global.css","icons/alert.svg","icons/archive.svg","icons/arrow-both.svg","icons/arrow-down.svg","icons/arrow-left.svg","icons/arrow-right.svg","icons/arrow-small-down.svg","icons/arrow-small-left.svg","icons/arrow-small-right.svg","icons/arrow-small-up.svg","icons/arrow-up.svg","icons/beaker.svg","icons/bell.svg","icons/bold.svg","icons/book.svg","icons/bookmark.svg","icons/briefcase.svg","icons/broadcast.svg","icons/browser.svg","icons/bug.svg","icons/calendar.svg","icons/check.svg","icons/checklist.svg","icons/chevron-down.svg","icons/chevron-left.svg","icons/chevron-right.svg","icons/chevron-up.svg","icons/circle-slash.svg","icons/circuit-board.svg","icons/clippy.svg","icons/clock.svg","icons/cloud-download.svg","icons/cloud-upload.svg","icons/code.svg","icons/comment-discussion.svg","icons/comment.svg","icons/credit-card.svg","icons/dash.svg","icons/dashboard.svg","icons/database.svg","icons/dependent.svg","icons/desktop-download.svg","icons/device-camera-video.svg","icons/device-camera.svg","icons/device-desktop.svg","icons/device-mobile.svg","icons/diff-added.svg","icons/diff-ignored.svg","icons/diff-modified.svg","icons/diff-removed.svg","icons/diff-renamed.svg","icons/diff.svg","icons/ellipsis.svg","icons/eye-closed.svg","icons/eye.svg","icons/file-binary.svg","icons/file-code.svg","icons/file-directory.svg","icons/file-media.svg","icons/file-pdf.svg","icons/file-submodule.svg","icons/file-symlink-directory.svg","icons/file-symlink-file.svg","icons/file-zip.svg","icons/file.svg","icons/flame.svg","icons/fold-down.svg","icons/fold-up.svg","icons/fold.svg","icons/gear.svg","icons/gift.svg","icons/gist-secret.svg","icons/gist.svg","icons/git-branch.svg","icons/git-commit.svg","icons/git-compare.svg","icons/git-merge.svg","icons/git-pull-request.svg","icons/github-action.svg","icons/globe.svg","icons/grabber.svg","icons/graph.svg","icons/heart-outline.svg","icons/heart.svg","icons/history.svg","icons/home.svg","icons/horizontal-rule.svg","icons/hubot.svg","icons/inbox.svg","icons/infinity.svg","icons/info.svg","icons/internal-repo.svg","icons/issue-closed.svg","icons/issue-opened.svg","icons/issue-reopened.svg","icons/italic.svg","icons/jersey.svg","icons/kebab-horizontal.svg","icons/kebab-vertical.svg","icons/key.svg","icons/keyboard.svg","icons/law.svg","icons/light-bulb.svg","icons/line-arrow-down.svg","icons/line-arrow-left.svg","icons/line-arrow-right.svg","icons/line-arrow-up.svg","icons/link-external.svg","icons/link.svg","icons/list-ordered.svg","icons/list-unordered.svg","icons/location.svg","icons/lock.svg","icons/logo-gist.svg","icons/logo-github.svg","icons/mail-read.svg","icons/mail.svg","icons/mark-github.svg","icons/markdown.svg","icons/megaphone.svg","icons/mention.svg","icons/milestone.svg","icons/mirror.svg","icons/mortar-board.svg","icons/mute.svg","icons/no-newline.svg","icons/north-star.svg","icons/note.svg","icons/octoface.svg","icons/organization.svg","icons/package.svg","icons/paintcan.svg","icons/pencil.svg","icons/person.svg","icons/pin.svg","icons/play.svg","icons/plug.svg","icons/plus-small.svg","icons/plus.svg","icons/primitive-dot-stroke.svg","icons/primitive-dot.svg","icons/primitive-square.svg","icons/project.svg","icons/pulse.svg","icons/question.svg","icons/quote.svg","icons/radio-tower.svg","icons/reply.svg","icons/repo-clone.svg","icons/repo-force-push.svg","icons/repo-forked.svg","icons/repo-pull.svg","icons/repo-push.svg","icons/repo-template-private.svg","icons/repo-template.svg","icons/repo.svg","icons/report.svg","icons/request-changes.svg","icons/rocket.svg","icons/rss.svg","icons/ruby.svg","icons/saved.svg","icons/screen-full.svg","icons/screen-normal.svg","icons/search.svg","icons/server.svg","icons/settings.svg","icons/shield-check.svg","icons/shield-lock.svg","icons/shield-x.svg","icons/shield.svg","icons/sign-in.svg","icons/sign-out.svg","icons/skip.svg","icons/smiley.svg","icons/squirrel.svg","icons/star.svg","icons/stop.svg","icons/sync.svg","icons/tag.svg","icons/tasklist.svg","icons/telescope.svg","icons/terminal.svg","icons/text-size.svg","icons/three-bars.svg","icons/thumbsdown.svg","icons/thumbsup.svg","icons/tools.svg","icons/trashcan.svg","icons/triangle-down.svg","icons/triangle-left.svg","icons/triangle-right.svg","icons/triangle-up.svg","icons/unfold.svg","icons/unmute.svg","icons/unsaved.svg","icons/unverified.svg","icons/verified.svg","icons/versions.svg","icons/watch.svg","icons/workflow-all.svg","icons/workflow.svg","icons/x.svg","icons/zap.svg","logo-192.png","logo-512.png","manifest.json","memes/01.jpg","memes/02.mp4","memes/03.mp4","research/daw.jpg","research/gui1.png","research/piano.png","research/unselections.png","samples/rza/.tmp/00dbab16df8f3bf9b1559e32b139f56923f592fc.wav","samples/rza/.tmp/04e938821ca043c821b39d1abdeeaa2623fa8611.wav","samples/rza/.tmp/123668fd36e854461cc1a5b34551e98cd162ba2d.wav","samples/rza/.tmp/130c110c5d99a6c484afb29c06dec20047f9c8fd.wav","samples/rza/.tmp/16a3307717ff4974787145c054171dc4ada8669f.wav","samples/rza/.tmp/16fd6ae36200cc85da243ce4e5b929ef77c5cf30.wav","samples/rza/.tmp/1e5bb21d766235982ff453001379d75accb142c5.wav","samples/rza/.tmp/256e82e4b4972641b26162ac91d262fb0f7ff8bf.wav","samples/rza/.tmp/294599aaec34f023e6149e90a6c8e0523df4c85f.wav","samples/rza/.tmp/2ae533bd30909247b701bbc1f7b1563349947282.wav","samples/rza/.tmp/2fc89124a9451bd9b51d22cfff794933b3b18364.wav","samples/rza/.tmp/35354ded0aadc635419c7b6b61748bb1e363946b.wav","samples/rza/.tmp/384902fe4cace75f37acdfaecd6cc4fd2137ecad.wav","samples/rza/.tmp/4b157822e8b5d272fb7aa29009baf9ec9d4af3ae.wav","samples/rza/.tmp/4e56575f8bd27f4a07cf4d791f66b3986c6e8dfe.wav","samples/rza/.tmp/5107c3a6c20e3133f593fac3e44b8ca534b8e395.wav","samples/rza/.tmp/53580c41ee4c9b9312d0b1952b3e62ac9e138ff2.wav","samples/rza/.tmp/55e11e95238bab9e8f60a7b377e6adf3766d9ede.wav","samples/rza/.tmp/635b71f627705027d819fe87d0ed7028189d826d.wav","samples/rza/.tmp/721727714259f2c9f1fa8035a261e888fcca7c91.wav","samples/rza/.tmp/85606cf0cc23b9bd86b883ca4e4b74c5a23605d1.wav","samples/rza/.tmp/871b0cf227272c39a77fc3a754ea092d0b65223b.wav","samples/rza/.tmp/8c950d4f8ae18441cf065db741e3e1c5570f6218.wav","samples/rza/.tmp/98b6b793420ef22139daa30d46b8d98d0f4116b7.wav","samples/rza/.tmp/9c4a05d1e181deda1de078ebdb99adcc19ada4fe.wav","samples/rza/.tmp/9f9ce4b24573bcc5aa95ab4ec9cedf22ac743905.wav","samples/rza/.tmp/a3bafb69b3c80c9c6ccaba3745d0e6112f463d79.wav","samples/rza/.tmp/aab83ca9600e185be123c7dff74f9934af55e825.wav","samples/rza/.tmp/ab7ec6dcc5fdebaadea68deb0e4567a6de4192ea.wav","samples/rza/.tmp/ac16b9241b329a8144113591018b8bbf485c8a05.wav","samples/rza/.tmp/b81c18280aed479809dca9c9b87614d6b5b1db4d.wav","samples/rza/.tmp/bebdc685f75f3b10b821f945cee5240c265596af.wav","samples/rza/.tmp/c0beffaadd0187c2a5108e44459e0e81d6a7b2ff.wav","samples/rza/.tmp/c13bf775cbec7fbcdc8f459cb045860f57660251.wav","samples/rza/.tmp/c91112945ad9744b4b0d440ce871fdf3d08947e7.wav","samples/rza/.tmp/cbdad385aedd04d9e71c2bc308f944ab0cb4b34a.wav","samples/rza/.tmp/dc39c0a1b5c1cd83b77703cff2f1900e4fc6e508.wav","samples/rza/.tmp/dc4473aa907a2bf917e1b91bc537192e356620af.wav","samples/rza/.tmp/df6e58fecc39a3985a6350d158131e4d599dba73.wav","samples/rza/.tmp/e0fb86394e0258b50fb2a8f4c238a324e64c27b7.wav","samples/rza/.tmp/e7547271491320afd6e32a3d2f41f629eab91022.wav","samples/rza/.tmp/edf3184e2e8aa84176c2497d40311402a3b7ea75.wav","samples/rza/.tmp/f1ec8695896bad0c68a9da0f9e4a482f28aca4e0.wav","samples/rza/.tmp/f3ef81d821c76794a5e52acf3412441d94c19cce.wav","samples/rza/.tmp/fabf3c5cc58607bf2d5eb91021e53a4773c4fb23.wav","samples/rza/00dbab16df8f3bf9b1559e32b139f56923f592fc.mp3","samples/rza/04e938821ca043c821b39d1abdeeaa2623fa8611.mp3","samples/rza/123668fd36e854461cc1a5b34551e98cd162ba2d.mp3","samples/rza/130c110c5d99a6c484afb29c06dec20047f9c8fd.mp3","samples/rza/16a3307717ff4974787145c054171dc4ada8669f.mp3","samples/rza/16fd6ae36200cc85da243ce4e5b929ef77c5cf30.mp3","samples/rza/1e5bb21d766235982ff453001379d75accb142c5.mp3","samples/rza/256e82e4b4972641b26162ac91d262fb0f7ff8bf.mp3","samples/rza/294599aaec34f023e6149e90a6c8e0523df4c85f.mp3","samples/rza/2ae533bd30909247b701bbc1f7b1563349947282.mp3","samples/rza/2fc89124a9451bd9b51d22cfff794933b3b18364.mp3","samples/rza/35354ded0aadc635419c7b6b61748bb1e363946b.mp3","samples/rza/384902fe4cace75f37acdfaecd6cc4fd2137ecad.mp3","samples/rza/4b157822e8b5d272fb7aa29009baf9ec9d4af3ae.mp3","samples/rza/4e56575f8bd27f4a07cf4d791f66b3986c6e8dfe.mp3","samples/rza/5107c3a6c20e3133f593fac3e44b8ca534b8e395.mp3","samples/rza/53580c41ee4c9b9312d0b1952b3e62ac9e138ff2.mp3","samples/rza/55e11e95238bab9e8f60a7b377e6adf3766d9ede.mp3","samples/rza/635b71f627705027d819fe87d0ed7028189d826d.mp3","samples/rza/721727714259f2c9f1fa8035a261e888fcca7c91.mp3","samples/rza/85606cf0cc23b9bd86b883ca4e4b74c5a23605d1.mp3","samples/rza/871b0cf227272c39a77fc3a754ea092d0b65223b.mp3","samples/rza/8c950d4f8ae18441cf065db741e3e1c5570f6218.mp3","samples/rza/98b6b793420ef22139daa30d46b8d98d0f4116b7.mp3","samples/rza/9c4a05d1e181deda1de078ebdb99adcc19ada4fe.mp3","samples/rza/9f9ce4b24573bcc5aa95ab4ec9cedf22ac743905.mp3","samples/rza/a3bafb69b3c80c9c6ccaba3745d0e6112f463d79.mp3","samples/rza/aab83ca9600e185be123c7dff74f9934af55e825.mp3","samples/rza/ab7ec6dcc5fdebaadea68deb0e4567a6de4192ea.mp3","samples/rza/ac16b9241b329a8144113591018b8bbf485c8a05.mp3","samples/rza/b81c18280aed479809dca9c9b87614d6b5b1db4d.mp3","samples/rza/bebdc685f75f3b10b821f945cee5240c265596af.mp3","samples/rza/c0beffaadd0187c2a5108e44459e0e81d6a7b2ff.mp3","samples/rza/c13bf775cbec7fbcdc8f459cb045860f57660251.mp3","samples/rza/c91112945ad9744b4b0d440ce871fdf3d08947e7.mp3","samples/rza/cbdad385aedd04d9e71c2bc308f944ab0cb4b34a.mp3","samples/rza/dc39c0a1b5c1cd83b77703cff2f1900e4fc6e508.mp3","samples/rza/dc4473aa907a2bf917e1b91bc537192e356620af.mp3","samples/rza/df6e58fecc39a3985a6350d158131e4d599dba73.mp3","samples/rza/e0fb86394e0258b50fb2a8f4c238a324e64c27b7.mp3","samples/rza/e7547271491320afd6e32a3d2f41f629eab91022.mp3","samples/rza/edf3184e2e8aa84176c2497d40311402a3b7ea75.mp3","samples/rza/f1ec8695896bad0c68a9da0f9e4a482f28aca4e0.mp3","samples/rza/f3ef81d821c76794a5e52acf3412441d94c19cce.mp3","samples/rza/fabf3c5cc58607bf2d5eb91021e53a4773c4fb23.mp3","samples/salamander/A0.mp3","samples/salamander/A0.ogg","samples/salamander/A1.mp3","samples/salamander/A1.ogg","samples/salamander/A2.mp3","samples/salamander/A2.ogg","samples/salamander/A3.mp3","samples/salamander/A3.ogg","samples/salamander/A4.mp3","samples/salamander/A4.ogg","samples/salamander/A5.mp3","samples/salamander/A5.ogg","samples/salamander/A6.mp3","samples/salamander/A6.ogg","samples/salamander/A7.mp3","samples/salamander/A7.ogg","samples/salamander/C1.mp3","samples/salamander/C1.ogg","samples/salamander/C2.mp3","samples/salamander/C2.ogg","samples/salamander/C3.mp3","samples/salamander/C3.ogg","samples/salamander/C4.mp3","samples/salamander/C4.ogg","samples/salamander/C5.mp3","samples/salamander/C5.ogg","samples/salamander/C6.mp3","samples/salamander/C6.ogg","samples/salamander/C7.mp3","samples/salamander/C7.ogg","samples/salamander/C8.mp3","samples/salamander/C8.ogg","samples/salamander/Ds1.mp3","samples/salamander/Ds1.ogg","samples/salamander/Ds2.mp3","samples/salamander/Ds2.ogg","samples/salamander/Ds3.mp3","samples/salamander/Ds3.ogg","samples/salamander/Ds4.mp3","samples/salamander/Ds4.ogg","samples/salamander/Ds5.mp3","samples/salamander/Ds5.ogg","samples/salamander/Ds6.mp3","samples/salamander/Ds6.ogg","samples/salamander/Ds7.mp3","samples/salamander/Ds7.ogg","samples/salamander/Fs1.mp3","samples/salamander/Fs1.ogg","samples/salamander/Fs2.mp3","samples/salamander/Fs2.ogg","samples/salamander/Fs3.mp3","samples/salamander/Fs3.ogg","samples/salamander/Fs4.mp3","samples/salamander/Fs4.ogg","samples/salamander/Fs5.mp3","samples/salamander/Fs5.ogg","samples/salamander/Fs6.mp3","samples/salamander/Fs6.ogg","samples/salamander/Fs7.mp3","samples/salamander/Fs7.ogg","samples/salamander/README","sciurine.mp3","videos.png","warrior/images/3dscan.png","warrior/images/ableton.png","warrior/images/arrow-alt-circle-left.svg","warrior/images/arrow-alt-circle-right.svg","warrior/images/arrow-alt-circle-up.svg","warrior/images/arrow-alt-circle-up.svg.1","warrior/images/astronomer.jpg","warrior/images/aui.jpg","warrior/images/aybabtu.png","warrior/images/bandcamp.png","warrior/images/bangalore.png","warrior/images/bears.jpg","warrior/images/bed.jpg","warrior/images/black-hole.jpg","warrior/images/bri.jpg","warrior/images/buhr1.png","warrior/images/buhr2.png","warrior/images/cannon.jpg","warrior/images/cannon.png","warrior/images/chris-mccandless.png","warrior/images/circle.jpg","warrior/images/coin.png","warrior/images/commodore.gif","warrior/images/courage-calls.jpg","warrior/images/deck.jpg","warrior/images/demon.jpg","warrior/images/demoscene.jpg","warrior/images/doubt.jpg","warrior/images/drumkit.jpg","warrior/images/dyesub0.jpg","warrior/images/dyesub1.jpg","warrior/images/dyesub1.png","warrior/images/dyesub2.jpg","warrior/images/dyesub2b.jpg","warrior/images/dyesub3.jpg","warrior/images/dyesub4.jpg","warrior/images/editing.png","warrior/images/explorer.jpg","warrior/images/fall.jpg","warrior/images/freerk-wieringa.png","warrior/images/fui.jpg","warrior/images/fui1.jpg","warrior/images/fui2.jpg","warrior/images/fui3.jpg","warrior/images/fui4.jpg","warrior/images/fui5.png","warrior/images/galahad.jpg","warrior/images/genius.png","warrior/images/gentleman.jpg","warrior/images/geos.gif","warrior/images/glider.png","warrior/images/gliders.gif","warrior/images/gliders2.gif","warrior/images/god-speed.jpg","warrior/images/gpa.png","warrior/images/graphite-paper.jpg","warrior/images/honor-code.jpg","warrior/images/lady.png","warrior/images/leather.png","warrior/images/leather2.png","warrior/images/librem5.jpg","warrior/images/lightbox.jpg","warrior/images/list-alt.svg","warrior/images/marcus-aurelius.jpg","warrior/images/minimalism.png","warrior/images/mona1.jpg","warrior/images/mona2.jpg","warrior/images/mona3.jpg","warrior/images/mona4.jpg","warrior/images/mountain.jpg","warrior/images/msdos.jpg","warrior/images/music-player.jpg","warrior/images/nocturne.png","warrior/images/pi.jpg","warrior/images/pixelart-product-1.jpg","warrior/images/pixelart-product-2.jpg","warrior/images/pixelart-product-3.jpg","warrior/images/pixelart-product-4.jpg","warrior/images/pixelart0.gif","warrior/images/pixelart1.png","warrior/images/pixelart2.png","warrior/images/pixelart3.gif","warrior/images/ponoko-cases.jpg","warrior/images/ponoko-clocks.jpg","warrior/images/ponoko-wallet.jpg","warrior/images/ponoko.jpg","warrior/images/ponoko.png","warrior/images/portable-monitor.jpg","warrior/images/principia.png","warrior/images/projector-phone.jpg","warrior/images/projector.jpg","warrior/images/school-of-athens.jpg","warrior/images/school.png","warrior/images/screen-projector.jpg","warrior/images/section8.png","warrior/images/shapeways.png","warrior/images/short-history.jpg","warrior/images/sig-doke.jpg","warrior/images/sig-kiptoe.jpg","warrior/images/sig-tank.jpg","warrior/images/skeuomorphism.png","warrior/images/snapshot.jpg","warrior/images/splice.png","warrior/images/startup-school.png","warrior/images/stereo-master.jpg","warrior/images/superheroes.jpg","warrior/images/talitha-halley.png","warrior/images/the-dises.jpg","warrior/images/the-runaway.jpg","warrior/images/thorgal.png","warrior/images/timer.png","warrior/images/tomoe-gozen.jpg","warrior/images/tr.jpg","warrior/images/uios.gif","warrior/images/valkyries.jpg","warrior/images/video-play.png","warrior/images/wanderer.jpg","warrior/images/wemo-schedule.jpg","warrior/images/whatif.jpg","warrior/images/win1.png","warrior/images/winners-dont-use-drugs.jpg","warrior/images/youtube--Myg8OpSUxI.jpg","warrior/images/youtube--U5zA7gNPKo.jpg","warrior/images/youtube--UOMvxh4MYU.jpg","warrior/images/youtube--WZ0EPe_Nok.jpg","warrior/images/youtube--YFbxFq6Zr8.jpg","warrior/images/youtube--YFbxFq6Zr8.png","warrior/images/youtube--jRREn6ifEQ.jpg","warrior/images/youtube--v7wqo-CHPI.jpg","warrior/images/youtube-.jpg","warrior/images/youtube-0D1aA7QJVJ0.jpg","warrior/images/youtube-0JWePnHeniM.jpg","warrior/images/youtube-0NPO3lEcPyU.jpg","warrior/images/youtube-0bWK5ES3lTE.jpg","warrior/images/youtube-0fkKnfk4k40.jpg","warrior/images/youtube-0o2whtCJw8I.jpg","warrior/images/youtube-0tEnnvZbYek.jpg","warrior/images/youtube-0zjhSlJN-Qw.jpg","warrior/images/youtube-1-OdJmAefOY.jpg","warrior/images/youtube-1183SVMyJVI.jpg","warrior/images/youtube-15aqFQQVBWU.jpg","warrior/images/youtube-16y1AkoZkmQ.jpg","warrior/images/youtube-1B6O2lW7Zjo.jpg","warrior/images/youtube-1FLThlB_OWc.jpg","warrior/images/youtube-1czqejkbvO8.jpg","warrior/images/youtube-1oTUupME0-M.jpg","warrior/images/youtube-1ooKsv_SX4Y.jpg","warrior/images/youtube-1sNfuuTS6q8.jpg","warrior/images/youtube-1scj5sotD-E.jpg","warrior/images/youtube-1uIzS1uCOcE.jpg","warrior/images/youtube-20b2JWz2TfE.jpg","warrior/images/youtube-2197wgDecZk.jpg","warrior/images/youtube-22YeW55POBs.jpg","warrior/images/youtube-23jVmKXk2I0.jpg","warrior/images/youtube-2B-XwPjn9YY.jpg","warrior/images/youtube-2G8LAiHSCAs.jpg","warrior/images/youtube-2JsKwyRFiYY.jpg","warrior/images/youtube-2LTT2ChOh-k.jpg","warrior/images/youtube-2RVyE1wlH7E.jpg","warrior/images/youtube-2Yt6raj-S1M.jpg","warrior/images/youtube-2rU2Juual18.jpg","warrior/images/youtube-31lUwuhE8pc.jpg","warrior/images/youtube-36GT2zI8lVA.jpg","warrior/images/youtube-3Kq1MIfTWCE.jpg","warrior/images/youtube-3h1P58BIa2s.jpg","warrior/images/youtube-3nQ6c7WIudE.jpg","warrior/images/youtube-3rzkXQmX36E.jpg","warrior/images/youtube-40YIIaF1qiw.jpg","warrior/images/youtube-449lCaylrIo.jpg","warrior/images/youtube-4RPtJ9UyHS0.jpg","warrior/images/youtube-4dYxV3tqTUc.jpg","warrior/images/youtube-4gb-hnbHbjw.jpg","warrior/images/youtube-51mxBkwwSB8.jpg","warrior/images/youtube-54S8rpAgYog.jpg","warrior/images/youtube-5GSHXC6fwq4.jpg","warrior/images/youtube-5RR4VXNX3jA.jpg","warrior/images/youtube-5XgBd6rjuDQ.jpg","warrior/images/youtube-5g2DxY1Rjag.jpg","warrior/images/youtube-5j8c2qlih0M.jpg","warrior/images/youtube-5nTuScU70As.jpg","warrior/images/youtube-60P7717-XOQ.jpg","warrior/images/youtube-63ksPvuzVuA.jpg","warrior/images/youtube-68jy3_ABvRo.jpg","warrior/images/youtube-6CfHaeQo6oU.jpg","warrior/images/youtube-6NzNs8FAudQ.jpg","warrior/images/youtube-6V6Gir1Dyfs.jpg","warrior/images/youtube-6WrhZsttinA.jpg","warrior/images/youtube-6gFyH_cKWjk.jpg","warrior/images/youtube-6umL3VjGX7c.jpg","warrior/images/youtube-7LXyClky6A8.jpg","warrior/images/youtube-7O7BMa9XGXE.jpg","warrior/images/youtube-7SFeCgoep1c.jpg","warrior/images/youtube-7lI8VgbocQg.jpg","warrior/images/youtube-7vhvnaWUZjE.jpg","warrior/images/youtube-7wtfhZwyrcc.jpg","warrior/images/youtube-826HMLoiE_o.jpg","warrior/images/youtube-85dhw7nulb4.jpg","warrior/images/youtube-85xPjTQYzWM.jpg","warrior/images/youtube-86356fRR1VY.jpg","warrior/images/youtube-88WOo4DIElY.jpg","warrior/images/youtube-8TNdihbV5go.jpg","warrior/images/youtube-8T_jwq9ph8k.jpg","warrior/images/youtube-8iYpxRXlboQ.jpg","warrior/images/youtube-8nEoZcZmgo8.jpg","warrior/images/youtube-8nt3edWLgIg.jpg","warrior/images/youtube-8rmSldhnSDc.jpg","warrior/images/youtube-918gdIdyu8Q.jpg","warrior/images/youtube-9FCsyK4aRXQ.jpg","warrior/images/youtube-9M4tdMsg3ts.jpg","warrior/images/youtube-9Pzz6rDMd8c.jpg","warrior/images/youtube-9S8ecyxO7Bw.jpg","warrior/images/youtube-9XzAgMe0WrI.jpg","warrior/images/youtube-9dZj33gr-yw.jpg","warrior/images/youtube-9uxE_r9kEE8.jpg","warrior/images/youtube-A7lyE3qevrQ.jpg","warrior/images/youtube-A8_ApkdygvU.jpg","warrior/images/youtube-ARZzKXPc6FM.jpg","warrior/images/youtube-ASbijZRU2Uo.jpg","warrior/images/youtube-Apr2B7Ix0zs.jpg","warrior/images/youtube-Aqn363Z1f5A.jpg","warrior/images/youtube-AtZxg-OC5ho.jpg","warrior/images/youtube-AvxevjgKBfo.jpg","warrior/images/youtube-AyogyD7vXbw.jpg","warrior/images/youtube-B8Y146v8HxE.jpg","warrior/images/youtube-B9cVgScVlkk.jpg","warrior/images/youtube-BB6LM9IYcco.jpg","warrior/images/youtube-BFs3GC58O5U.jpg","warrior/images/youtube-BGeT8IyKd2M.jpg","warrior/images/youtube-BVL3Y1uJY68.jpg","warrior/images/youtube-B_tjKYvEziI.jpg","warrior/images/youtube-BdXtjNSDi4s.jpg","warrior/images/youtube-Bg_Q7KYWG1g.jpg","warrior/images/youtube-Bwiln7v0fdc.jpg","warrior/images/youtube-Byhsobb6S2A.jpg","warrior/images/youtube-C-HX9Y1X61Q.jpg","warrior/images/youtube-CdXp15Lbx1c.jpg","warrior/images/youtube-CpaFX6Ei0nU.jpg","warrior/images/youtube-D1Nq086QB1Q.jpg","warrior/images/youtube-DBqBH1wejbw.jpg","warrior/images/youtube-DJXM8HjyVSo.jpg","warrior/images/youtube-DJrdV0ZQWxQ.jpg","warrior/images/youtube-DQ1QUK8KLH0.jpg","warrior/images/youtube-DR2dRWfr7m0.jpg","warrior/images/youtube-DdVOwNyomw4.jpg","warrior/images/youtube-DjxhenAHyGk.jpg","warrior/images/youtube-Dr15j1TOBEU.jpg","warrior/images/youtube-DzSnvxejenY.jpg","warrior/images/youtube-E2OL19GbtbY.jpg","warrior/images/youtube-EEFMVIfl2UY.jpg","warrior/images/youtube-EF3oi9Ra7IU.jpg","warrior/images/youtube-EIC1J0IgCRg.jpg","warrior/images/youtube-ET0yaa8PB_o.jpg","warrior/images/youtube-EY62kFvlbFg.jpg","warrior/images/youtube-EcUD_6dKJ7k.jpg","warrior/images/youtube-EknD3KRtgDk.jpg","warrior/images/youtube-EszGIvRdgTE.jpg","warrior/images/youtube-F18eozyUKoM.jpg","warrior/images/youtube-FDFy7_DM_qQ.jpg","warrior/images/youtube-FFMz8JRg8Y8.jpg","warrior/images/youtube-Fah-LJJaPWg.jpg","warrior/images/youtube-FhzNSPiqO0M.jpg","warrior/images/youtube-FyNR_LgiWEc.jpg","warrior/images/youtube-G3SVAN9TPbo.jpg","warrior/images/youtube-GEPhLqwKo6g.jpg","warrior/images/youtube-GHoTciAH8Uo.jpg","warrior/images/youtube-GLFAURAIyXQ.jpg","warrior/images/youtube-GeSjkVFtb9k.jpg","warrior/images/youtube-GhYwHcp-UV8.jpg","warrior/images/youtube-H3TF-hI7zKc.jpg","warrior/images/youtube-H4WtpO8vfTU.jpg","warrior/images/youtube-HIXwkduDI3w.jpg","warrior/images/youtube-HLfJlK4xPYo.jpg","warrior/images/youtube-HgOJ0aShUuc.jpg","warrior/images/youtube-HxX75eYf598.jpg","warrior/images/youtube-I8kuhv0FcTE.jpg","warrior/images/youtube-ICBP-7x7Chc.jpg","warrior/images/youtube-IKHhqTG9hsc.jpg","warrior/images/youtube-INHYR-3CdVM.jpg","warrior/images/youtube-IRydquzUHR0.jpg","warrior/images/youtube-IX3RLvS_J8o.jpg","warrior/images/youtube-IZaWP5PyGKc.jpg","warrior/images/youtube-Ibq1crh0OFA.jpg","warrior/images/youtube-IeABb8cwdUg.jpg","warrior/images/youtube-Io3sdAAcZLw.jpg","warrior/images/youtube-IpCdMGfducg.jpg","warrior/images/youtube-IvUU8joBb1Q.jpg","warrior/images/youtube-J35OLTyr0YI.jpg","warrior/images/youtube-J4l5rHNSq9s.jpg","warrior/images/youtube-JDC3SUK3axM.jpg","warrior/images/youtube-JDJRg8sowP4.jpg","warrior/images/youtube-JJL9S0J8-4k.jpg","warrior/images/youtube-JPar_nzAEL0.jpg","warrior/images/youtube-JW5PYVbc6ho.jpg","warrior/images/youtube-JZ6ZzJeWgpY.jpg","warrior/images/youtube-JgOi1YEU7TU.jpg","warrior/images/youtube-JoVQTPbD6UY.jpg","warrior/images/youtube-JqmIo-tUd48.jpg","warrior/images/youtube-KDPnWgVGuhc.jpg","warrior/images/youtube-KEkrWRHCDQU.jpg","warrior/images/youtube-KJ2fCBvrzIg.jpg","warrior/images/youtube-Kb7_E12FFLw.jpg","warrior/images/youtube-KbGV1KEXds4.jpg","warrior/images/youtube-KsqlnGMzMD4.jpg","warrior/images/youtube-Kt-Tb9gaOB8.jpg","warrior/images/youtube-L5n3V0VYGNg.jpg","warrior/images/youtube-L7EmLf4Xlq0.jpg","warrior/images/youtube-LCls16Tv8UE.jpg","warrior/images/youtube-LZZXJ3zCRDQ.jpg","warrior/images/youtube-LlC2OdnhIiQ.jpg","warrior/images/youtube-Lp7BL-UI0Rw.jpg","warrior/images/youtube-LwIyy1Fi-4Q.jpg","warrior/images/youtube-M6v2trBW4es.jpg","warrior/images/youtube-MB7wuCibXTo.jpg","warrior/images/youtube-MDL85fzdc1g.jpg","warrior/images/youtube-ML4tw_UzqZE.jpg","warrior/images/youtube-MTY1Kje0yLg.jpg","warrior/images/youtube-MTn1v5TGK_w.jpg","warrior/images/youtube-McDbh87cp6g.jpg","warrior/images/youtube-MpiknSRTmT4.jpg","warrior/images/youtube-Mtp65SWoyWc.jpg","warrior/images/youtube-Mwx3RvDWvDM.jpg","warrior/images/youtube-MyUG9lR0-cg.jpg","warrior/images/youtube-NE6jxVk7G-8.jpg","warrior/images/youtube-NVISfLc_z8c.jpg","warrior/images/youtube-NWH8N-BvhAw.jpg","warrior/images/youtube-NbZLdLfBQuk.jpg","warrior/images/youtube-Ntmhe4EUgpE.jpg","warrior/images/youtube-O8Da3PURP3U.jpg","warrior/images/youtube-OEqOgtmvkkE.jpg","warrior/images/youtube-OGeIzmu9DSA.jpg","warrior/images/youtube-ONiWmzrmfuY.jpg","warrior/images/youtube-OOG65rSM5fA.jpg","warrior/images/youtube-Op4g9McS3EY.jpg","warrior/images/youtube-Ow4fHTmd1mo.jpg","warrior/images/youtube-P1ww1IXRfTA.jpg","warrior/images/youtube-P5ipVlY5p7w.jpg","warrior/images/youtube-P5pm-FyovNk.jpg","warrior/images/youtube-PAQEOYYhp78.jpg","warrior/images/youtube-PTqqiDQP02I.jpg","warrior/images/youtube-PUv66718DII.jpg","warrior/images/youtube-PUwmA3Q0_OE.jpg","warrior/images/youtube-Pbx1MVThTfg.jpg","warrior/images/youtube-PkZNo7MFNFg.jpg","warrior/images/youtube-QHIocNOHd7A.jpg","warrior/images/youtube-QQskB2JJql4.jpg","warrior/images/youtube-QZZZ5wxUf3U.jpg","warrior/images/youtube-QmTR9XmteyA.jpg","warrior/images/youtube-QpeUEK_5Tb0.jpg","warrior/images/youtube-R6ijdDtOLLo.jpg","warrior/images/youtube-R9OCA6UFE-0.jpg","warrior/images/youtube-RAqv1KMNUUU.jpg","warrior/images/youtube-RBsY88Lir-A.jpg","warrior/images/youtube-RLtyhwFtXQA.jpg","warrior/images/youtube-Rp4G1pXx-cs.jpg","warrior/images/youtube-RuusmAGbnOo.jpg","warrior/images/youtube-RwK4NmQZe64.jpg","warrior/images/youtube-RzDMCVdPwnE.jpg","warrior/images/youtube-S-3YgWroCdo.jpg","warrior/images/youtube-S321TDbe9Bo.jpg","warrior/images/youtube-SFnMTHhKdkw.jpg","warrior/images/youtube-SLoukoBs8TE.jpg","warrior/images/youtube-SNxm2zkViKQ.jpg","warrior/images/youtube-SQ6H-Mz6hgw.jpg","warrior/images/youtube-SRWiqjgOyX0.jpg","warrior/images/youtube-SYSxOj6W7IQ.jpg","warrior/images/youtube-SdM5DQxfGM0.jpg","warrior/images/youtube-StdwWpbokcw.jpg","warrior/images/youtube-T0hQNR5fDKw.jpg","warrior/images/youtube-T2ezIjoqkrY.jpg","warrior/images/youtube-T5wTqFteQVY.jpg","warrior/images/youtube-TAcyA3OQ1v8.jpg","warrior/images/youtube-TLs4MGTTXRU.jpg","warrior/images/youtube-TMrtLsQbaok.jpg","warrior/images/youtube-TTCiOoedUco.jpg","warrior/images/youtube-TXU9UKajpVM.jpg","warrior/images/youtube-TgH9KXEQ0YU.jpg","warrior/images/youtube-TysXX7ZCV7g.jpg","warrior/images/youtube-U0fk5L1ifbo.jpg","warrior/images/youtube-U1Oy4X5Ni8Y.jpg","warrior/images/youtube-UF8uR6Z6KLc.jpg","warrior/images/youtube-UW3UxK4Tiqg.jpg","warrior/images/youtube-UdWCUr1FDqU.jpg","warrior/images/youtube-UuRxRGR3VpM.jpg","warrior/images/youtube-V7-JQcNm8W0.jpg","warrior/images/youtube-V7G-VHYg0Cc.jpg","warrior/images/youtube-VBTC1j5-Quo.jpg","warrior/images/youtube-VLAM6YxV_gA.jpg","warrior/images/youtube-VR4mlI834_Q.jpg","warrior/images/youtube-VS6EEUVZGLE.jpg","warrior/images/youtube-VaME4iHUhSE.jpg","warrior/images/youtube-Vn_m9WCd-88.jpg","warrior/images/youtube-Vu1s8LoLd7c.jpg","warrior/images/youtube-W76o_iG7Y7g.jpg","warrior/images/youtube-WMO6RRFBYMs.jpg","warrior/images/youtube-WQukIAVo000.jpg","warrior/images/youtube-WkklsnMaqiQ.jpg","warrior/images/youtube-WnoziOPQ3HA.jpg","warrior/images/youtube-Wqmu8glgE8U.jpg","warrior/images/youtube-XGK84Poeynk.jpg","warrior/images/youtube-XNHEFj7UCzg.jpg","warrior/images/youtube-XRJBk3Ue7uY.jpg","warrior/images/youtube-XXXXXXXXXXXXXXXXXX.jpg","warrior/images/youtube-Xb0HQSqkZHs.jpg","warrior/images/youtube-Xcjb1f1qbBA.jpg","warrior/images/youtube-Xz3Aw5qLcOs.jpg","warrior/images/youtube-YaDvRdLMkHs.jpg","warrior/images/youtube-YgDItoRdQ_Q.jpg","warrior/images/youtube-YgGzAKP_HuM.jpg","warrior/images/youtube-Yh7Px8ylmDI.jpg","warrior/images/youtube-YnU6vMVAdAE.jpg","warrior/images/youtube-YokKp3pwVFc.jpg","warrior/images/youtube-Yw1jlG__Eug.jpg","warrior/images/youtube-YzF5YnUuN4Q.jpg","warrior/images/youtube-Z0N1i7LwXXE.jpg","warrior/images/youtube-Z8ZShEgGt-4.jpg","warrior/images/youtube-ZATunybJm_4.jpg","warrior/images/youtube-ZAkzs4rgjOo.jpg","warrior/images/youtube-ZBZ0zGVADXY.jpg","warrior/images/youtube-ZLmLe1CClPk.jpg","warrior/images/youtube-ZoqgAy3h4OM.jpg","warrior/images/youtube-ZqzjAmPFND8.jpg","warrior/images/youtube-ZrGJLunpHC4.jpg","warrior/images/youtube-_4JtyLKDjXk.jpg","warrior/images/youtube-_8FUPrd5ra0.jpg","warrior/images/youtube-_9JBW-cCNP0.jpg","warrior/images/youtube-_CrgjmIt2Uo.jpg","warrior/images/youtube-_J4QPz52Sfo.jpg","warrior/images/youtube-_VpK2L47PwA.jpg","warrior/images/youtube-_m9OgQkdVqQ.jpg","warrior/images/youtube-_tc4K5Zujqw.jpg","warrior/images/youtube-_wbEu-KdPE8.jpg","warrior/images/youtube-a-Nsphndbj8.jpg","warrior/images/youtube-a1WFwsPOHmg.jpg","warrior/images/youtube-aOx109jPH60.jpg","warrior/images/youtube-a_n2Jm6-NpA.jpg","warrior/images/youtube-b40AGXWSX8Y.jpg","warrior/images/youtube-b694exl_oZo.jpg","warrior/images/youtube-b8hd4JC_zhY.jpg","warrior/images/youtube-bAqIkEZbVhI.jpg","warrior/images/youtube-bKwmrB5lWfg.jpg","warrior/images/youtube-bluffx6sB04.jpg","warrior/images/youtube-btPJPFnesV4.jpg","warrior/images/youtube-c0Z7KeNCi7g.jpg","warrior/images/youtube-c1F6EsGGa4U.jpg","warrior/images/youtube-c2tOp7OxyQ8.jpg","warrior/images/youtube-c6Eq2sI1NDY.jpg","warrior/images/youtube-c80mMzDknTI.jpg","warrior/images/youtube-cFEarBzelBs.jpg","warrior/images/youtube-cOF2LIAp9bw.jpg","warrior/images/youtube-cQGeOMCGh0U.jpg","warrior/images/youtube-d-7o9xYp7eE.jpg","warrior/images/youtube-d05KQ2ZC4Zc.jpg","warrior/images/youtube-d8s8e8JdGCc.jpg","warrior/images/youtube-dH2m2HZpHQM.jpg","warrior/images/youtube-dHg7twHeIrw.jpg","warrior/images/youtube-dM4W0Q0sOP0.jpg","warrior/images/youtube-dQRARRAhRLc.jpg","warrior/images/youtube-dw4w1UsOafQ.jpg","warrior/images/youtube-dxIPcbmo1_U.jpg","warrior/images/youtube-ekzjYZHs27E.jpg","warrior/images/youtube-ex-fXyRJTU8.jpg","warrior/images/youtube-f2izaEqs0pE.jpg","warrior/images/youtube-f5TSlm79zc0.jpg","warrior/images/youtube-fN-VtUBC7Ys.jpg","warrior/images/youtube-fbrQ8F-LQNs.jpg","warrior/images/youtube-fnkj6fD_i9o.jpg","warrior/images/youtube-g1uLrHq9TDg.jpg","warrior/images/youtube-g4a7_HH9Wbg.jpg","warrior/images/youtube-g4tbuu9GTaw.jpg","warrior/images/youtube-gYLaobn-YVM.jpg","warrior/images/youtube-g_utqeQALVE.jpg","warrior/images/youtube-gegNMYvY_yg.jpg","warrior/images/youtube-ghqSw40pC5s.jpg","warrior/images/youtube-gmA-BOIVKQU.jpg","warrior/images/youtube-gvV5sINKnT8.jpg","warrior/images/youtube-gwAId02ssYs.jpg","warrior/images/youtube-gypAjPp6eps.jpg","warrior/images/youtube-h11u3vtcpaY.jpg","warrior/images/youtube-h1iJXOUMJpg.jpg","warrior/images/youtube-h3bDa5z_B1M.jpg","warrior/images/youtube-hPSvdKTEZug.jpg","warrior/images/youtube-hT8ZMp8Ec7U.jpg","warrior/images/youtube-hTlrSYbCbHE.jpg","warrior/images/youtube-hW7DW9NIO9M.jpg","warrior/images/youtube-hgui64Kr0Go.jpg","warrior/images/youtube-hpBo2dl3PBc.jpg","warrior/images/youtube-i-WYT2UotIc.jpg","warrior/images/youtube-i9MXYZh1jcs.jpg","warrior/images/youtube-iCvmsMzlF7o.jpg","warrior/images/youtube-iFZsunzjDXU.jpg","warrior/images/youtube-iG9CE55wbtY.jpg","warrior/images/youtube-iGDfa4T9yTE.jpg","warrior/images/youtube-ilrMb3O0H4U.jpg","warrior/images/youtube-iw4FzMDhU6M.jpg","warrior/images/youtube-je-BmMoEFtQ.jpg","warrior/images/youtube-jeghGhVdt9s.jpg","warrior/images/youtube-jf_4z4AKwJg.jpg","warrior/images/youtube-jn9Od4oP8D0.jpg","warrior/images/youtube-joADD7jWqa4.jpg","warrior/images/youtube-jobYTQTgeUE.jpg","warrior/images/youtube-jowCUo_UGts.jpg","warrior/images/youtube-jtIe416Twpo.jpg","warrior/images/youtube-k00bCwWH92E.jpg","warrior/images/youtube-k84QxVJd0tI.jpg","warrior/images/youtube-k9sC2RcFsQg.jpg","warrior/images/youtube-kSpLieRQL-w.jpg","warrior/images/youtube-kWrPo02e4fo.jpg","warrior/images/youtube-kXpWLv2o7hs.jpg","warrior/images/youtube-kYgcTJBLwsU.jpg","warrior/images/youtube-kdnyIIqEBII.jpg","warrior/images/youtube-ko_GQ9ImAvE.jpg","warrior/images/youtube-ksqBDYwqkHA.jpg","warrior/images/youtube-kxR8XZOeV-s.jpg","warrior/images/youtube-lEq27AH5yRY.jpg","warrior/images/youtube-lFDG7w_jAFk.jpg","warrior/images/youtube-ljqra3BcqWM.jpg","warrior/images/youtube-lnuoHywbaR8.jpg","warrior/images/youtube-lod_LUp3ggc.jpg","warrior/images/youtube-lp9JO7qpIO4.jpg","warrior/images/youtube-lwSjyoPrKfc.jpg","warrior/images/youtube-m2Ux2PnJe6E.jpg","warrior/images/youtube-m9WxW2ktcKU.jpg","warrior/images/youtube-mDdqq_6OpyU.jpg","warrior/images/youtube-mQPEZdBTOeE.jpg","warrior/images/youtube-mVxLhy1v-xU.jpg","warrior/images/youtube-mZeqgjC6gtE.jpg","warrior/images/youtube-meIW0pv9izU.jpg","warrior/images/youtube-mmX1MGhR3WU.jpg","warrior/images/youtube-mxSNuIx4m5k.jpg","warrior/images/youtube-n2UsOIJvx6Q.jpg","warrior/images/youtube-nL34zDTPkcs.jpg","warrior/images/youtube-nQUwHdSAhmw.jpg","warrior/images/youtube-nVj3qizoWS8.jpg","warrior/images/youtube-nXfyJzMOwgw.jpg","warrior/images/youtube-n_6p-1J551Y.jpg","warrior/images/youtube-ncCSmDAmcQY.jpg","warrior/images/youtube-npixJs1UcUo.jpg","warrior/images/youtube-nxdcj2tLQGE.jpg","warrior/images/youtube-o2Js_9-ek7o.jpg","warrior/images/youtube-o2xOymSeH6I.jpg","warrior/images/youtube-o625rylh3bY.jpg","warrior/images/youtube-o8NPllzkFhE.jpg","warrior/images/youtube-o9ZDmsF3mpI.jpg","warrior/images/youtube-oFvqo1dil7M.jpg","warrior/images/youtube-oGW5APQVg-c.jpg","warrior/images/youtube-oLqLpVLE8R0.jpg","warrior/images/youtube-oRG2jlQWCsY.jpg","warrior/images/youtube-oRjHsum2ImI.jpg","warrior/images/youtube-oRoauAOgWuw.jpg","warrior/images/youtube-oTmaTD5H0iM.jpg","warrior/images/youtube-odJRDx3tA0w.jpg","warrior/images/youtube-ofSvAqiv0ss.jpg","warrior/images/youtube-oiaQygkQtgw.jpg","warrior/images/youtube-oyyvQikuog4.jpg","warrior/images/youtube-ozIKwGt38LQ.jpg","warrior/images/youtube-p3Qnlu9Nfj8.jpg","warrior/images/youtube-paOvrIKH2Os.jpg","warrior/images/youtube-pdU0Njkek5s.jpg","warrior/images/youtube-psN1DORYYV0.jpg","warrior/images/youtube-ptJp6gTTYFY.jpg","warrior/images/youtube-py6WEp6pKGE.jpg","warrior/images/youtube-q5yxIzs5Wug.jpg","warrior/images/youtube-qB_V1l8iLlc.jpg","warrior/images/youtube-qGT0qvLh3to.jpg","warrior/images/youtube-qNWQ5TGujVI.jpg","warrior/images/youtube-qzALINIvYNQ.jpg","warrior/images/youtube-rENyyRwxpHo.jpg","warrior/images/youtube-rGgoCm1hofM.jpg","warrior/images/youtube-rJDc8p18fsE.jpg","warrior/images/youtube-rTOMpaOd31g.jpg","warrior/images/youtube-r_wwmmo6UGY.jpg","warrior/images/youtube-rfi3w9Bzwik.jpg","warrior/images/youtube-rrbUkYmOKL0.jpg","warrior/images/youtube-rt6TqD000-s.jpg","warrior/images/youtube-s0nKGFOWgFA.jpg","warrior/images/youtube-s8-IPd-AtLU.jpg","warrior/images/youtube-sOmhgoD7Z9U.jpg","warrior/images/youtube-sOmhgoD7Z9U.png","warrior/images/youtube-sQsaI8wfr8k.jpg","warrior/images/youtube-sa1iS1MqUy4.jpg","warrior/images/youtube-sajBySPeYH0.jpg","warrior/images/youtube-sjn6qeFzQCA.jpg","warrior/images/youtube-soxxPyaAT1k.jpg","warrior/images/youtube-sxyKNMrhEvY.jpg","warrior/images/youtube-tEICxi9--u0.jpg","warrior/images/youtube-tI98MLR-4U4.jpg","warrior/images/youtube-tQHBHRV6eBQ.jpg","warrior/images/youtube-tSaknrYflQk.jpg","warrior/images/youtube-tc4ROCJYbm0.jpg","warrior/images/youtube-tlY0PkWxCW8.jpg","warrior/images/youtube-tm2BgO1VaRY.jpg","warrior/images/youtube-ttZCKAMpcAo.jpg","warrior/images/youtube-u5Y4pIsXTV0.jpg","warrior/images/youtube-u76yQEdflVM.jpg","warrior/images/youtube-uE9WgNr3OjM.jpg","warrior/images/youtube-uGrN6PR44PQ.jpg","warrior/images/youtube-uj0kReMs-gc.jpg","warrior/images/youtube-uq5MtA33OHk.jpg","warrior/images/youtube-utrxk5_PeEY.jpg","warrior/images/youtube-uuMy9nsrLW4.jpg","warrior/images/youtube-v5tollaAXfU.jpg","warrior/images/youtube-v89CjsSOJ_c.jpg","warrior/images/youtube-vAuO3bHxSpc.jpg","warrior/images/youtube-vEVR2FUB3ic.jpg","warrior/images/youtube-vN6aZSSGKGs.jpg","warrior/images/youtube-vPhg6sc1Mk4.jpg","warrior/images/youtube-vYXQTrYPenQ.jpg","warrior/images/youtube-vYreeoCoQPI.jpg","warrior/images/youtube-vef62MzS6as.jpg","warrior/images/youtube-vhGiGqZ78Rs.jpg","warrior/images/youtube-vs3WTVFChtw.jpg","warrior/images/youtube-vtQzuwnyW6E.jpg","warrior/images/youtube-vvlozhvQPJw.jpg","warrior/images/youtube-vyCICXGvkW4.jpg","warrior/images/youtube-wNTnRM77XuE.jpg","warrior/images/youtube-wOwblaKmyVw.jpg","warrior/images/youtube-wX78iKhInsc.jpg","warrior/images/youtube-waYiVrIGQ_0.jpg","warrior/images/youtube-woVtj8GH678.jpg","warrior/images/youtube-wp6cnp1kZBY.jpg","warrior/images/youtube-ww1kP6RryrA.jpg","warrior/images/youtube-wxmRulRQsLc.jpg","warrior/images/youtube-xFr0FKnaLDk.jpg","warrior/images/youtube-xTFUqnY3E3Q.jpg","warrior/images/youtube-xvm7dB0mOic.jpg","warrior/images/youtube-xz-gVKwWNzs.jpg","warrior/images/youtube-yDZZTmr_4d4.jpg","warrior/images/youtube-yox9CKYh7EU.jpg","warrior/images/youtube-yqc9zX04DXs.jpg","warrior/images/youtube-ytyLQ2Hl-H0.jpg","warrior/images/youtube-z2tmRpm4iK8.jpg","warrior/images/youtube-zFnSCJ8h9c4.jpg","warrior/images/youtube-zHiaJMf7m9Y.jpg","warrior/images/youtube-zjowi34UBe0.jpg","warrior/images/youtube-zk--XN4ozr8.jpg","warrior/images/youtube-zqNnOYoU5ls.jpg","warrior/images/youtube-ztPvUrQb9Vw.jpg","warrior/images/youtube-zxRTHq5uBbg.jpg","warrior/images/zeno-of-citium.jpg","youtube.json"]),a=new Set(r);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1585923459350").then(a=>a.addAll(r)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",r=>{r.waitUntil(caches.keys().then(async r=>{for(const a of r)"cache1585923459350"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",r=>{if("GET"!==r.request.method||r.request.headers.has("range"))return;const e=new URL(r.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&a.has(e.pathname)?r.respondWith(caches.match(r.request)):"only-if-cached"!==r.request.cache&&r.respondWith(caches.open("offline1585923459350").then(async a=>{try{const e=await fetch(r.request);return a.put(r.request,e.clone()),e}catch(e){const o=await a.match(r.request);if(o)return o;throw e}}))))})}();
