NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/FloatCommand.h",{679:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype679\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FloatCommand</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more floats.</div></div>",681:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype681\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",682:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype682\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FloatCommand MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">float</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype683\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FloatCommand MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype684\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype685\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",686:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a FloatCommand object.&nbsp; Use Make___Command methods to create an object.</div></div>",687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype687\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype688\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype689\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",691:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype691\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",692:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype692\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",693:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype693\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; m_data</div><div class=\"TTSummary\">The float data to send to the device.</div></div>"});