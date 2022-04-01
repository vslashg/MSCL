NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/AdvancedLowPassFilterSettings.h",{1009:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1009\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AdvancedLowPassFilterSettings</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial AdvancedLowPassFilterSettings command.</div></div>",1011:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1011\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",1012:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1012\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdvancedLowPassFilterSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AdvancedLowPassFilterData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The AdvancedLowPassFilterData object to set.</div></div>",1013:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1013\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdvancedLowPassFilterSettings MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1014:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1014\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdvancedLowPassFilterData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1015\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1016:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a AdvancedLowPassFilterSettings object.&nbsp; Use Make___Command methods to create an object.</div></div>",1017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1017\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1018\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1019:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",1021:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1021\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",1022:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1022\" class=\"NDPrototype NoParameterForm\">AdvancedLowPassFilterData m_data</div><div class=\"TTSummary\">The AdvancedLowPassFilterData to send to the device.</div></div>"});