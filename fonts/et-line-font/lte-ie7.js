/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'et-line\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-mobile_f42c17e6eb5c8151' : '&#xe000;',
			'icon-laptop_de5d51d810d7d79b' : '&#xe001;',
			'icon-desktop_1c6bbc5e0253cf23' : '&#xe002;',
			'icon-tablet_b11b2c62777bfd10' : '&#xe003;',
			'icon-phone_8fb2bf211db592c1' : '&#xe004;',
			'icon-document_04f1432ae68694f2' : '&#xe005;',
			'icon-documents_9788021646f18da8' : '&#xe006;',
			'icon-search_490afe32b5eebe68' : '&#xe007;',
			'icon-clipboard_308e5c9278296a2a' : '&#xe008;',
			'icon-newspaper_e2156934414e9b5c' : '&#xe009;',
			'icon-notebook_a15fa276a20c84df' : '&#xe00a;',
			'icon-book-open_6992a872aabc92c5' : '&#xe00b;',
			'icon-browser_972bc7223ceaa894' : '&#xe00c;',
			'icon-calendar_d2ad435ee9244fcd' : '&#xe00d;',
			'icon-presentation_61fbb6a8b22884a2' : '&#xe00e;',
			'icon-picture_ae7384515d58aa38' : '&#xe00f;',
			'icon-pictures_52f65842f0d5b73e' : '&#xe010;',
			'icon-video_d8b05aa01b7a378d' : '&#xe011;',
			'icon-camera_31c9f37e2f3c4571' : '&#xe012;',
			'icon-printer_5a2ca9f7d1b453b9' : '&#xe013;',
			'icon-toolbox_71bd16ec346de071' : '&#xe014;',
			'icon-briefcase_ffe815865e1d1daa' : '&#xe015;',
			'icon-wallet_61e1a826b5c455f8' : '&#xe016;',
			'icon-gift_d32a16bbe648ef05' : '&#xe017;',
			'icon-bargraph_ecd1da22751c6b2f' : '&#xe018;',
			'icon-grid_4c5494fd7197a9b5' : '&#xe019;',
			'icon-expand_6e50516fe30aa1d4' : '&#xe01a;',
			'icon-focus_e279d95a5f46e274' : '&#xe01b;',
			'icon-edit_f9437d5dabc4042c' : '&#xe01c;',
			'icon-adjustments_c8aa6809f21b25cc' : '&#xe01d;',
			'icon-ribbon_1845c057064e8dd7' : '&#xe01e;',
			'icon-hourglass_db2f53b8d9c51d42' : '&#xe01f;',
			'icon-lock_c19fbaebb9685129' : '&#xe020;',
			'icon-megaphone_c8d4b0769eb41177' : '&#xe021;',
			'icon-shield_6bce4f517e158426' : '&#xe022;',
			'icon-trophy_a852bd5392438b38' : '&#xe023;',
			'icon-flag_1659eebe14980f37' : '&#xe024;',
			'icon-map_c21fe76a267c40f4' : '&#xe025;',
			'icon-puzzle_03d6ed542b60da47' : '&#xe026;',
			'icon-basket_67ce2c6550675f8f' : '&#xe027;',
			'icon-envelope_66a71aa2b58b01e1' : '&#xe028;',
			'icon-streetsign_fbcbb66e02202e64' : '&#xe029;',
			'icon-telescope_f066d17c5418d100' : '&#xe02a;',
			'icon-gears_d8e7ed41bd443bef' : '&#xe02b;',
			'icon-key_b59dbd82d316342d' : '&#xe02c;',
			'icon-paperclip_1aeb592650a6a3dd' : '&#xe02d;',
			'icon-attachment_a295a2c3c59e1956' : '&#xe02e;',
			'icon-pricetags_8b93be77cc98c5eb' : '&#xe02f;',
			'icon-lightbulb_59b19672cd9e47b7' : '&#xe030;',
			'icon-layers_b25386786b843089' : '&#xe031;',
			'icon-pencil_31f036e31c30c870' : '&#xe032;',
			'icon-tools_3d5527210bb6e993' : '&#xe033;',
			'icon-tools-2_2680f4dbc5b7f7f8' : '&#xe034;',
			'icon-scissors_55cad7ab50222fb2' : '&#xe035;',
			'icon-paintbrush_ebd12e15b10cb224' : '&#xe036;',
			'icon-magnifying-glass_0510348d3e23808b' : '&#xe037;',
			'icon-circle-compass_c7ea50057a1f7cfe' : '&#xe038;',
			'icon-linegraph_335b493055f3204c' : '&#xe039;',
			'icon-mic_6c0b1369221a9fda' : '&#xe03a;',
			'icon-strategy_8e9aa49c4f7030ae' : '&#xe03b;',
			'icon-beaker_ecf1fc92e317b245' : '&#xe03c;',
			'icon-caution_ec6f1b9843b71a08' : '&#xe03d;',
			'icon-recycle_cc08feb4c3cd1475' : '&#xe03e;',
			'icon-anchor_1cf61c3a31cd6bab' : '&#xe03f;',
			'icon-profile-male_2a277870f260c197' : '&#xe040;',
			'icon-profile-female_afeaed54ce9dd8eb' : '&#xe041;',
			'icon-bike_d844f1e7c5fe8db8' : '&#xe042;',
			'icon-wine_8f0296b78ef80c9b' : '&#xe043;',
			'icon-hotairballoon_6d0a73c5847471c0' : '&#xe044;',
			'icon-globe_43ca9fc7a4677634' : '&#xe045;',
			'icon-genius_1961be2eb57f121b' : '&#xe046;',
			'icon-map-pin_183b1f94aca34fb0' : '&#xe047;',
			'icon-dial_2e8eb050118791e1' : '&#xe048;',
			'icon-chat_cc6be638faf8ef21' : '&#xe049;',
			'icon-heart_26bb16bcb5be3873' : '&#xe04a;',
			'icon-cloud_d3bcfb036d4ff4b5' : '&#xe04b;',
			'icon-upload_c78c9e8465394209' : '&#xe04c;',
			'icon-download_be602eb209ff0e38' : '&#xe04d;',
			'icon-target_9944e9768364e9f6' : '&#xe04e;',
			'icon-hazardous_f45f09314a79c60e' : '&#xe04f;',
			'icon-piechart_f14ce044113a8fc9' : '&#xe050;',
			'icon-speedometer_cc21ed0a38cb630a' : '&#xe051;',
			'icon-global_5a11840cc0a63b46' : '&#xe052;',
			'icon-compass_31ba593c1516f62b' : '&#xe053;',
			'icon-lifesaver_bb2923900054c515' : '&#xe054;',
			'icon-clock_b58d77634d21beeb' : '&#xe055;',
			'icon-aperture_69c356adb0e78f13' : '&#xe056;',
			'icon-quote_bc3774b36cf65b76' : '&#xe057;',
			'icon-scope_c5454d961944047f' : '&#xe058;',
			'icon-alarmclock_7276e8a5fd86ce33' : '&#xe059;',
			'icon-refresh_8fa8e999605e5596' : '&#xe05a;',
			'icon-happy_d0139159ecd448d1' : '&#xe05b;',
			'icon-sad_9795970f7a6a4a29' : '&#xe05c;',
			'icon-facebook_74025ee7fe91f0c8' : '&#xe05d;',
			'icon-twitter_b4a5fab062bbdcce' : '&#xe05e;',
			'icon-googleplus_80a846d013620eb1' : '&#xe05f;',
			'icon-rss_820f627a934a3422' : '&#xe060;',
			'icon-tumblr_269e0fdf6ce7e51f' : '&#xe061;',
			'icon-linkedin_bb2db080d967cde7' : '&#xe062;',
			'icon-dribbble_5a33f8c9305a2e13' : '&#xe063;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};