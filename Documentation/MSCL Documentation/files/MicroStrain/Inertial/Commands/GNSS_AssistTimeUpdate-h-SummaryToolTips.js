NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_AssistTimeUpdate.h",{678:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype678\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_AssistTimeUpdate</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GNSS Assist TimeUpdate command.&nbsp; It is important to note that this command will get a Nack back every time after the first from power up.</div></div>",680:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype680\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandId() <span class=\"SHKeyword\">const override</span></div></div>",685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype685\" class=\"NDPrototype NoParameterForm\">ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.&nbsp; Returns: A ByteStream containing the GNSS_AssistTimeUpdate command packet</div></div>",686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype686\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">TimeUpdate&amp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",687:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype687\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GNSS_AssistTimeUpdate command.</div></div>",689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype689\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype690\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">ackNackExpected,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">dataResponseExpected</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GNSS_AssistTimeUpdate Response object</div></div>",691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype691\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeUpdate parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the assist time result</div></div>"});