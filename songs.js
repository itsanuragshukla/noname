var songs = [
/*{
name: "Eastside",
artist: "Halsey,Khalid",
song: "https://dl.dropbox.com/s/rmuvxmkdnr5top7/Eastside.mp3",
isPlay: false
}, 
{
name: "Travis scott x drake",
artist: "travis scott,drake",
song: "https://dl.dropbox.com/s/9agja2o0q5g1i8v/travis_Scott_x_drake.mp3",
isPlay: false
}, {
name: "Hey DJ",
artist: "CNCO,Meghan trainor ,Sean Paul",
song: "https://dl.dropbox.com/s/184zy6eyakomh6b/Hey_DJ_remix.mp3",
isPlay: false
}, {
name: "Subeme la radio english",
artist: "Enrique Iglesias",
song: "https://dl.dropbox.com/s/tzajtpppfbxvnvw/subeme_la_radio_english.mp3",
isPlay: false
}, {
name: "Subeme La radio(English) ",
artist: "Conor Maynard",
song: "https://dl.dropbox.com/s/ntemy6ikka9xz24/Subeme_conor_maynard.mp3",
isPlay: false
}, {
name: "Something Just Like This",
artist: " The Chainsmokers",
song: "https://dl.dropbox.com/s/t3sonwtkvue7ldj/Something_Just_Like_This.mp3",
isPlay: false
}, {
name: "Shape Of You",
artist: "Ed Sheeran",
song: "https://dl.dropbox.com/s/fl4dp2n550fbn20/Shape_Of_You_ed_sheeran.mp3",
isPlay: false
}, {
name: "Se&#241orita",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/x0f2kzv2pvqy7ke/Se%C3%B1orita.mp3",
isPlay: false
}, {
name: "See you again",
artist: "Charlie puth,Wiz Khalifa",
song: "https://dl.dropbox.com/s/irn0i84cqxlt3aw/see_you_again.mp3",
isPlay: false
}, {
name: "Only Human",
artist: "Jonas brothers",
song: "https://dl.dropbox.com/s/bj8aqxfr9itby3l/Only_Human.mp3",
isPlay: false
}, {
name: "On my way",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/0lk1rfbc74gyyd1/on_my_way.mp3",
isPlay: false
}, {
name: "Not over you",
artist: "Conor Maynard",
song: "https://dl.dropbox.com/s/aydrgpu3wfac6gr/Not_over_you_conor_maynard.mp3",
isPlay: false
}, {
name: "Memories",
artist: "maroon 5",
song: "https://dl.dropbox.com/s/5508apna98ufv6x/maroon_5_memories.mp3",
isPlay: false
}, {
name: "Girls Like You",
artist: "Maroon 5",
song: "https://dl.dropbox.com/s/9n13m8cyl2is4in/Maroon_5_Girls_Like_You.mp3",
isPlay: false
}, {
name: "Magenta Riddim",
artist: "DJ snake",
song: "https://dl.dropbox.com/s/dw54boj0fjpqecv/Magenta_Riddim.mp3",
isPlay: false
}, {
name: "Lost Control ft. Sorana",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/6pq3b6hphxo97iu/Lost%20Control_ft.%20Sorana.mp3",
isPlay: false
}, {
name: "Rise",
artist: "Katy perry",
song: "https://dl.dropbox.com/s/5umbo3gxw2et938/Katy_Perry_Rise.mp3",
isPlay: false
}, {
name: "Love Yourself",
artist: "Justin Bieber",
song: "https://dl.dropbox.com/s/ddblu1scccg8jhy/Justin_Bieber_Love_Yourself.mp3",
isPlay: false
}, {
name: "Let me love you",
artist: "Justin Bieber",
song: "https://dl.dropbox.com/s/6u6k42znxy9bx4z/Justin_bieber_Let_me%C3%BDlove_you.mp3",
isPlay: false
}, {
name: "Sorry",
artist: "justin bieber",
song: "https://dl.dropbox.com/s/qq9ws89peajf46b/Justin%20Bieber%20-%20Sorry%20%28Lyric%20Video%29.mp3",
isPlay: false
}, {
name: "It aint me",
artist: "Selena gomez",
song: "https://dl.dropbox.com/s/gy7ha9iq242v4vm/It_aint_me.mp3",
isPlay: false
}, {
name: "I don`t care",
artist: "justin Bieber",
song: "https://dl.dropbox.com/s/00h8p1zigssya60/i-don-t-care.mp3",
isPlay: false
}, {
name: "I don't wanna go",
artist: "Alan walker",
song: "https://dl.dropbox.com/s/3ytzafcoyj11nzl/I_don%27t_wanna_go.mp3",
isPlay: false
}, {
name: "He's a pirate",
artist: "---",
song: "https://dl.dropbox.com/s/mo3kqq64z8d5lnq/he%27s_a_pirate.mp3",
isPlay: false
}, {
name: "Faded",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/15zrpnarqvaj0vo/Faded.mp3",
isPlay: false
}, {
name: "Faded Piano Version",
artist: "---",
song: "https://dl.dropbox.com/s/9ethba2v7l4fyi7/Faded_Piano_Version.mp3",
isPlay: false
}, {
name: "Eminem Rap God",
artist: "Eminem",
song: "https://dl.dropbox.com/s/9fu40i42ul7xfjd/Eminem_Rap_God.mp3",
isPlay: false
}, {
name: "Don t Check",
artist: "Chris brown ft. Justin Bieber",
song: "https://dl.dropbox.com/s/6yt446pe249qnfo/Don_t_Check.mp3",
isPlay: false
}, {
name: "Despacito flute",
artist: "---",
song: "https://dl.dropbox.com/s/8w7pjex7mlx7tub/Despacito_flute.mp3",
isPlay: false
}, {
name: "Darkside",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/vml2n2rglcrq97d/Darkside_alan_walker.mp3",
isPlay: false
}, {
name: "Cold water",
artist: "justin bieber",
song: "https://dl.dropbox.com/s/amomiect11wmc2f/Cold_water.mp3",
isPlay: false
}, {
name: "Attention",
artist: "Charlie Puth",
song: "https://dl.dropbox.com/s/othycvedrjf97pd/Charlie_Puth_Attention.mp3",
isPlay: false
}, {
name: "Shameless",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/j5a4xdm7ykmf1uj/Camila_Cabello_Shameless.mp3",
isPlay: false
}, {
name: "Liar",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/5fnhybzntk2l6hc/Camila_Cabello_Liar.mp3",
isPlay: false
}, {
name: "Beautiful People",
artist: "Ed Sheeran ft. khalid",
song: "https://dl.dropbox.com/s/zfrop1tocfmztgv/Beautiful_People.mp3",
isPlay: false
}, {
name: "Be Alright",
artist: "Justin bieber",
song: "https://dl.dropbox.com/s/32h0hnyitw6xx8r/Be_Alright_justin_bieber.mp3",
isPlay: false
}, {
name: "Alone Part II",
artist: "Alan Walker & Ava maxx",
song: "https://dl.dropbox.com/s/ww2rxhgmeyodpd0/Alone_Part_II_Alan_ava.mp3",
isPlay: false
}, {
name: "The Spectre",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/ljct98bgj90chtj/Alan%20Walker%20%E2%80%92%20The%20Spectre%20%28Lyrics%20%20Lyrics%20Video%29.mp3",
isPlay: false
}, {
name: "Sing Me To Sleep",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/kyaigev6ul80850/Alan%20Walker%20-%20Sing%20Me%20To%20Sleep.mp3",
isPlay: false
}, {
name: "Alone",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/37guciifzllvu3p/Alan%20Walker%20-%20Alone.mp3",
isPlay: false
}, {
name: "Rockabye",
artist: "Anne Marie,Sean Paul,clean bandit",
song: "https://dl.dropbox.com/s/l6ep28cnqgoeblb/rockabye.mp3",
isPlay: false
}, {
name: "Treat you better",
artist: "Shawn Mendes",
song: "https://dl.dropbox.com/s/nzqxn5dxp6qnpn9/Treat_you_better.mp3",
isPlay: false
}, {
name: "I like me better",
artist: "Lauv",
song: "https://dl.dropbox.com/s/ab2re02nlgoiuy9/i_like_me_better.mp3",
isPlay: false
}, {
name: "Graveyard",
artist: "Halsey",
song: "https://dl.dropbox.com/s/6m6dztob39l1rwp/graveyard_halsey.mp3",
isPlay: false
}, {
name: "Burn out",
artist: "Martin garrix,justin kylo ft.Dewain whitmore",
song: "https://dl.dropbox.com/s/l3qv11wt2w0vkzx/Burn_out.mp3",
isPlay: false
}, {
name: "Small Talk",
artist: "Katy Perry",
song: "https://dl.dropbox.com/s/u3695e0dzngt241/small_talk_katy_perry.mp3",
isPlay: false
}, {
name: "Turn me on",
artist: "Kevin lytlle",
song: "https://dl.dropbox.com/s/1n1wrw4za7r116v/Turn_me_on.mp3",
isPlay: false
}, {
name: "Takeaway",
artist: "Halsey",
song: "https://dl.dropbox.com/s/jfk69jg6x0w14ip/takeaway.mp3",
isPlay: false
}, {
name: "Do it all for you",
artist: "Alan Walker",
song: "https://dl.dropbox.com/s/tvdiwlztmw21efm/do_it_all_for_you.mp3",
isPlay: false
}, {
name: "Lover",
artist: "Taylor swift",
song: "https://dl.dropbox.com/s/yjoh6xf6jucfi8j/lover.mp3",
isPlay: false
}, {
name: "Consequences",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/b05e8i5y9hay5iv/consequences.mp3",
isPlay: false
}, {
name: "I hate you",
artist: "Gnash ft.olivia o'brien",
song: "https://dl.dropbox.com/s/gfbvo4m40qq5vzl/ihateyou_iloveyou.mp3",
isPlay: false
}, {
name: "Hey DJ original",
artist: "CNCO",
song: "https://dl.dropbox.com/s/0tpppw57ylho9wp/hey_dj_cnco.mp3",
isPlay: false
}, {
name: "Hall of fame",
artist: "The script ft.will.i.am",
song: "https://dl.dropbox.com/s/v0h3bhaz4bzj145/hall_of_fame.mp3",
isPlay: false
}, {
name: "Goodbyes",
artist: "Post malone ft.young thug",
song: "https://dl.dropbox.com/s/8fjlxanaeois0xg/Goodbyes.mp3",
isPlay: false
}, {
name: "That's what I like",
artist: "Bruno mars",
song: "https://dl.dropbox.com/s/neo9d0vhasa95xf/thats_what_i_like.mp3",
isPlay: false
}, {
name: "Legends are made",
artist: "Sam tinnesz",
song: "https://dl.dropbox.com/s/iseopt3x7ecxz38/legends_are_made.mp3",
isPlay: false
}, {
name: "Old town road",
artist: "Lil nash x ft.Billy ray cyrus",
song: "https://dl.dropbox.com/s/tn44xe26lwgou93/old_town_road.mp3",
isPlay: false
}, {
name: "Original(Dolittle)",
artist: "sia",
song: "https://dl.dropbox.com/s/qzcam2bx5arcap4/original%28dolittle%29.mp3",
isPlay: false
}, {
name: "Don't let me down",
artist: "chainsmokers ft.Daya",
song: "https://dl.dropbox.com/s/mah66xeml5e3c4i/Don%27t_let_me_down.mp3",
isPlay: false
}, {
name: "Teenage Dream",
artist: "Katy perry",
song: "https://dl.dropbox.com/s/9umro9uhok5uvp5/teenage_dream.mp3",
isPlay: false
}, {
name: "Ballin",
artist: "Mustard, Roddy rich",
song: "https://dl.dropbox.com/s/sr3jgfgpt7iqytp/Ballin.mp3",
isPlay: false
}, {
name: "Billionaire",
artist: "Travie mcCoy ft.Bruno mars",
song: "https://dl.dropbox.com/s/sv7uznxalc5j9rc/Billionaire.mp3",
isPlay: false
}, {
name: "We don't talk anymore",
artist: "Charlie puth,Selena Gomez",
song: "https://dl.dropbox.com/s/se7y9pcdp87ehzp/we_don%27t_talk_anymore.mp3",
isPlay: false
}, {
name: "There's nothing holding me back",
artist: "Shawn Mendes",
song: "https://dl.dropbox.com/s/iozaqeyk3da0x0v/nothing_holding_me_back.mp3",
isPlay: false
}, {
name: "Strip that down",
artist: "Liam Payne ft.quavo",
song: "https://dl.dropbox.com/s/zvhwzfm04vb1bzg/strip_that_down.mp3",
isPlay: false
}, {
name: "That's amore",
artist: "Dean martin",
song: "https://dl.dropbox.com/s/v9ew463n72t3kh3/thats_amore.mp3",
isPlay: false
}, {
name: "Astronomia",
artist: "Tony igy",
song: "https://dl.dropbox.com/s/yjq29my5piuuanx/Astronomia.mp3",
isPlay: false
}, {
name: "Medicine",
artist: "Anth,conor maynard",
song: "https://dl.dropbox.com/s/d3w48m9foxsk2ok/Medicine.mp3",
isPlay: false
}, {
name: "Take it off",
artist: "Kesha",
song: "https://dl.dropbox.com/s/gc4d7u05rgir6n6/take_it_off.mp3",
isPlay: false
}, {
name: "My dilemma",
artist: "Selena Gomez",
song: "https://dl.dropbox.com/s/dr0yawcj1faohkn/my_delemma.mp3",
isPlay: false
}, {
name: "Blame",
artist: "Calvin Harris",
song: "https://dl.dropbox.com/s/vf1hlksma34glll/Blame.mp3",
isPlay: false
}, {
name: "Stronger",
artist: "Kelly clarkson",
song: "https://dl.dropbox.com/s/t9rxhayp2ek8y7p/Stronger.mp3",
isPlay: false
}, {
name: "Find you again",
artist: "Charlie Puth, wiz Khalifa",
song: "https://dl.dropbox.com/s/6m9p60ea1pgebl1/Find_you_again.mp3",
isPlay: false
}, {
name: "Call you mine",
artist: "The chainsmokers ft.Bebe Rexha",
song: "https://dl.dropbox.com/s/kt1tg44h1gc93kr/call_you_mine.mp3",
isPlay: false
}, {
name: "Say something",
artist: "A great big world,Christina aguilera",
song: "https://dl.dropbox.com/s/k2pyfwidl74l8ue/Say_something.mp3",
isPlay: false
}, {
name: "Subeme la radio",
artist: "Enrique Iglesias",
song: "https://dl.dropbox.com/s/z0hxvs5u9ikhiey/subeme_la_radio.mp3",
isPlay: false
}, {
name: "Never be the same",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/a4g5ucckhha3890/never_be_the_same.mp3",
isPlay: false
}, {
name: "A year without rain",
artist: "Selena Gomez",
song: "https://dl.dropbox.com/s/f622gs8qtu8sgfy/A_year_without_rain.mp3",
isPlay: false
}, {
name: "First Man",
artist: "Camila Cabello",
song: "https://dl.dropbox.com/s/podsowc8z8uop78/First_man.mp3",
isPlay: false
}, {
name: "Living proof",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/v95l5xtc7shdg9m/Living_proof.mp3",
isPlay: false
}, {
name: "Something gotta give",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/dh7ska5otr1994s/somethings_gotta_give.mp3",
isPlay: false
}, {
name: "Airplanes",
artist: "",
song: "https://dl.dropbox.com/s/j93yw3spwq0jrzs/Airplanes.mp3",
isPlay: false
}, {
name: "Friends",
artist: "Anne Marie,Marshmello",
song: "https://dl.dropbox.com/s/7lymj8g3akcalma/Friends.mp3",
isPlay: false
}, {
name: "Feel it twice",
artist: "camila cabello",
song: "https://dl.dropbox.com/s/3k2iufk3qr3jp11/feel_it_twice.mp3",
isPlay: false
}, {
name: "Cry for me",
artist: "camila cabello",
song: "https://dl.dropbox.com/s/l8p1m2bzdedpm6t/Cry_for_me.mp3",
isPlay: false
}, {
name: "Easy",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/5g3qduqby7cufw2/Easy.mp3",
isPlay: false
}, {
name: "Back to you",
artist: "Selena Gomez",
song: "https://dl.dropbox.com/s/pcms7utg5akaz7s/Back_to_you.mp3",
isPlay: false
},{
name: "Bad things",
artist: "Camila cabello",
song: "https://dl.dropbox.com/s/d76y6p28wr7n2zx/Bad_things.mp3",
isPlay: false
}, {
name: "8D sound",
artist: "---",
song: "https://dl.dropbox.com/s/1q3cylo5h361z3v/AUD-20170726-WA0014.mp3",
isPlay: false
}];*/
     {
name: "Travis scott x drake",
artist: "travis scott,drake",
song: "file:///sdcard/travis_scott_x_drake.mp3",
isPlay: false
}, {
name: "Hey DJ",
artist: "CNCO,Meghan trainor ,Sean Paul",
song: "file:///sdcard/subeme_la_radio.mp3",
isPlay: false
}, {
name: "Subeme la radio english",
artist: "Enrique Iglesias",
song: "file:///sdcard/shape_of_you_ed_sheeran.mp3",
isPlay: false
},];