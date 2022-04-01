NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/Reset_v2.h",{3912:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3912\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Reset_v2</div></div></div><div class=\"TTSummary\">Contains logic for the Reset_v2 Node command</div></div>",3914:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3914\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\">ResetType&nbsp;</td><td class=\"PName last\">resetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the Reset_v2 command packet</div></div>",3915:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3915\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the Reset_v2 Node command</div></div>",3917:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3917\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ResetType&nbsp;</td><td class=\"PName last\">resetType,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Reset_v2 Response object</div></div>",3919:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3919\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the Long Ping response</div></div>",3920:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3920\" class=\"NDPrototype NoParameterForm\">ResetType m_resetType</div><div class=\"TTSummary\">The &lt;ResetType&gt; to match in the response.</div></div>",3922:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3922\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes</div></div>"});