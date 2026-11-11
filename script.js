/* FoundIT — UI refresh */
const $ = s => document.querySelector(s);
const E = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const CAT = { phone:'📱', wallet:'👛', keys:'🔑', bag:'🎒', documents:'📄', pet:'🐶', clothing:'👕', other:'📦' };
const USERS = ['Maria', 'Jun', 'Liza'];

/* ---------- i18n (Bisaya / Tagalog) ---------- */
const I18N = {
  en: {
    lang_name:'English',
    nav_home:'Home', nav_board:'Board', nav_messages:'Messages',
    post_item:'Post an item', post_short:'Post',
    aria_home:'FoundIT home', aria_main:'Main navigation', aria_view_as:'View as resident', aria_view_as_title:'Demo: view as a different resident',
    aria_language:'Language', aria_language_title:'Language / English / Tagalog / Bisaya', aria_theme:'Toggle dark mode', aria_theme_title:'Dark / light mode',
    aria_mobile_nav:'Mobile navigation', aria_close:'Close', aria_filter_type:'Filter by type', aria_filter_cat:'Filter by category', aria_message:'Message', aria_send:'Send message',
    toast_approved:'Approved. Arrange a safe handover.', toast_rejected:'Claim rejected.',
    hero_eyebrow:'Barangay Silanga · Tangub City',
    hero_title:'Lost? <em>Found?</em><br><span class="grad">FoundIT can help.</span>',
    hero_copy:'The neighborhood board of Barangay Silanga. Post what you lost or found, chat with neighbors, and verify ownership before returning an item.',
    hero_cta_post:'Post an item', hero_cta_find:'Find my item',
    hero_neighbors:'Neighbors helping each other', hero_neighbors_sub:'Verified residents · Safe turnover at the barangay hall',
    float_keys:'Keys, found', float_keys_sub:'Near the chapel',
    float_wallet:'Wallet, returned', float_wallet_sub:'Purok 2 · just now',
    float_pet:'Choco is home', float_pet_sub:'Thanks, neighbors!',
    stat_returned:'items returned', stat_residents:'active residents', stat_open:'open posts',
    how_eyebrow:'How it works', how_title:'From lost to found,<br><em>in four simple steps</em>',
    step1_t:'Post', step1_d:'Add a photo, describe it, and pin it on the map.',
    step2_t:'Chat', step2_d:'Message a neighbor to clarify the details.',
    step3_t:'Verify', step3_d:'The site checks the claimant using the finder’s secret questions.',
    step4_t:'Return', step4_d:'Meet at the barangay hall or another public place.',
    latest_eyebrow:'Fresh from the board', latest_title:'Latest posts', view_all:'View all',
    safety_eyebrow:'Trust & safety', safety_title:'Questions and answers',
    safety_card_title:'Good neighbors. Safe returns.',
    safety_card_p:'Every claim is checked automatically, so finders don’t have to guess who the real owner is.',
    safety_li1:'Secret questions to verify ownership',
    safety_li2:'Answers are hidden from claimants',
    safety_li3:'Turnover at the barangay hall',
    faq1_q:'Why are there verification questions?', faq1_a:'The finder sets questions only the real owner should know. When someone says “this is mine”, the site automatically checks the answers before they can message the finder. Answers stay hidden and each person gets 3 attempts per item.',
    faq2_q:'Where should items be returned?', faq2_a:'Prefer the barangay hall or another public, well-lit place.',
    faq3_q:'Can I post a photo of an ID?', faq3_a:'Do not show ID numbers, serial numbers, or card details. Put those in the verification questions instead.',
    faq4_q:'Is this an official barangay service?', faq4_a:'This is a community demo for Barangay Silanga, Tangub City. For important or urgent items, always inform the barangay hall or tanod.',
    footer_privacy:'Barangay Silanga, Tangub City · Privacy: your details are shared only with the neighbor you message.',
    footer_safety:'Safety',
    board_eyebrow:'Community board', board_title:'Lost and found', board_desc:'Browse neighbor posts, or post yours in seconds.',
    search_placeholder:'Search item, place, person…', search_aria:'Search posts',
    filter_all:'All', filter_lost:'Lost', filter_found:'Found',
    cat_all:'✨ All categories',
    posts_found:'posts found', post_found:'post found',
    no_match_title:'No matching posts', no_match_sub:'Try a different search or category.', clear_filters:'Clear filters',
    by:'by', verified_resident:'Verified resident', your_post:'· your post',
    pinned_location:'Pinned location', open_maps:'Open in maps ↗',
    i_found_this:'I found this', this_is_mine:'This is mine — verify', message_finder:'Message',
    your_post_hint:'This is your post. Claimants must pass your questions.',
    verification_log:'Verification log', answered:'answered', correctly:'correctly', passed:'Passed', failed_tag:'Failed',
    owner_verified:'Owner verified', owner_verified_p:'{name} passed the security questions. Meet at the barangay hall or another public place.',
    owner_verified_p2:'The security questions matched. Meet at the barangay hall or another public place.',
    mark_returned:'Mark as returned',
    new_post:'New post', post_item_title:'Post an item', post_item_desc:'A clear title, photo, and map pin help a lot.',
    type:'Type', type_lost:'I lost something', type_found:'I found something',
    category:'Category', title_label:'Title', title_ph:'e.g. Black wallet',
    desc_label:'Description', desc_ph:'Color, size, where seen, who has it now…',
    photo_label:'Photo', optional:'optional',
    place_label:'Place / Purok', place_ph:'e.g. Purok 3, near the chapel',
    pin_on_map:'📍 Pin on map', hide_map:'Hide map',
    loc_optional:'Optional: pin the exact location on the map.', loc_pinned:'✔ Pinned ·',
    use_my_location:'Use my location', remove_pin:'Remove pin', map_help:'Tap anywhere to place a pin.',
    qa_label:'Secret verification questions (min. 2)', qa_hint:'Only the real owner should know this. Answers are hidden from claimants. Do not show ID or card numbers.',
    publish:'Publish post',
    ownership_check:'Ownership check', verify_yours:'Verify it’s yours',
    verify_desc:'Before you can claim the item, answer the finder’s questions. Answers are hidden from others.',
    attempt:'Attempt', of:'of', your_answer:'Your answer', submit_claim:'Submit claim',
    already_claimed:'Already claimed', already_claimed_p:'This item has already been verified for its owner.',
    locked:'Verification locked', locked_p:'You’ve used all 3 attempts for this item. For safety, visit the barangay hall for help.',
    verified_title:'✔ Verified!', verified_p:'Your answers matched, so this item is confirmed as yours. You can now message <b>{name}</b> to arrange a safe meetup.',
    verify_failed:'Verification failed', verify_failed_p:'Your answers didn’t match the item details. {left}',
    attempts_left:'{n} attempt(s) left.', no_attempts_left:'No attempts left. Visit the barangay hall for help.',
    msg_eyebrow:'Messages', msg_title:'Talk to a neighbor', msg_desc:'Chat to arrange a safe turnover, or just ask a question.',
    chats:'Chats', demo:'Demo', community_chat:'Community chat', everyone:'Everyone in Silanga',
    no_private:'No private chats yet. Open a post and message a neighbor.', say_hello:'Say hello',
    no_messages:'No messages yet', no_messages_sub:'Send a message to start.', write_message:'Write a message…',
    demo_note:'Demo: messages are saved only in this browser. Use the resident selector in the header to switch residents.',
    photo_optimizing:'Optimizing photo…', photo_added:'Photo added ✔', photo_error:'Couldn’t read that photo. Try a JPG or PNG.',
    photo_ready:'Photo ready', photo_change:'Change', photo_remove:'Remove',
    add_photo:'Add a photo', add_photo_sub:'Optional · JPG or PNG · optimized automatically',
    map_cant_load:'Map can’t load right now — describing the place is enough.',
    map_pinned_me:'Pinned to your current location', map_loc_fail:'Couldn’t get your location. Tap the map.',
    map_loc_na:'Location is not available on this device', map_pin_removed:'Map pin removed',
    storage_full:'Storage is full — try a smaller photo.',
    toast_fill_answers:'Please answer all questions', toast_add_title:'Please add a title',
    toast_add_questions:'Add at least 2 questions and answers',
    toast_posted:'Posted to the board!', toast_returned:'Marked as returned. Thank you! 🎉',
    toast_open_maps:'Open this location in maps ↗',
    by_word:'by', just_now:'Just now', no_desc:'No description.',
    date_2days:'2 days ago', date_yesterday:'Yesterday', date_today:'Today', date_last_week:'Last week',
    sender_barangay_hall:'Barangay Hall',
    cat_phone:'phone', cat_wallet:'wallet', cat_keys:'keys', cat_bag:'bag', cat_documents:'documents', cat_pet:'pet', cat_clothing:'clothing', cat_other:'other',
    st_open:'Open', st_review:'In review', st_verified:'Verified', st_returned:'Returned',
    place_default:'Barangay Silanga',
    msg_intro:'Hi {o}, I’m messaging about “{title}”.',
    reply1:'Hi! I can help. Which purok are you in?', reply2:'Thanks for messaging. Can you describe it more?', reply3:'Sure, let’s meet at the barangay hall.',
    community_welcome:'Welcome to the FoundIT community chat. Please be kind and keep posts accurate. 💙'
  },
  tl: {
    lang_name:'Tagalog',
    nav_home:'Home', nav_board:'Board', nav_messages:'Mensahe',
    post_item:'Mag-post ng item', post_short:'Post',
    aria_home:'FoundIT home', aria_main:'Pangunahing nabigasyon', aria_view_as:'Tingnan bilang residente', aria_view_as_title:'Demo: tingnan bilang ibang residente',
    aria_language:'Wika', aria_language_title:'Wika / English / Tagalog / Bisaya', aria_theme:'I-toggle ang dark mode', aria_theme_title:'Dark / light mode',
    aria_mobile_nav:'Nabigasyon sa mobile', aria_close:'Isara', aria_filter_type:'I-filter ayon sa uri', aria_filter_cat:'I-filter ayon sa kategorya', aria_message:'Mensahe', aria_send:'Ipadala ang mensahe',
    toast_approved:'Naaprubahan. Ayusin ang ligtas na turnover.', toast_rejected:'Tinanggihan ang claim.',
    hero_eyebrow:'Barangay Silanga · Lungsod ng Tangub',
    hero_title:'Nawala? <em>Nakita?</em><br><span class="grad">Tutulong ang FoundIT.</span>',
    hero_copy:'Ang neighborhood board ng Barangay Silanga. I-post ang nawawala o nahanap mo, makipag-chat sa kapitbahay, at i-verify ang pagmamay-ari bago ibalik ang item.',
    hero_cta_post:'Mag-post ng item', hero_cta_find:'Hanapin ang item ko',
    hero_neighbors:'Kapitbahay na nagtutulungan', hero_neighbors_sub:'Mga beripikadong residente · Ligtas na turnover sa barangay hall',
    float_keys:'Susi, nakita', float_keys_sub:'Malapit sa kapilya',
    float_wallet:'Pitaka, naibalik', float_wallet_sub:'Purok 2 · ngayon lang',
    float_pet:'Nakauwi na si Choco', float_pet_sub:'Salamat, mga kapitbahay!',
    stat_returned:'naibalik na item', stat_residents:'aktibong residente', stat_open:'bukas na post',
    how_eyebrow:'Paano ito gumagana', how_title:'Mula nawawala hanggang nakita,<br><em>sa apat na simpleng hakbang</em>',
    step1_t:'I-post', step1_d:'Magdagdag ng larawan, ilarawan ito, at i-pin sa mapa.',
    step2_t:'Makipag-usap', step2_d:'Makipag-chat sa kapitbahay para malinaw ang detalye.',
    step3_t:'I-verify', step3_d:'Susuriin ng website ang claimant gamit ang lihim na tanong ng nakakita.',
    step4_t:'Ibalik', step4_d:'Magkita sa barangay hall o ibang pampublikong lugar.',
    latest_eyebrow:'Bago mula sa board', latest_title:'Mga pinakabagong post', view_all:'Tingnan lahat',
    safety_eyebrow:'Tiwala at kaligtasan', safety_title:'Mga tanong at sagot',
    safety_card_title:'Mabubuting kapitbahay. Ligtas na pagbabalik.',
    safety_card_p:'Awtomatikong sinusuri ang bawat claim, kaya hindi na kailangang manghula ng nakakita kung sino ang tunay na may-ari.',
    safety_li1:'Lihim na tanong para sa pag-verify ng pagmamay-ari',
    safety_li2:'Nakatago ang sagot sa mga claimant',
    safety_li3:'Turnover sa barangay hall',
    faq1_q:'Bakit may mga tanong sa pag-verify?', faq1_a:'Ang nakakita ang nagtatakda ng mga tanong na tanging tunay na may-ari lang ang makakasagot. Kapag may nagsabing “akin ito”, awtomatikong sinusuri ng website ang sagot bago sila makapag-message sa nakakita. Nakatago ang mga sagot at bawat tao ay may 3 subok kada item.',
    faq2_q:'Saan dapat ibalik ang mga item?', faq2_a:'Mas mainam sa barangay hall o ibang pampubliko at maliwanag na lugar.',
    faq3_q:'Pwede bang mag-post ng litrato ng ID?', faq3_a:'Huwag ipakita ang numero ng ID, serial number, o detalye ng card. Ilagay na lang ito sa mga tanong sa pag-verify.',
    faq4_q:'Opisyal ba itong serbisyo ng barangay?', faq4_a:'Ito ay community demo para sa Barangay Silanga, Lungsod ng Tangub. Para sa mahalaga o agarang item, ipaalam palagi sa barangay hall o tanod.',
    footer_privacy:'Barangay Silanga, Lungsod ng Tangub · Privacy: ibinabahagi lang ang detalye mo sa kapitbahay na ka-message mo.',
    footer_safety:'Kaligtasan',
    board_eyebrow:'Community board', board_title:'Nawala at nakita', board_desc:'Tingnan ang mga post ng kapitbahay, o mag-post ng sa iyo sa ilang segundo.',
    search_placeholder:'Maghanap ng item, lugar, tao…', search_aria:'Maghanap ng post',
    filter_all:'Lahat', filter_lost:'Nawala', filter_found:'Nakita',
    cat_all:'✨ Lahat ng kategorya',
    posts_found:'post ang nakita', post_found:'post ang nakita',
    no_match_title:'Walang tumugmang post', no_match_sub:'Subukan ang ibang hanap o kategorya.', clear_filters:'I-clear ang filter',
    by:'ni', verified_resident:'Beripikadong residente', your_post:'· iyong post',
    pinned_location:'Naka-pin na lokasyon', open_maps:'Buksan sa maps ↗',
    i_found_this:'Nakita ko ito', this_is_mine:'Akin ito — i-verify', message_finder:'I-message si',
    your_post_hint:'Ito ang iyong post. Kailangang pumasa sa iyong mga tanong ang mga magki-claim.',
    verification_log:'Verification log', answered:'sumagot ng', correctly:'nang tama', passed:'Pumasa', failed_tag:'Hindi pumasa',
    owner_verified:'Na-verify ang may-ari', owner_verified_p:'{name} ang pumasa sa mga tanong sa seguridad. Magkita sa barangay hall o ibang pampublikong lugar.',
    owner_verified_p2:'Tugma ang mga tanong sa seguridad. Magkita sa barangay hall o ibang pampublikong lugar.',
    mark_returned:'Markahan bilang naibalik',
    new_post:'Bagong post', post_item_title:'Mag-post ng item', post_item_desc:'Malaking tulong ang malinaw na pamagat, larawan, at pin sa mapa.',
    type:'Uri', type_lost:'Nawala ang isang bagay', type_found:'Nakakita ako ng isang bagay',
    category:'Kategorya', title_label:'Pamagat', title_ph:'hal. Itim na pitaka',
    desc_label:'Paglalarawan', desc_ph:'Kulay, laki, kung saan nakita, kanino ngayon…',
    photo_label:'Larawan', optional:'opsyonal',
    place_label:'Lugar / Purok', place_ph:'hal. Purok 3, malapit sa kapilya',
    pin_on_map:'📍 I-pin sa mapa', hide_map:'Itago ang mapa',
    loc_optional:'Opsyonal: i-pin ang eksaktong lugar sa mapa.', loc_pinned:'✔ Naka-pin ·',
    use_my_location:'Gamitin ang lokasyon ko', remove_pin:'Alisin ang pin', map_help:'I-tap kahit saan para maglagay ng pin.',
    qa_label:'Lihim na tanong sa pag-verify (min. 2)', qa_hint:'Tanging tunay na may-ari lang ang dapat makaalam nito. Nakatago ang sagot sa mga claimant. Huwag ipakita ang ID o numero ng card.',
    publish:'I-publish ang post',
    ownership_check:'Pagsusuri ng pagmamay-ari', verify_yours:'I-verify na iyo ito',
    verify_desc:'Bago mo ma-claim ang item, sagutin ang mga tanong ng nakakita. Nakatago ang sagot sa iba.',
    attempt:'Subok', of:'ng', your_answer:'Iyong sagot', submit_claim:'Isumite ang claim',
    already_claimed:'Na-claim na', already_claimed_p:'Na-verify na ang item na ito para sa may-ari.',
    locked:'Naka-lock ang pag-verify', locked_p:'Nagamit mo na ang lahat ng 3 subok para sa item na ito. Para sa seguridad, pumunta sa barangay hall para sa tulong.',
    verified_title:'✔ Na-verify!', verified_p:'Tugma ang iyong mga sagot, kaya kumpirmado na iyo ang item na ito. Maaari mo nang i-message si <b>{name}</b> para sa ligtas na pagkikita.',
    verify_failed:'Hindi pumasa sa pag-verify', verify_failed_p:'Hindi tugma ang iyong mga sagot sa detalye ng item. {left}',
    attempts_left:'{n} subok ang natitira.', no_attempts_left:'Wala ka nang natitirang subok. Pumunta sa barangay hall para sa tulong.',
    msg_eyebrow:'Mensahe', msg_title:'Kausapin ang kapitbahay', msg_desc:'Mag-usap para sa ligtas na turnover, o magtanong lang.',
    chats:'Mga chat', demo:'Demo', community_chat:'Chat ng komunidad', everyone:'Lahat sa Silanga',
    no_private:'Wala pang pribadong chat. Buksan ang isang post at i-message ang kapitbahay.', say_hello:'Kumustahin',
    no_messages:'Wala pang mensahe', no_messages_sub:'Magpadala ng mensahe para magsimula.', write_message:'Sumulat ng mensahe…',
    demo_note:'Demo: naka-save lang ang mga mensahe sa browser na ito. Gamitin ang pagpili ng residente sa header para magpalit ng residente.',
    photo_optimizing:'Ina-optimize ang larawan…', photo_added:'Naidagdag ang larawan ✔', photo_error:'Hindi mabasa ang larawang iyon. Subukan ang JPG o PNG.',
    photo_ready:'Handa na ang larawan', photo_change:'Palitan', photo_remove:'Alisin',
    add_photo:'Magdagdag ng larawan', add_photo_sub:'Opsyonal · JPG o PNG · awtomatikong ino-optimize',
    map_cant_load:'Hindi ma-load ang mapa ngayon — sapat na ang paglalarawan ng lugar.',
    map_pinned_me:'Na-pin sa kasalukuyang lokasyon mo', map_loc_fail:'Hindi makuha ang lokasyon mo. I-tap ang mapa.',
    map_loc_na:'Hindi available ang lokasyon sa device na ito', map_pin_removed:'Inalis ang pin sa mapa',
    storage_full:'Puno na ang storage — subukan ang mas maliit na larawan.',
    toast_fill_answers:'Pakisagutan ang lahat ng tanong', toast_add_title:'Pakilagyan ng pamagat',
    toast_add_questions:'Magdagdag ng hindi bababa sa 2 tanong at sagot',
    toast_posted:'Na-post sa board!', toast_returned:'Namarkahan bilang naibalik. Salamat! 🎉',
    toast_open_maps:'Buksan ang lokasyong ito sa maps ↗',
    by_word:'ni', just_now:'Ngayon lang', no_desc:'Walang paglalarawan.',
    date_2days:'2 araw na ang nakalipas', date_yesterday:'Kahapon', date_today:'Ngayon', date_last_week:'Nakaraang linggo',
    sender_barangay_hall:'Barangay Hall',
    cat_phone:'telepono', cat_wallet:'pitaka', cat_keys:'susi', cat_bag:'bag', cat_documents:'dokumento', cat_pet:'alaga', cat_clothing:'damit', cat_other:'iba pa',
    st_open:'Bukas', st_review:'Sinusuri', st_verified:'Na-verify', st_returned:'Naibalik',
    place_default:'Barangay Silanga',
    msg_intro:'Hi {o}, nagme-message ako tungkol sa “{title}”.',
    reply1:'Hi! Tutulong ako. Anong purok ka?', reply2:'Salamat sa pag-message. Pwede mo bang ilarawan pa?', reply3:'Sige, magkita tayo sa barangay hall.',
    community_welcome:'Maligayang pagdating sa community chat ng FoundIT. Maging magalang at panatilihing tumpak ang mga post. 💙'
  },
  ceb: {
    lang_name:'Bisaya',
    nav_home:'Home', nav_board:'Board', nav_messages:'Mensahe',
    post_item:'Mag-post og butang', post_short:'Post',
    aria_home:'FoundIT home', aria_main:'Pangunang nabigasyon', aria_view_as:'Tan-awa isip residente', aria_view_as_title:'Demo: tan-awa isip laing residente',
    aria_language:'Pinulongan', aria_language_title:'Pinulongan / English / Tagalog / Bisaya', aria_theme:'I-toggle ang dark mode', aria_theme_title:'Dark / light mode',
    aria_mobile_nav:'Nabigasyon sa mobile', aria_close:'Isira', aria_filter_type:'I-filter sumala sa klase', aria_filter_cat:'I-filter sumala sa kategorya', aria_message:'Mensahe', aria_send:'Ipadala ang mensahe',
    toast_approved:'Gi-approve. I-ayo ang luwas nga turnover.', toast_rejected:'Gibalibaran ang claim.',
    hero_eyebrow:'Barangay Silanga · Dakbayan sa Tangub',
    hero_title:'Nawala? <em>Nakit-an?</em><br><span class="grad">Motabang ang FoundIT.</span>',
    hero_copy:'Ang neighborhood board sa Barangay Silanga. I-post ang imong nawala o nakit-an, makig-chat sa silingan, ug i-verify ang tag-iya sa dili pa ibalik ang butang.',
    hero_cta_post:'Mag-post og butang', hero_cta_find:'Pangitaa akong butang',
    hero_neighbors:'Mga silingan nga nagtinabangay', hero_neighbors_sub:'Mga beripikadong residente · Luwas nga turnover sa barangay hall',
    float_keys:'Yawi, nakit-an', float_keys_sub:'Duol sa kapilya',
    float_wallet:'Pitaka, nauli', float_wallet_sub:'Purok 2 · bag-o lang',
    float_pet:'Si Choco nakapauli na', float_pet_sub:'Salamat, mga silingan!',
    stat_returned:'nauli nga butang', stat_residents:'aktibong residente', stat_open:'bukas nga post',
    how_eyebrow:'Unsaon kini pag-gamit', how_title:'Gikan sa nawala ngadto sa nakit-an,<br><em>sa upat ka sayon nga lakang</em>',
    step1_t:'I-post', step1_d:'Pagdugang og litrato, ihulagway kini, ug i-pin sa mapa.',
    step2_t:'Makig-storya', step2_d:'Makig-chat sa silingan aron klaro ang detalye.',
    step3_t:'I-verify', step3_d:'Susihon sa website ang claimant gamit ang sekretong pangutana sa nakakita.',
    step4_t:'Iuli', step4_d:'Magkita sa barangay hall o laing pampublikong lugar.',
    latest_eyebrow:'Bag-o gikan sa board', latest_title:'Pinakabag-ong mga post', view_all:'Tan-awa tanan',
    safety_eyebrow:'Pagsalig ug kaluwasan', safety_title:'Mga pangutana ug tubag',
    safety_card_title:'Maayong silingan. Luwas nga pag-uli.',
    safety_card_p:'Awtomatikong gisusi ang matag claim, mao nga dili na kinahanglan magtag-an sa nakakita kinsa ang tinuod nga tag-iya.',
    safety_li1:'Sekretong pangutana para i-verify ang tag-iya',
    safety_li2:'Gitago ang tubag sa mga claimant',
    safety_li3:'Turnover sa barangay hall',
    faq1_q:'Ngano nga adunay mga pangutana sa pag-verify?', faq1_a:'Ang nakakita mao ang magbutang og mga pangutana nga ang tinuod lang nga tag-iya ang makatubag. Kung adunay moingon “akoa ni”, awtomatikong susihon sa website ang tubag sa dili pa sila makapag-message sa nakakita. Gitago ang mga tubag ug ang matag tawo adunay 3 ka pagsulay kada butang.',
    faq2_q:'Asa angay iuli ang mga butang?', faq2_a:'Mas maayo sa barangay hall o laing pampubliko ug hayag nga lugar.',
    faq3_q:'Pwede ba mag-post og litrato sa ID?', faq3_a:'Ayaw ipakita ang numero sa ID, serial number, o detalye sa card. Ibutang na lang kini sa mga pangutana sa pag-verify.',
    faq4_q:'Opisyal ba kini nga serbisyo sa barangay?', faq4_a:'Kini usa ka community demo para sa Barangay Silanga, Dakbayan sa Tangub. Para sa mahalaga o dinalian nga butang, pahibaloa kanunay ang barangay hall o tanod.',
    footer_privacy:'Barangay Silanga, Dakbayan sa Tangub · Privacy: ipaambit lang ang imong detalye sa silingan nga imong gi-message.',
    footer_safety:'Kaluwasan',
    board_eyebrow:'Community board', board_title:'Nawala ug nakit-an', board_desc:'Tan-awa ang mga post sa silingan, o mag-post sa imoha sulod sa pipila ka segundo.',
    search_placeholder:'Pangitaa ang butang, lugar, tawo…', search_aria:'Pangitaa ang post',
    filter_all:'Tanan', filter_lost:'Nawala', filter_found:'Nakit-an',
    cat_all:'✨ Tanan nga kategorya',
    posts_found:'ka post ang nakit-an', post_found:'ka post ang nakit-an',
    no_match_title:'Walay post nga nagtugma', no_match_sub:'Sulayi og lain nga pagpangita o kategorya.', clear_filters:'I-clear ang filter',
    by:'ni', verified_resident:'Beripikadong residente', your_post:'· imong post',
    pinned_location:'Gi-pin nga lokasyon', open_maps:'Ablihi sa maps ↗',
    i_found_this:'Nakita nako ni', this_is_mine:'Akoa ni — i-verify', message_finder:'I-message si',
    your_post_hint:'Imo kini nga post. Kinahanglan makapasar sa imong mga pangutana ang mag-claim.',
    verification_log:'Verification log', answered:'mitubag og', correctly:'nga sakto', passed:'Nakapasar', failed_tag:'Wala makapasar',
    owner_verified:'Na-verify ang tag-iya', owner_verified_p:'Si {name} nakapasar sa mga pangutana sa seguridad. Magkita sa barangay hall o laing pampublikong lugar.',
    owner_verified_p2:'Nagtugma ang mga pangutana sa seguridad. Magkita sa barangay hall o laing pampublikong lugar.',
    mark_returned:'Markahi nga nauli na',
    new_post:'Bag-ong post', post_item_title:'Mag-post og butang', post_item_desc:'Dako og tabang ang klaro nga titulo, litrato, ug pin sa mapa.',
    type:'Klase', type_lost:'Nawala nako ang usa ka butang', type_found:'Nakita nako ang usa ka butang',
    category:'Kategorya', title_label:'Titulo', title_ph:'pananglitan: Itom nga pitaka',
    desc_label:'Paghulagway', desc_ph:'Kolor, gidak-on, asa nakit-an, kinsa ang nagkupot karon…',
    photo_label:'Litrato', optional:'opsyonal',
    place_label:'Lugar / Purok', place_ph:'pananglitan: Purok 3, duol sa kapilya',
    pin_on_map:'📍 I-pin sa mapa', hide_map:'Tagoa ang mapa',
    loc_optional:'Opsyonal: i-pin ang eksaktong lugar sa mapa.', loc_pinned:'✔ Gi-pin ·',
    use_my_location:'Gamita akong lokasyon', remove_pin:'Kuhaa ang pin', map_help:'I-tap bisan asa aron ibutang ang pin.',
    qa_label:'Sekretong pangutana sa pag-verify (min. 2)', qa_hint:'Ang tinuod lang nga tag-iya ang angay makabalo niini. Gitago ang tubag sa mga claimant. Ayaw ipakita ang ID o numero sa card.',
    publish:'I-publish ang post',
    ownership_check:'Pagsusi sa pagpanag-iya', verify_yours:'I-verify nga imoha kini',
    verify_desc:'Sa dili pa nimo ma-claim ang butang, tubaga ang mga pangutana sa nakakita. Gitago ang tubag sa uban.',
    attempt:'Pagsulay', of:'sa', your_answer:'Imong tubag', submit_claim:'Isumite ang claim',
    already_claimed:'Na-claim na', already_claimed_p:'Na-verify na kini nga butang para sa tag-iya.',
    locked:'Naka-lock ang pag-verify', locked_p:'Nagamit na nimo ang tanang 3 ka pagsulay para niini nga butang. Para sa kaluwasan, adto sa barangay hall para sa tabang.',
    verified_title:'✔ Na-verify!', verified_p:'Nagtugma ang imong tubag, mao nga kumpirmado nga imoha kini nga butang. Mahimo na nimo i-message si <b>{name}</b> para sa luwas nga pagkita.',
    verify_failed:'Wala makapasar sa pag-verify', verify_failed_p:'Wala nagtugma ang imong tubag sa detalye sa butang. {left}',
    attempts_left:'{n} ka pagsulay ang nahibilin.', no_attempts_left:'Wala na kay nahibiling pagsulay. Adto sa barangay hall para sa tabang.',
    msg_eyebrow:'Mensahe', msg_title:'Pakigsulti sa silingan', msg_desc:'Mag-istorya para sa luwas nga turnover, o mangutana lang.',
    chats:'Mga chat', demo:'Demo', community_chat:'Chat sa komunidad', everyone:'Tanan sa Silanga',
    no_private:'Wala pay pribadong chat. Ablihi ang usa ka post ug i-message ang silingan.', say_hello:'Kumusta',
    no_messages:'Wala pay mensahe', no_messages_sub:'Magpadala og mensahe aron makasugod.', write_message:'Pagsulat og mensahe…',
    demo_note:'Demo: ang mga mensahe gitipigan lang niini nga browser. Gamita ang pagpili og residente sa header aron mag-ilis og residente.',
    photo_optimizing:'Gi-optimize ang litrato…', photo_added:'Nadugang ang litrato ✔', photo_error:'Dili mabasa ang litrato. Sulayi og JPG o PNG.',
    photo_ready:'Andam na ang litrato', photo_change:'Ilisi', photo_remove:'Kuhaa',
    add_photo:'Pagdugang og litrato', add_photo_sub:'Opsyonal · JPG o PNG · awtomatikong gi-optimize',
    map_cant_load:'Dili ma-load ang mapa karon — igo na ang paghulagway sa lugar.',
    map_pinned_me:'Gi-pin sa imong kasamtangang lokasyon', map_loc_fail:'Dili makuha ang imong lokasyon. I-tap ang mapa.',
    map_loc_na:'Dili magamit ang lokasyon sa kini nga device', map_pin_removed:'Gikuha ang pin sa mapa',
    storage_full:'Puno na ang storage — sulayi og mas gamay nga litrato.',
    toast_fill_answers:'Palihug tubaga ang tanang pangutana', toast_add_title:'Palihug butangi og titulo',
    toast_add_questions:'Pagdugang og labing menos 2 ka pangutana ug tubag',
    toast_posted:'Na-post sa board!', toast_returned:'Gi-markahan nga nauli na. Salamat! 🎉',
    toast_open_maps:'Ablihi kini nga lokasyon sa maps ↗',
    by_word:'ni', just_now:'Bag-o lang', no_desc:'Walay paghulagway.',
    date_2days:'2 ka adlaw na ang milabay', date_yesterday:'Gahapon', date_today:'Karon', date_last_week:'Niaging semana',
    sender_barangay_hall:'Barangay Hall',
    cat_phone:'telepono', cat_wallet:'pitaka', cat_keys:'yawi', cat_bag:'bag', cat_documents:'dokumento', cat_pet:'alagang hayop', cat_clothing:'sinina', cat_other:'uban pa',
    st_open:'Bukas', st_review:'Gisusi', st_verified:'Na-verify', st_returned:'Nauli',
    place_default:'Barangay Silanga',
    msg_intro:'Hi {o}, nag-message ko bahin sa “{title}”.',
    reply1:'Hi! Motabang ko. Unsa nga purok ka?', reply2:'Salamat sa pag-message. Pwede ba nimo ihulagway pa?', reply3:'Sige, magkita ta sa barangay hall.',
    community_welcome:'Maayong pag-abot sa community chat sa FoundIT. Palihug magbinuot ug ipahimutang nga tukma ang mga post. 💙'
  }
};

let lang = 'en';
try { const saved = localStorage.getItem('sl-lang'); if (saved === 'en' || saved === 'tl' || saved === 'ceb') lang = saved; } catch (e) {}
function t(key, vars) {
  let s = (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || (I18N.tl && I18N.tl[key]) || key;
  if (vars) Object.keys(vars).forEach(k => { s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
  return s;
}
function setLang(l) {
  if (l !== 'en' && l !== 'tl' && l !== 'ceb') return;
  lang = l;
  try { localStorage.setItem('sl-lang', l); } catch (e) {}
  applyStaticI18n();
  render();
}
function applyStaticI18n() {
  document.documentElement.lang = lang === 'ceb' ? 'ceb' : (lang === 'tl' ? 'tl' : 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.setAttribute('title', t(el.dataset.i18nTitle)); });
  const ls = $('#lang'); if (ls) ls.value = lang;
}

const ST = { open: () => t('st_open'), review: () => t('st_review'), verified: () => t('st_verified'), returned: () => t('st_returned') };
const stLabel = s => (ST[s] ? ST[s]() : s);
const catLabel = c => t('cat_' + c) || c;

const SEED = { items:[
  { id:1, type:'found', title:'Black wallet', cat:'wallet', desc:'Found near the basketball court. Has a few cards inside.', place:'Purok 2', by:'Jun', date:'2 days ago', status:'open', lat:8.0672, lng:123.7531, qa:[{ q:'What color is the ribbon or keychain inside?', a:'blue' }, { q:'Any sticker on it?', a:'star' }] },
  { id:2, type:'lost', title:'Keys with red keychain', cat:'keys', desc:'Lost while walking from the chapel to the market.', place:'Near the chapel', by:'Liza', date:'Yesterday', status:'open', lat:8.0639, lng:123.7498, qa:[] },
  { id:3, type:'found', title:'Phone with cracked screen', cat:'phone', desc:'Left on a waiting shed bench.', place:'Waiting shed', by:'Liza', date:'Today', status:'open', lat:8.0701, lng:123.7555, qa:[{ q:'What is the lock-screen wallpaper?', a:'sunset beach' }, { q:'What phone case color?', a:'green' }] },
  { id:4, type:'lost', title:'Small brown puppy', cat:'pet', desc:'Answers to “Choco”. Wearing a red collar.', place:'Purok 4', by:'Jun', date:'Today', status:'open', lat:8.0602, lng:123.7472, qa:[] },
  { id:5, type:'found', title:'School bag', cat:'bag', desc:'Returned to its owner. Thank you, neighbors!', place:'Barangay hall', by:'Maria', date:'Last week', status:'returned', qa:[{ q:'x', a:'x' }] }
], claims:[], chats:{ g:[{ f:'Barangay Hall', t:'Welcome to the FoundIT community chat. Please be kind and keep posts accurate. 💙' }] } };

let S;
try { S = JSON.parse(localStorage.getItem('sl3')); } catch (e) {}
if (!S) S = JSON.parse(JSON.stringify(SEED));
const save = () => { try { localStorage.setItem('sl3', JSON.stringify(S)); return true; } catch (e) { toast(t('storage_full')); return false; } };

let me = USERS[0], chat = 'g', F = { t:'', c:'', q:'' };
let photoDraft = null, draftLoc = null;

/* ---------- tiny helpers ---------- */
const ini = s => String(s || '?').trim().charAt(0).toUpperCase();
const hue = s => [...String(s || '?')].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
const avatar = (n, cls = '') => `<span class="avatar ${cls}" style="--h:${hue(n)}" aria-hidden="true">${E(ini(n))}</span>`;
const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const IC = {
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>'),
  pin: svg('<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  shield: svg('<path d="M12 3 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>'),
  check: svg('<path d="m5 12 5 5L20 7"/>'),
  send: svg('<path d="m4 12 16-8-6 16-2.5-6.5L4 12Z"/>')
};

/* ---------- theme ---------- */
function setThemeMeta() {
  const dark = (document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')) === 'dark';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = dark ? '#070A17' : '#F6F5FF';
}
function applyTheme() {
  let saved = null;
  try { saved = localStorage.getItem('sl-theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  setThemeMeta();
}
function theme() {
  const d = document.documentElement;
  const cur = d.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  d.dataset.theme = next;
  try { localStorage.setItem('sl-theme', next); } catch (e) {}
  setThemeMeta();
}
applyTheme();

/* ---------- toast + modal ---------- */
let toastTimer;
function toast(t) {
  const e = $('#t');
  e.textContent = t;
  e.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => e.classList.remove('on'), 2600);
}
function modal(h) {
  destroyMaps();
  $('#m').innerHTML = `<div class="box" role="dialog" aria-modal="true">${h}<button class="x" onclick="closeM()" aria-label="${E(t('aria_close'))}">✕</button></div>`;
  $('#m').classList.add('on');
  document.body.classList.add('lock');
}
function closeM() {
  const m = $('#m');
  m.classList.remove('on');
  m.innerHTML = '';
  document.body.classList.remove('lock');
  destroyMaps();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeM(); });

/* ---------- item card ---------- */
const typeLabel = tp => tp === 'lost' ? t('filter_lost') : t('filter_found');
const dateLabel = d => {
  if (d === 'Just now') return t('just_now');
  if (d === '2 days ago') return t('date_2days');
  if (d === 'Yesterday') return t('date_yesterday');
  if (d === 'Today') return t('date_today');
  if (d === 'Last week') return t('date_last_week');
  return d;
};
const displayName = n => n === 'Barangay Hall' ? t('sender_barangay_hall') : n;
const card = i => `<article class="card" onclick="openItem(${i.id})" tabindex="0" role="button" aria-label="${E(i.title)} — ${typeLabel(i.type)}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openItem(${i.id})}">
  <div class="ph ${i.type} ${i.photo ? 'has-photo' : ''}">
    ${i.photo ? `<img src="${i.photo}" alt="" loading="lazy">` : `<span class="ph-emoji">${CAT[i.cat] || '📦'}</span>`}
    <b class="tag ${i.type}">${typeLabel(i.type)}</b>
    <span class="st ${i.status}">${stLabel(i.status)}</span>
  </div>
  <div class="card-body">
    <span class="cat">${E(catLabel(i.cat))}</span>
    <h3>${E(i.title)}</h3>
    <p class="meta">${IC.pin} ${E(i.place)} <span class="dot-sep">·</span> ${E(dateLabel(i.date))}</p>
    <div class="card-foot">${avatar(i.by)} <span>${t('by_word')} <b>${E(i.by)}</b></span></div>
  </div>
</article>`;

/* ---------- render ---------- */
function render() {
  applyStaticI18n();
  const h = location.hash.slice(1);
  const active = h || 'home';
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + active));
  document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + active));
  $('#who').value = me;
  $('#app').innerHTML = h === 'board' ? board() : h === 'messages' ? messages() : home();
  if (h === 'board') draw();
  if (h === 'messages') requestAnimationFrame(() => { const l = $('#log'); if (l) l.scrollTop = l.scrollHeight; });
}
addEventListener('hashchange', () => {
  const h = location.hash.slice(1);
  render();
  if (h && h !== 'home' && h !== 'board' && h !== 'messages' && document.getElementById(h)) {
    requestAnimationFrame(() => document.getElementById(h).scrollIntoView({ behavior:'smooth' }));
  } else scrollTo(0, 0);
});

const siteFooter = () => `<footer class="site-footer">
  <div class="foot-brand"><span class="logo-mark"><img src="logo-mark.png" alt=""></span> <span>Found<span class="grad">IT</span></span></div>
  <p>${t('footer_privacy')}</p>
  <div class="foot-links"><a href="#board">${t('nav_board')}</a><a href="#messages">${t('nav_messages')}</a><a href="#safety">${t('footer_safety')}</a></div>
</footer>`;

/* ---------- home ---------- */
function home() {
  const returned = S.items.filter(i => i.status === 'returned').length;
  const open = S.items.filter(i => i.status !== 'returned').length;
  return `<section class="hero">
    <div class="hero-float hf1"><span class="hf-ic">🔑</span><span><b>${t('float_keys')}</b><small>${t('float_keys_sub')}</small></span></div>
    <div class="hero-float hf2"><span class="hf-ic">👛</span><span><b>${t('float_wallet')}</b><small>${t('float_wallet_sub')}</small></span></div>
    <div class="hero-float hf3"><span class="hf-ic">🐶</span><span><b>${t('float_pet')}</b><small>${t('float_pet_sub')}</small></span></div>
    <span class="eyebrow"><i class="dot"></i> ${t('hero_eyebrow')}</span>
    <h1>${t('hero_title')}</h1>
    <p class="hero-copy">${t('hero_copy')}</p>
    <div class="cta">
      <button class="btn pri lg" onclick="openPost()">${IC.plus} ${t('hero_cta_post')}</button>
      <a class="btn lg" href="#board">${IC.search} ${t('hero_cta_find')}</a>
    </div>
    <div class="hero-meta">
      <div class="avatars">${USERS.map(u => avatar(u)).join('')}<span class="avatar more" aria-hidden="true">+</span></div>
      <div><b>${t('hero_neighbors')}</b><span class="mut">${t('hero_neighbors_sub')}</span></div>
    </div>
  </section>

  <div class="stats">
    <div><span class="stat-ic">🎉</span><b>${returned}</b><span>${t('stat_returned')}</span></div>
    <div><span class="stat-ic">👥</span><b>${USERS.length}</b><span>${t('stat_residents')}</span></div>
    <div><span class="stat-ic">📌</span><b>${open}</b><span>${t('stat_open')}</span></div>
  </div>

  <section class="sec" id="how">
    <div class="sec-head center"><span class="eyebrow small">${t('how_eyebrow')}</span><h2>${t('how_title')}</h2></div>
    <div class="steps">
      <div><span class="step-num">01</span><b>${t('step1_t')}</b><p class="mut">${t('step1_d')}</p></div>
      <div><span class="step-num">02</span><b>${t('step2_t')}</b><p class="mut">${t('step2_d')}</p></div>
      <div><span class="step-num">03</span><b>${t('step3_t')}</b><p class="mut">${t('step3_d')}</p></div>
      <div><span class="step-num">04</span><b>${t('step4_t')}</b><p class="mut">${t('step4_d')}</p></div>
    </div>
  </section>

  <section class="sec">
    <div class="sec-head">
      <div><span class="eyebrow small">${t('latest_eyebrow')}</span><h2>${t('latest_title')}</h2></div>
      <a class="btn ghost" href="#board">${t('view_all')} ${IC.arrow}</a>
    </div>
    <div class="grid">${S.items.slice(0, 4).map(card).join('')}</div>
  </section>

  <section class="sec" id="safety">
    <div class="sec-head"><div><span class="eyebrow small">${t('safety_eyebrow')}</span><h2>${t('safety_title')}</h2></div></div>
    <div class="faq-grid">
      <div class="safety-card">
        <span class="s-ic">${IC.shield}</span>
        <h3>${t('safety_card_title')}</h3>
        <p>${t('safety_card_p')}</p>
        <ul>
          <li>${IC.check} ${t('safety_li1')}</li>
          <li>${IC.check} ${t('safety_li2')}</li>
          <li>${IC.check} ${t('safety_li3')}</li>
        </ul>
      </div>
      <div class="faq-list">
        <details open><summary>${t('faq1_q')}</summary><p class="mut">${t('faq1_a')}</p></details>
        <details><summary>${t('faq2_q')}</summary><p class="mut">${t('faq2_a')}</p></details>
        <details><summary>${t('faq3_q')}</summary><p class="mut">${t('faq3_a')}</p></details>
        <details><summary>${t('faq4_q')}</summary><p class="mut">${t('faq4_a')}</p></details>
      </div>
    </div>
  </section>

  ${siteFooter()}`;
}
/* ---------- board ---------- */
function board() {
  return `<section class="sec board-sec">
    <div class="sec-head">
      <div><span class="eyebrow small">${t('board_eyebrow')}</span><h2>${t('board_title')}</h2><p class="mut">${t('board_desc')}</p></div>
      <button class="btn pri" onclick="openPost()">${IC.plus} ${t('post_item')}</button>
    </div>
    <div class="toolbar">
      <label class="search">${IC.search}<input placeholder="${t('search_placeholder')}" aria-label="${t('search_aria')}" oninput="F.q=this.value;draw()" value="${E(F.q)}"></label>
      <div class="seg" role="group" aria-label="${E(t('aria_filter_type'))}">
        <button data-type="" class="${F.t === '' ? 'on' : ''}" onclick="F.t='';draw(true)">${t('filter_all')}</button>
        <button data-type="lost" class="${F.t === 'lost' ? 'on' : ''}" onclick="F.t='lost';draw(true)">${t('filter_lost')}</button>
        <button data-type="found" class="${F.t === 'found' ? 'on' : ''}" onclick="F.t='found';draw(true)">${t('filter_found')}</button>
      </div>
    </div>
    <div class="chips" role="group" aria-label="${E(t('aria_filter_cat'))}">
      <button class="chip ${F.c === '' ? 'on' : ''}" data-cat="" onclick="F.c='';draw(true)">${t('cat_all')}</button>
      ${Object.keys(CAT).map(c => `<button class="chip ${F.c === c ? 'on' : ''}" data-cat="${c}" onclick="F.c='${c}';draw(true)">${CAT[c]} ${catLabel(c)}</button>`).join('')}
    </div>
    <p class="board-count" id="boardCount"></p>
    <div class="grid" id="grid"></div>
  </section>
  ${siteFooter()}`;
}

function draw(animate) {
  const q = F.q.trim().toLowerCase();
  const list = S.items.filter(i => (!F.t || i.type === F.t) && (!F.c || i.cat === F.c) && (!q || (i.title + ' ' + i.desc + ' ' + i.place + ' ' + i.by).toLowerCase().includes(q)));
  const grid = $('#grid');
  if (!grid) return;
  document.querySelectorAll('.seg [data-type]').forEach(b => b.classList.toggle('on', (b.dataset.type || '') === F.t));
  document.querySelectorAll('.chips [data-cat]').forEach(b => b.classList.toggle('on', (b.dataset.cat || '') === F.c));
  const paint = () => {
    grid.innerHTML = list.map(card).join('') || `<div class="empty"><span class="emoji">🧭</span><b>${t('no_match_title')}</b><span>${t('no_match_sub')}</span><button class="btn sm" onclick="F={t:'',c:'',q:''};render()">${t('clear_filters')}</button></div>`;
    const count = $('#boardCount');
    if (count) {
      count.textContent = `${list.length} ${list.length === 1 ? t('post_found') : t('posts_found')}`;
      count.classList.remove('bump');
      void count.offsetWidth;
      count.classList.add('bump');
    }
  };
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (animate && document.startViewTransition && !reduce) {
    document.body.classList.add('no-card-anim');
    const done = () => document.body.classList.remove('no-card-anim');
    const vt = document.startViewTransition(paint);
    if (vt && vt.finished && vt.finished.finally) vt.finished.finally(done); else done();
  } else paint();
}

/* ---------- item details ---------- */
function openItem(id) {
  const i = S.items.find(x => x.id == id);
  if (!i) return;
  const mine = i.by === me;
  const cl = S.claims.filter(c => c.item == id);
  const won = cl.find(c => c.state === 'verified');
  const got = won && won.by === me;
  const hasLoc = i.lat != null && i.lng != null && isFinite(i.lat) && isFinite(i.lng);

  let h = `<div class="item-head">
    <div class="ph ${i.type} ${i.photo ? 'has-photo' : ''}">${i.photo ? `<img src="${i.photo}" alt="">` : `<span class="ph-emoji">${CAT[i.cat] || '📦'}</span>`}</div>
    <div class="item-head-txt">
      <div class="row-badges"><b class="tag ${i.type}">${typeLabel(i.type)}</b><span class="st ${i.status}">${stLabel(i.status)}</span></div>
      <h2>${E(i.title)}</h2>
      <p class="meta">${IC.pin} ${E(i.place)} <span class="dot-sep">·</span> ${IC.clock} ${E(dateLabel(i.date))}</p>
    </div>
  </div>
  <p class="item-desc">${E(i.desc)}</p>
  <div class="poster">${avatar(i.by)}<div><b>${E(i.by)}</b><span>${t('verified_resident')}${mine ? ' ' + t('your_post') : ''}</span></div></div>
  ${hasLoc ? `<div class="item-loc">
    <div class="item-loc-head"><b>${IC.pin} ${t('pinned_location')}</b><a class="map-link" href="https://www.openstreetmap.org/?mlat=${i.lat}&mlon=${i.lng}#map=17/${i.lat}/${i.lng}" target="_blank" rel="noopener">${t('open_maps')}</a></div>
    <div id="itemMap" class="item-map"></div>
  </div>` : ''}
  <div class="cta start">`;

  if (!mine) {
    if (i.type === 'lost') h += `<button class="btn pri" onclick="startChat('${i.by}',${id})">${IC.search} ${t('i_found_this')}</button>`;
    else if (i.status === 'open') h += `<button class="btn pri" onclick="openClaim(${id})">${IC.shield} ${t('this_is_mine')}</button>`;
    if (got) h += `<button class="btn ok" onclick="startChat('${i.by}',${id})">${IC.send} ${t('message_finder')} ${E(i.by)}</button>`;
  } else {
    h += `<span class="hint">${t('your_post_hint')}</span>`;
  }
  h += `</div>`;

  if (mine && cl.length) {
    h += `<div class="log-block"><h3>${t('verification_log')}</h3>` + cl.map(c =>
      `<div class="claim-row">${avatar(c.by)}<div><b>${E(c.by)}</b><span class="mut">${t('answered')} ${c.score}/${i.qa.length} ${t('correctly')}</span></div><span class="tag ${c.state === 'verified' ? 'found' : 'lost'}">${c.state === 'verified' ? t('passed') : t('failed_tag')}</span></div>`
    ).join('') + `</div>`;
  }

  if (i.status === 'verified') {
    h += `<div class="verified-card">${IC.check}<div><b>${t('owner_verified')}</b><p class="mut">${won ? t('owner_verified_p', {name: E(won.by)}) : t('owner_verified_p2')}</p>${(mine || got) ? `<button class="btn ok sm" onclick="ret(${id})">${t('mark_returned')}</button>` : ''}</div></div>`;
  }
  modal(h);
  if (hasLoc) showItemMap(i);
}

/* ---------- photo upload ---------- */
function compressImage(file) {
  return new Promise((resolve, reject) => {
    if (!file || !/^image\//.test(file.type)) return reject(new Error('Type'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Read'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Image'));
      img.onload = () => {
        const max = 1100;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function pickPhoto(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  toast(t('photo_optimizing'));
  try {
    photoDraft = await compressImage(file);
    renderPhotoField();
    toast(t('photo_added'));
  } catch (e) {
    toast(t('photo_error'));
  }
  input.value = '';
}

function clearPhoto() {
  photoDraft = null;
  renderPhotoField();
}

function renderPhotoField() {
  const f = $('#photoField');
  if (!f) return;
  f.innerHTML = photoDraft
    ? `<div class="photo-preview">
        <img src="${photoDraft}" alt="Selected photo preview">
        <div class="photo-preview-bar"><span>${t('photo_ready')}</span><label class="photo-change">${t('photo_change')}<input type="file" accept="image/*" onchange="pickPhoto(this)"></label><button type="button" class="photo-remove" onclick="clearPhoto()">${t('photo_remove')}</button></div>
      </div>`
    : `<label class="photo-drop">
        <input type="file" accept="image/*" onchange="pickPhoto(this)">
        <span class="pd-ic">📷</span>
        <span><b>${t('add_photo')}</b><small>${t('add_photo_sub')}</small></span>
      </label>`;
}

/* ---------- map picker ---------- */
let leafletPromise = null, pinMap = null, pinMarker = null, itemMap = null, pinMapStarting = null;

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (leafletPromise) return leafletPromise;
  leafletPromise = new Promise(resolve => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(css);
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => resolve(window.L || null);
    script.onerror = () => { leafletPromise = null; resolve(null); };
    document.head.appendChild(script);
    setTimeout(() => { if (!window.L) { leafletPromise = null; resolve(null); } }, 9000);
  });
  return leafletPromise;
}

function destroyMaps() {
  if (pinMap) { try { pinMap.remove(); } catch (e) {} pinMap = null; pinMarker = null; }
  if (itemMap) { try { itemMap.remove(); } catch (e) {} itemMap = null; }
}

function toggleMapPicker() {
  const block = $('#mapBlock');
  const btn = $('#mapToggle');
  if (!block) return;
  const show = block.style.display === 'none';
  block.style.display = show ? 'block' : 'none';
  if (btn) btn.textContent = show ? t('hide_map') : t('pin_on_map');
  if (show) initPinMap();
}

function updateLocSummary() {
  const s = $('#locSummary');
  if (!s) return;
  s.innerHTML = draftLoc
    ? `<span class="loc-ok">${t('loc_pinned')} ${draftLoc.lat.toFixed(5)}, ${draftLoc.lng.toFixed(5)}</span>`
    : `<span class="mut">${t('loc_optional')}</span>`;
}

function setDraftLocation(lat, lng, pan) {
  draftLoc = { lat, lng };
  if (pinMap && window.L) {
    if (!pinMarker) pinMarker = window.L.marker([lat, lng]).addTo(pinMap);
    else pinMarker.setLatLng([lat, lng]);
    if (pan) pinMap.setView([lat, lng], Math.max(pinMap.getZoom(), 15));
  }
  updateLocSummary();
}

function clearPin() {
  draftLoc = null;
  if (pinMarker && pinMap) { pinMarker.remove(); pinMarker = null; }
  updateLocSummary();
  toast(t('map_pin_removed'));
}

async function initPinMap() {
  const el = $('#pickMap');
  if (!el) return;
  if (pinMap) { setTimeout(() => pinMap && pinMap.invalidateSize(), 60); return; }
  if (pinMapStarting) { await pinMapStarting; return; }
  pinMapStarting = (async () => {
    const L = await loadLeaflet();
    if (!L) {
      if (document.querySelector('#pickMap')) el.innerHTML = `<p class="map-fallback">${t('map_cant_load')}</p>`;
      return;
    }
    if ($('#pickMap') !== el || pinMap) return;
    const start = draftLoc ? [draftLoc.lat, draftLoc.lng] : [8.0667, 123.75];
    pinMap = L.map(el, { zoomControl:true, scrollWheelZoom:false }).setView(start, draftLoc ? 16 : 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'&copy; OpenStreetMap' }).addTo(pinMap);
    if (draftLoc) pinMarker = L.marker(start).addTo(pinMap);
    pinMap.on('click', e => setDraftLocation(e.latlng.lat, e.latlng.lng, false));
    setTimeout(() => pinMap && pinMap.invalidateSize(), 60);
  })();
  try {
    await pinMapStarting;
  } finally {
    pinMapStarting = null;
  }
}

async function useMyLocation() {
  if (!navigator.geolocation) return toast(t('map_loc_na'));
  toast(t('photo_optimizing'));
  navigator.geolocation.getCurrentPosition(async pos => {
    const block = $('#mapBlock');
    if (block && block.style.display === 'none') toggleMapPicker();
    await initPinMap();
    setDraftLocation(pos.coords.latitude, pos.coords.longitude, true);
    toast(t('map_pinned_me'));
  }, () => toast(t('map_loc_fail')), { enableHighAccuracy:true, timeout:8000 });
}

async function showItemMap(i) {
  const el = $('#itemMap');
  if (!el) return;
  const L = await loadLeaflet();
  if (!L || $('#itemMap') !== el) {
    if ($('#itemMap') === el) el.innerHTML = `<a class="map-link" href="https://www.openstreetmap.org/?mlat=${i.lat}&mlon=${i.lng}#map=17/${i.lat}/${i.lng}" target="_blank" rel="noopener">${t('open_maps')}</a>`;
    return;
  }
  if (itemMap) { try { itemMap.remove(); } catch (e) {} itemMap = null; }
  itemMap = L.map(el, { scrollWheelZoom:false, zoomControl:true }).setView([i.lat, i.lng], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'&copy; OpenStreetMap' }).addTo(itemMap);
  L.marker([i.lat, i.lng]).addTo(itemMap);
  setTimeout(() => itemMap && itemMap.invalidateSize(), 60);
}

/* ---------- claims ---------- */
function openClaim(id) {
  const i = S.items.find(x => x.id == id);
  const n = S.claims.filter(c => c.item == id && c.by == me).length;
  if (i.status !== 'open') return modal(`<h2>${t('already_claimed')}</h2><p class="mut">${t('already_claimed_p')}</p>`);
  if (n >= 3) return modal(`<h2>${t('locked')}</h2><p class="mut">${t('locked_p')}</p>`);
  modal(`<span class="eyebrow small">${t('ownership_check')}</span><h2>${t('verify_yours')}</h2>
    <p class="mut">${t('verify_desc')}</p>
    <span class="attempts">${t('attempt')} ${n + 1} ${t('of')} 3</span>
    ${i.qa.map(q => `<label>${E(q.q)}</label><input class="ans" placeholder="${t('your_answer')}" autocomplete="off">`).join('')}
    <div class="cta end"><button class="btn pri" onclick="claim(${id})">${t('submit_claim')}</button></div>`);
}

const nm = s => String(s).toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();

function claim(id) {
  const i = S.items.find(x => x.id == id);
  const ans = [...document.querySelectorAll('.ans')].map(x => x.value.trim());
  if (ans.some(a => !a)) return toast(t('toast_fill_answers'));
  const score = i.qa.filter((q, k) => {
    const a = nm(ans[k]), b = nm(q.a);
    return a && b && (a == b || a.includes(b) || b.includes(a));
  }).length;
  const pass = score == i.qa.length;
  S.claims.push({ id: Date.now(), item: id, by: me, ans, score, state: pass ? 'verified' : 'failed' });
  if (pass) i.status = 'verified';
  save();
  render();
  const left = 3 - S.claims.filter(c => c.item == id && c.by == me).length;
  if (pass) modal(`<h2>${t('verified_title')}</h2><p>${t('verified_p', {name: E(i.by)})}</p><div class="cta start"><button class="btn ok" onclick="startChat('${i.by}',${id})">${IC.send} ${t('message_finder')} ${E(i.by)}</button></div>`);
  else modal(`<h2>${t('verify_failed')}</h2><p class="mut">${t('verify_failed_p', {left: left > 0 ? t('attempts_left', {n: left}) : t('no_attempts_left')})}</p>`);
}

function review(cid, ok) {
  const c = S.claims.find(x => x.id == cid), i = S.items.find(x => x.id == c.item);
  c.state = ok ? 'approved' : 'rejected';
  if (ok) i.status = 'verified';
  else if (!S.claims.some(x => x.item == i.id && x.state == 'pending')) i.status = 'open';
  save(); render(); openItem(i.id);
  toast(ok ? t('toast_approved') : t('toast_rejected'));
}

function ret(id) {
  S.items.find(x => x.id == id).status = 'returned';
  save(); closeM(); render();
  toast(t('toast_returned'));
}
/* ---------- new post ---------- */
function openPost() {
  photoDraft = null;
  draftLoc = null;
  const qaSamples = lang === 'ceb'
    ? [['Unsa ang wallpaper sa lock-screen?', 'pananglitan: sunset beach'], ['Unsa ang sulod?', 'pananglitan: asul nga ribbon'], ['Aduna bay gasgas o sticker?', 'pananglitan: bituon']]
    : [['Ano ang wallpaper sa lock-screen?', 'hal. sunset beach'], ['Ano ang nasa loob?', 'hal. asul na ribbon'], ['May gasgas o sticker ba?', 'hal. bituin']];
  modal(`<span class="eyebrow small">${t('new_post')}</span><h2>${t('post_item_title')}</h2>
    <p class="mut">${t('post_item_desc')}</p>
    <div class="form-grid">
      <div><label>${t('type')}</label><select id="pt" onchange="$('#qs').style.display=this.value=='found'?'block':'none'"><option value="lost">${t('type_lost')}</option><option value="found">${t('type_found')}</option></select></div>
      <div><label>${t('category')}</label><select id="pc">${Object.keys(CAT).map(c => `<option value="${c}">${catLabel(c)}</option>`).join('')}</select></div>
    </div>
    <label>${t('title_label')}</label><input id="ptitle" placeholder="${t('title_ph')}">
    <label>${t('desc_label')}</label><textarea id="pd" rows="2" placeholder="${t('desc_ph')}"></textarea>
    <label>${t('photo_label')} <span class="label-opt">${t('optional')}</span></label>
    <div id="photoField"></div>
    <label>${t('place_label')}</label><input id="pp" placeholder="${t('place_ph')}">
    <div class="loc-row">
      <p class="loc-summary" id="locSummary"></p>
      <button type="button" class="btn ghost sm" id="mapToggle" onclick="toggleMapPicker()">${t('pin_on_map')}</button>
    </div>
    <div class="map-block" id="mapBlock" style="display:none">
      <div id="pickMap" class="pick-map"></div>
      <div class="map-actions">
        <button type="button" class="btn ghost sm" onclick="useMyLocation()">${t('use_my_location')}</button>
        <button type="button" class="btn ghost sm" onclick="clearPin()">${t('remove_pin')}</button>
        <span class="map-help">${t('map_help')}</span>
      </div>
    </div>
    <div id="qs" class="qa-block" style="display:none">
      <label style="margin-top:0">${t('qa_label')}</label>
      <p class="mut" style="font-size:.78rem;margin:0 0 10px">${t('qa_hint')}</p>
      ${qaSamples.map(p => `<div class="qa"><input placeholder="${p[0]}" value="${p[0]}"><input placeholder="${p[1]}" autocomplete="off"></div>`).join('')}
    </div>
    <div class="cta end"><button class="btn pri" onclick="submitPost()">${t('publish')}</button></div>`);
  renderPhotoField();
  updateLocSummary();
}

function submitPost() {
  const type = $('#pt').value;
  const title = $('#ptitle').value.trim();
  const qa = [...document.querySelectorAll('#qs .qa')].map(r => ({ q: r.children[0].value.trim(), a: r.children[1].value.trim() })).filter(x => x.q && x.a);
  if (!title) return toast(t('toast_add_title'));
  if (type == 'found' && qa.length < 2) return toast(t('toast_add_questions'));
  const item = { id: Date.now(), type, title, cat: $('#pc').value, desc: $('#pd').value.trim() || t('no_desc'), place: $('#pp').value.trim() || t('place_default'), by: me, date: t('just_now'), status: 'open', qa: type == 'found' ? qa : [] };
  if (photoDraft) item.photo = photoDraft;
  if (draftLoc) { item.lat = draftLoc.lat; item.lng = draftLoc.lng; }
  S.items.unshift(item);
  if (!save()) { S.items.shift(); return; }
  photoDraft = null;
  draftLoc = null;
  closeM(); location.hash = 'board'; render();
  toast(t('toast_posted'));
}

/* ---------- messaging ---------- */
const key = o => [me, o].sort().join('|');
const other = k => k.split('|').find(x => x != me);
const bubble = m => `<div class="b ${m.f == me ? 'me' : ''}">${m.f == me ? '' : `<small>${E(displayName(m.f))}</small>`}<span>${E(m.t)}</span></div>`;

function startChat(o, id) {
  const i = S.items.find(x => x.id == id), k = key(o);
  if (!S.chats[k]) S.chats[k] = [];
  S.chats[k].push({ f: me, t: t('msg_intro', {o, title: i.title}) });
  chat = k; save(); closeM(); location.hash = 'messages'; render(); reply(k);
}

function reply(k) {
  const R = [t('reply1'), t('reply2'), t('reply3')];
  const o = other(k);
  if (!o) return;
  setTimeout(() => {
    (S.chats[k] = S.chats[k] || []).push({ f: o, t: R[S.chats[k].length % 3] });
    save();
    if (location.hash == '#messages' && chat == k && me != o) render();
  }, 1400);
}

function messages() {
  const dms = Object.keys(S.chats).filter(k => k != 'g' && k.split('|').includes(me));
  const gLog = S.chats['g'] || [];
  if (gLog.length === 1 && gLog[0].f === 'Barangay Hall' && gLog[0].t.indexOf('Welcome to the FoundIT community chat') === 0) gLog[0].t = t('community_welcome');
  const log = S.chats[chat] || [];
  const activeName = chat == 'g' ? 'Barangay Silanga' : (other(chat) || 'Neighbor');
  const preview = k => { const m = S.chats[k] || []; return m.length ? m[m.length - 1].t : t('say_hello'); };
  const thread = (k, name, sub, ic) => `<button class="th ${chat == k ? 'on' : ''}" onclick="chat='${k}';render()">${ic || avatar(name)}<span class="th-txt"><b>${E(name)}</b><small>${E(sub)}</small></span></button>`;

  return `<section class="sec msg-sec">
    <div class="sec-head">
      <div><span class="eyebrow small">${t('msg_eyebrow')}</span><h2>${t('msg_title')}</h2><p class="mut">${t('msg_desc')}</p></div>
    </div>
    <div class="msg">
      <div class="threads">
        <div class="threads-head"><b>${t('chats')}</b><span class="badge">${t('demo')}</span></div>
        <div class="thread-list">
          ${thread('g', 'Barangay Silanga', t('community_chat'), '<span class="avatar community" aria-hidden="true">📢</span>')}
          ${dms.map(k => thread(k, other(k), preview(k), avatar(other(k)))).join('') || `<p class="thread-empty mut">${t('no_private')}</p>`}
        </div>
      </div>
      <div class="chat-panel">
        <div class="chat-head">
          ${chat == 'g' ? '<span class="avatar community" aria-hidden="true">📢</span>' : avatar(activeName)}
          <div><b>${E(activeName)}</b><span class="online"><i></i>${chat == 'g' ? t('everyone') : t('verified_resident')}</span></div>
        </div>
        <div class="log" id="log">${log.map(bubble).join('') || `<div class="chat-empty"><span>💬</span><b>${t('no_messages')}</b><span>${t('no_messages_sub')}</span></div>`}</div>
        <div class="send"><input id="mi" placeholder="${t('write_message')}" aria-label="${E(t('aria_message'))}" onkeydown="if(event.key==='Enter')send()"><button class="send-btn" onclick="send()" aria-label="${E(t('aria_send'))}">${IC.send}</button></div>
      </div>
    </div>
    <p class="demo-note mut">${t('demo_note')}</p>
  </section>
  ${siteFooter()}`;
}

function send() {
  const v = $('#mi').value.trim();
  if (!v) return;
  (S.chats[chat] = S.chats[chat] || []).push({ f: me, t: v });
  save(); render();
  if (chat != 'g') reply(chat);
  requestAnimationFrame(() => { const l = $('#log'); if (l) l.scrollTop = l.scrollHeight; });
}

/* ---------- boot ---------- */
$('#who').innerHTML = USERS.map(u => `<option>${u}</option>`).join('');
applyStaticI18n();
render();


