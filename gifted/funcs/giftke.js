function _0x5bef(_0x4b769c,_0x52c01e){const _0x2f92ee=_0x2f92();return _0x5bef=function(_0x5bef82,_0x504185){_0x5bef82=_0x5bef82-0x70;let _0x4aa4f8=_0x2f92ee[_0x5bef82];return _0x4aa4f8;},_0x5bef(_0x4b769c,_0x52c01e);}(function(_0x4fc34e,_0x278a11){const _0x487e5b=_0x5bef,_0x127ddf=_0x4fc34e();while(!![]){try{const _0x44a740=parseInt(_0x487e5b(0x86))/0x1*(-parseInt(_0x487e5b(0x92))/0x2)+parseInt(_0x487e5b(0x72))/0x3+parseInt(_0x487e5b(0x83))/0x4*(parseInt(_0x487e5b(0x93))/0x5)+-parseInt(_0x487e5b(0x73))/0x6+-parseInt(_0x487e5b(0x7d))/0x7+parseInt(_0x487e5b(0x89))/0x8+parseInt(_0x487e5b(0x8c))/0x9;if(_0x44a740===_0x278a11)break;else _0x127ddf['push'](_0x127ddf['shift']());}catch(_0x11cff7){_0x127ddf['push'](_0x127ddf['shift']());}}}(_0x2f92,0x41280));function _0x2f92(){const _0x305cbd=['groupInviteCode','test','4UHzBLQ','off','\x20off','22709eHutEs','antilink','The\x20link\x20you\x20shared\x20is\x20for\x20this\x20group,\x20so\x20you\x20won\x27t\x20be\x20removed.','351632oYmZuX','length','startsWith','4195584ilqpZY','body',',\x20please\x20do\x20not\x20share\x20group\x20links\x20in\x20this\x20group.','Antilink\x20feature\x20has\x20been\x20disabled\x20for\x20this\x20chat.','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','The\x20bot\x20needs\x20to\x20be\x20an\x20admin\x20to\x20manage\x20the\x20antilink\x20feature.','14pKlgTy','473500JUCLok','slice','match','from','groupParticipantsUpdate','1486911vZvRch','1181304prMtNL','\x20on\x0a\x20','Admins\x20are\x20allowed\x20to\x20share\x20links.','remove','The\x20owner\x20is\x20allowed\x20to\x20share\x20links.','sendMessage','Only\x20admins\x20can\x20enable\x20the\x20antilink\x20feature.','https://chat.whatsapp.com/','toLowerCase','isGroup','3344180gYdIaX','sender','split','Usage:\x20'];_0x2f92=function(){return _0x305cbd;};return _0x2f92();}import{serialize}from'../../gift/gift.js';const antilinkSettings={};export const handleAntilink=async(_0x573abd,_0x4c5c5e,_0x394a7e,_0x51f143,_0x2525cf,_0x16e0de)=>{const _0xfe3d45=_0x5bef,_0x3fefa6=/^[\\/!#.]/,_0x4239ee=_0x7c4c3c=>_0x3fefa6[_0xfe3d45(0x82)](_0x7c4c3c),_0x3bbe23=_0x4239ee(_0x573abd[_0xfe3d45(0x8d)])?_0x573abd[_0xfe3d45(0x8d)][_0xfe3d45(0x95)](_0x3fefa6):null,_0x53afe1=_0x3bbe23?_0x3bbe23[0x0]:'/',_0x80a3c7=_0x573abd[_0xfe3d45(0x8d)][_0xfe3d45(0x8b)](_0x53afe1)?_0x573abd['body']['slice'](_0x53afe1['length'])[_0xfe3d45(0x7f)]('\x20')[0x0]['toLowerCase']():'';if(_0x80a3c7===_0xfe3d45(0x87)){const _0x3a0038=_0x573abd[_0xfe3d45(0x8d)][_0xfe3d45(0x94)](_0x53afe1[_0xfe3d45(0x8a)]+_0x80a3c7[_0xfe3d45(0x8a)])['trim']()[_0xfe3d45(0x7f)](/\s+/),_0x191d6f=_0x3a0038[0x0]?_0x3a0038[0x0][_0xfe3d45(0x7b)]():'';if(!_0x573abd[_0xfe3d45(0x7c)]){await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x90)},{'quoted':_0x573abd});return;}if(!_0x51f143){await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x91)},{'quoted':_0x573abd});return;}if(_0x191d6f==='on'){_0x2525cf?(antilinkSettings[_0x573abd[_0xfe3d45(0x70)]]=!![],await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':'Antilink\x20feature\x20has\x20been\x20enabled\x20for\x20this\x20chat.'},{'quoted':_0x573abd})):await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd['from'],{'text':_0xfe3d45(0x79)},{'quoted':_0x573abd});return;}if(_0x191d6f===_0xfe3d45(0x84)){_0x2525cf?(antilinkSettings[_0x573abd['from']]=![],await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x8f)},{'quoted':_0x573abd})):await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':'Only\x20admins\x20can\x20disable\x20the\x20antilink\x20feature.'},{'quoted':_0x573abd});return;}await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x80)+(_0x53afe1+_0x80a3c7)+_0xfe3d45(0x74)+(_0x53afe1+_0x80a3c7)+_0xfe3d45(0x85)},{'quoted':_0x573abd});return;}if(antilinkSettings[_0x573abd[_0xfe3d45(0x70)]]){if(_0x573abd[_0xfe3d45(0x8d)][_0xfe3d45(0x95)](/(chat.whatsapp.com\/)/gi)){if(!_0x51f143){await _0x4c5c5e['sendMessage'](_0x573abd['from'],{'text':'The\x20bot\x20needs\x20to\x20be\x20an\x20admin\x20to\x20remove\x20links.'});return;}let _0x1ad605=_0xfe3d45(0x7a)+await _0x4c5c5e[_0xfe3d45(0x81)](_0x573abd[_0xfe3d45(0x70)]),_0x3bf54d=new RegExp(_0x1ad605,'i'),_0x51a85c=_0x3bf54d[_0xfe3d45(0x82)](_0x573abd['body']);if(_0x51a85c){await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x88)});return;}if(_0x2525cf){await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x75)});return;}if(_0x16e0de){await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':_0xfe3d45(0x77)});return;}await _0x4c5c5e[_0xfe3d45(0x78)](_0x573abd[_0xfe3d45(0x70)],{'text':'```「\x20Group\x20Link\x20Detected\x20」```\x0a\x0a@'+_0x573abd[_0xfe3d45(0x7e)][_0xfe3d45(0x7f)]('@')[0x0]+_0xfe3d45(0x8e),'contextInfo':{'mentionedJid':[_0x573abd[_0xfe3d45(0x7e)]]}},{'quoted':_0x573abd}),setTimeout(async()=>{const _0x33949f=_0xfe3d45;await _0x4c5c5e[_0x33949f(0x71)](_0x573abd[_0x33949f(0x70)],[_0x573abd['sender']],_0x33949f(0x76));},0x1388);}}};
