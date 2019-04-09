NDSummary.OnToolTipsLoaded("File:Communication/ConnectionDebugData.h",{74:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype74\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConnectionDebugData</div></div></div><div class=\"TTSummary\">Holds data used when the Connection debug mode is enabled.</div></div>",76:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype76\" class=\"NDPrototype NoParameterForm\">ConnectionDebugData()</div><div class=\"TTSummary\">Creates an empty ConnectionDebugData object.</div></div>",77:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype77\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConnectionDebugData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">fromRead,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ConnectionDebugData object.</div></div>",79:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype79\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_fromRead</div><div class=\"TTSummary\">Whether the debug data is from a read operation (true) or a write operation (false).</div></div>",80:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype80\" class=\"NDPrototype NoParameterForm\">Timestamp m_loggedTime</div><div class=\"TTSummary\">The Timestamp of when the debug data was collected.</div></div>",81:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype81\" class=\"NDPrototype NoParameterForm\">Bytes m_data</div><div class=\"TTSummary\">The Bytes that were read from or written to the connection.</div></div>",83:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype83\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> fromRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the debug data is from a read operation or a write operation.</div></div>",84:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype84\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the debug data was collected.</div></div>",85:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype85\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Bytes that were read from or written to the connection.</div></div>",87:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of ConnectionDebugData objects.</div></div>"});