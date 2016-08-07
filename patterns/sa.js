// Hyphenation patterns for Sanskrit and Prakrit
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-sa.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsSa = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% GENERAL RULE
% Do not break either side of ZERO-WIDTH JOINER
% (U+200D) and ZERO-WIDTH NON-JOINER (U+200C)
% (Maybe this should be implemented/supported in engines already.)
2‍2
2‌2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% TRANSLITERATION
%%%%%%%%%%%%%%%%%%%%
% Decomposed characters
% Break after any vowel, except inside a diphthong.
a1
ā1
i1
ï1
ī1
u1
ü1
ū1
r̥1
ṛ1
r̥̄1
ṝ1
l̥1
ḷ1
l̥̄1
ḹ1
e1
o1
a2i1
a2u1
% Break between a and i or u in hiatus.
a3ï1
a3ü1
% Do not break before a final consonant or consonant cluster.
2k.
2kh.
2g.
2gh.
2ṅ.
2c.
2ch.
2j.
2jh.
2ñ.
2ṭ.
2ṭh.
2ḍ.
2ḍh.
2ṇ.
2t.
2th.
2d.
2dh.
2n.
2p.
2ph.
2b.
2bh.
2m.
2y.
2r.
2l.
2ḷ.
2v.
2ś.
2ṣ.
2s.
2h.
2rk.
2rg.
2rṭ.
2rḍ.
2rt.
2rd.
2rp.
2rb.
% Break after anusvara, anunasika, visarga, jihvamuliya and
% upadhmaniya, but not before.
2ṃ1
2ṁ1
2m̐1
2ḥ1
2ẖ1
2ḫ1
% Do not break before a breve below, a candrabindu, a macron,
% a macron below, an acute, a grave or a diaeresis; break after
% a macron below, an acute or a grave.
2̮
2̐
2̄
2̱1
2́1
2̀1
2̈
%%%%%%%%%%%%%%%%%%%%
% Precomposed characters
% Break after any vowel, except inside a diphthong.
á1
à1
ā1
í1
ì1
ï1
ī1
ú1
ù1
ü1
ū1
é1
è1
ó1
ò1
a2í1
a2ì1
a2ú1
a2ù1
% Break between a and i or u in hiatus.
a3ï1
a3ü1
% Do not break before a final consonant or consonant cluster.
2ṅ.
2ñ.
2ṭ.
2ṭh.
2ḍ.
2ḍh.
2ṇ.
2ḷ.
2ś.
2ṣ.
2rṭ.
2rḍ.
% Break after anusvara, visarga, jihvamuliya and upadhmaniya,
% but not before.
2ṃ1
2ṁ1
2ḥ1
2ẖ1
2ḫ1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% DEVANAGARI SCRIPT
% Break before or after any independent vowel.
1अ1
1आ1
1इ1
1ई1
1उ1
1ऊ1
1ऋ1
1ॠ1
1ऌ1
1ॡ1
1ए1
1ऐ1
1ओ1
1औ1
% Break after any dependent vowel but not before.
2ा1
2ि1
2ी1
2ु1
2ू1
2ृ1
2ॄ1
2ॢ1
2ॣ1
2े1
2ै1
2ो1
2ौ1
% Break before or after any consonant.
1क1
1ख1
1ग1
1घ1
1ङ1
1च1
1छ1
1ज1
1झ1
1ञ1
1ट1
1ठ1
1ड1
1ढ1
1ण1
1त1
1थ1
1द1
1ध1
1न1
1प1
1फ1
1ब1
1भ1
1म1
1य1
1र1
1ल1
1ळ1
1व1
1श1
1ष1
1स1
1ह1
% Do not break before a final consonant or conjunct.
2क्.
2ख्.
2ग्.
2घ्.
2ङ्.
2च्.
2छ्.
2ज्.
2झ्.
2ञ्.
2ट्.
2ठ्.
2ड्.
2ढ्.
2ण्.
2त्.
2थ्.
2द्.
2ध्.
2न्.
2प्.
2फ्.
2ब्.
2भ्.
2म्.
2य्.
2र्.
2ल्.
2ळ्.
2व्.
2श्.
2ष्.
2स्.
2ह्.
2र्क्.
2र्ट्.
2र्त्.
2र्प्.
% Do not break before chandrabindu, anusvara, visarga, avagraha
% and accents; do not break after avagraha.
2ँ
2ं
2ः
2ऽ2
2॑
2॒
% Do not break either side of virama (may be within conjunct).
2्2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% BENGALI SCRIPT
% Break before or after any independent vowel.
1অ1
1আ1
1ই1
1ঈ1
1উ1
1ঊ1
1ঋ1
1ৠ1
1ঌ1
1ৡ1
1এ1
1ঐ1
1ও1
1ঔ1
% Break after any dependent vowel, but not before.
2া1
2ি1
2ী1
2ু1
2ূ1
2ৃ1
2ৄ1
2ৢ1
2ৣ1
2ে1
2ৈ1
2ো1
2ৌ1
% Break before or after any consonant.
1ক1
1খ1
1গ1
1ঘ1
1ঙ1
1চ1
1ছ1
1জ1
1ঝ1
1ঞ1
1ট1
1ঠ1
1ড1
1ড়1
1ঢ1
1ঢ়1
1ণ1
1ত1
1থ1
1দ1
1ধ1
1ন1
1প1
1ফ1
1ব1
1ভ1
1ম1
1য1
1য়1
1র1
1ল1
1শ1
1ষ1
1স1
1হ1
% Do not break after khanda ta.
1ৎ2
% Do not break before a final consonant or conjunct.
2ক্.
2খ্.
2গ্.
2ঘ্.
2ঙ্.
2চ্.
2ছ্.
2জ্.
2ঝ্.
2ঞ্.
2ট্.
2ঠ্.
2ড্.
2ড়্.
2ঢ্.
2ঢ়্.
2ণ্.
2ত্.
2থ্.
2দ্.
2ধ্.
2ন্.
2প্.
2ফ্.
2ব্.
2ভ্.
2ম্.
2য্.
2য়্.
2র্.
2ল্.
2শ্.
2ষ্.
2স্.
2হ্.
2র্ক.
2র্ট.
2র্ত.
2র্প.
% Do not break before chandrabindu, anusvara, visarga, avagraha,
% nukta and au length mark; do not break after avagraha.
2ঁ
2ং
2ঃ
2ঽ2
2়
2ৗ
% Do not break either side of virama (may be within conjunct).
2্2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% GUJARATI SCRIPT
% Break before or after any independent vowel.
1અ1
1આ1
1ઇ1
1ઈ1
1ઉ1
1ઊ1
1ઋ1
1ૠ1
1ઌ1
1ૡ1
1એ1
1ઐ1
1ઓ1
1ઔ1
% Break after any dependent vowel but not before.
2ા1
2િ1
2ી1
2ુ1
2ૂ1
2ૃ1
2ૄ1
2ૢ1
2ૣ1
2ે1
2ૈ1
2ો1
2ૌ1
% Break before or after any consonant.
1ક1
1ખ1
1ગ1
1ઘ1
1ઙ1
1ચ1
1છ1
1જ1
1ઝ1
1ઞ1
1ટ1
1ઠ1
1ડ1
1ઢ1
1ણ1
1ત1
1થ1
1દ1
1ધ1
1ન1
1પ1
1ફ1
1બ1
1ભ1
1મ1
1ય1
1ર1
1લ1
1ળ1
1વ1
1શ1
1ષ1
1સ1
1હ1
% Do not break before a final consonant or conjunct.
2ક્.
2ખ્.
2ગ્.
2ઘ્.
2ઙ્.
2ચ્.
2છ્.
2જ્.
2ઝ્.
2ઞ્.
2ટ્.
2ઠ્.
2ડ્.
2ઢ્.
2ણ્.
2ત્.
2થ્.
2દ્.
2ધ્.
2ન્.
2પ્.
2ફ્.
2બ્.
2ભ્.
2મ્.
2ય્.
2ર્.
2લ્.
2ળ્.
2વ્.
2શ્.
2ષ્.
2સ્.
2હ્.
2ર્ક.
2ર્ટ.
2ર્ત.
2ર્પ.
% Do not break before chandrabindu, anusvara, visarga, avagraha;
% do not break after avagraha.
2ઁ
2ં
2ઃ
2ઽ2
% Do not break either side of virama (may be within conjunct).
2્2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% KANNADA SCRIPT
% Break before or after any independent vowel.
1ಅ1
1ಆ1
1ಇ1
1ಈ1
1ಉ1
1ಊ1
1ಋ1
1ೠ1
1ಌ1
1ೡ1
1ಎ1
1ಏ1
1ಐ1
1ಒ1
1ಓ1
1ಔ1
% Break after any dependent vowel, but not before.
2ಾ1
2ಿ1
2ೀ1
2ು1
2ೂ1
2ೃ1
2ೄ1
2ೆ1
2ೇ1
2ೈ1
2ೊ1
2ೋ1
2ೌ1
% Break before or after any consonant.
1ಕ1
1ಖ1
1ಗ1
1ಘ1
1ಙ1
1ಚ1
1ಛ1
1ಜ1
1ಝ1
1ಞ1
1ಟ1
1ಠ1
1ಡ1
1ಢ1
1ಣ1
1ತ1
1ಥ1
1ದ1
1ಧ1
1ನ1
1ಪ1
1ಫ1
1ಬ1
1ಭ1
1ಮ1
1ಯ1
1ರ1
1ಱ1 % can occur in Sanskrit?
1ಲ1
1ಳ1
1ೞ1 % can occur in Sanskrit?
1ವ1
1ಶ1
1ಷ1
1ಸ1
1ಹ1
% Do not break before a final consonant or conjunct.
2ಕ್.
2ಖ್.
2ಗ್.
2ಘ್.
2ಙ್.
2ಚ್.
2ಛ್.
2ಜ್.
2ಝ್.
2ಞ್.
2ಟ್.
2ಠ್.
2ಡ್.
2ಢ್.
2ಣ್.
2ತ್.
2ಥ್.
2ದ್.
2ಧ್.
2ನ್.
2ಪ್.
2ಫ್.
2ಬ್.
2ಭ್.
2ಮ್.
2ಯ್.
2ರ್.
2ಱ್. % can occur in Sanskrit?
2ಲ್.
2ಳ್.
2ವ್.
2ಶ್.
2ಷ್.
2ಸ್.
2ಹ್.
2ರ್ಕ.
2ರ್ಟ.
2ರ್ತ.
2ರ್ಪ.
% Do not break before anusvara, visarga, jihvamuliya,
% upadhmaniya, avagraha, length mark and ai length mark;
% do not break after avagraha.
2ಂ
2ಃ
2ೱ
2ೲ
2ಽ2
2ೕ
2ೖ
% Do not break either side of virama (may be within conjunct).
2್2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% MALAYALAM SCRIPT
% Break before or after any independent vowel.
1അ1
1ആ1
1ഇ1
1ഈ1
1ഉ1
1ഊ1
1ഋ1
1ൠ1
1ഌ1
1ൡ1
1എ1
1ഏ1
1ഐ1
1ഒ1
1ഓ1
1ഔ1
% Break after any dependent vowel, but not before.
2ാ1
2ി1
2ീ1
2ു1
2ൂ1
2ൃ1
2െ1
2േ1
2ൈ1
2ൊ1
2ോ1
2ൌ1
% Break before or after any consonant.
1ക1
1ഖ1
1ഗ1
1ഘ1
1ങ1
1ച1
1ഛ1
1ജ1
1ഝ1
1ഞ1
1ട1
1ഠ1
1ഡ1
1ഢ1
1ണ1
1ത1
1ഥ1
1ദ1
1ധ1
1ന1
1പ1
1ഫ1
1ബ1
1ഭ1
1മ1
1യ1
1ര1
1റ1 % can occur in Sanskrit?
1ല1
1ള1
1ഴ1 % can occur in Sanskrit?
1വ1
1ശ1
1ഷ1
1സ1
1ഹ1
% Do not break before a final consonant or conjunct.
2ക്.
2ഖ്.
2ഗ്.
2ഘ്.
2ങ്.
2ച്.
2ഛ്.
2ജ്.
2ഝ്.
2ഞ്.
2ട്.
2ഠ്.
2ഡ്.
2ഢ്.
2ണ്.
2ത്.
2ഥ്.
2ദ്.
2ധ്.
2ന്.
2പ്.
2ഫ്.
2ബ്.
2ഭ്.
2മ്.
2യ്.
2ര്.
2റ്. % can occur in Sanskrit?
2ല്.
2ള്.
2ഴ്. % can occur in Sanskrit?
2വ്.
2ശ്.
2ഷ്.
2സ്.
2ഹ്.
2ര്ക.
2ര്ട.
2ര്ത.
2ര്പ.
% Do not break before a chillu.
%% Representation in Unicode 5.1:
2ൺ1
2ൻ1
2ർ1
2ൽ1
2ൾ1
2ൿ1
%% Representation in Unicode 5.0 and prior versions (i.e. NNA, NA, RA, LA, TA, LLA or KA + VIRAMA + ZWJ):
2ണ്‍1
2ന്‍1
2ര്‍1
2ല്‍1
2ത്‍1
2ള്‍1
2ക്‍1
% Do not break before anusvara, visarga and length mark.
2ം
2ഃ
2ൗ
% Do not break either side of virama (may be within conjunct).
2്2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% TELUGU SCRIPT
% Break before or after any independent vowel.
1అ1
1ఆ1
1ఇ1
1ఈ1
1ఉ1
1ఊ1
1ఋ1
1ౠ1
1ఌ1
1ౡ1
1ఎ1
1ఏ1
1ఐ1
1ఒ1
1ఓ1
1ఔ1
% Break after any dependent vowel, but not before.
2ా1
2ి1
2ీ1
2ు1
2ూ1
2ృ1
2ౄ1
2ె1
2ే1
2ై1
2ొ1
2ో1
2ౌ1
% Break before or after any consonant.
1క1
1ఖ1
1గ1
1ఘ1
1ఙ1
1చ1
1ఛ1
1జ1
1ఝ1
1ఞ1
1ట1
1ఠ1
1డ1
1ఢ1
1ణ1
1త1
1థ1
1ద1
1ధ1
1న1
1ప1
1ఫ1
1బ1
1భ1
1మ1
1య1
1ర1
1ఱ1 % can occur in Sanskrit?
1ల1
1ళ1
1వ1
1శ1
1ష1
1స1
1హ1
% Do not break before a final consonant or conjunct.
2క్.
2ఖ్.
2గ్.
2ఘ్.
2ఙ్.
2చ్.
2ఛ్.
2జ్.
2ఝ్.
2ఞ్.
2ట్.
2ఠ్.
2డ్.
2ఢ్.
2ణ్.
2త్.
2థ్.
2ద్.
2ధ్.
2న్.
2ప్.
2ఫ్.
2బ్.
2భ్.
2మ్.
2య్.
2ర్.
2ఱ్. % can occur in Sanskrit?
2ల్.
2ళ్.
2వ్.
2శ్.
2ష్.
2స్.
2హ్.
2ర్క్.
2ర్ట్.
2ర్త్.
2ర్ప్.
% Do not break before chandrabindu, anusvara, visarga,
% length mark and ai length mark.
2ఁ
2ం
2ః
2ౕ
2ౖ
% Do not break either side of virama (may be within conjunct).
2్2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
