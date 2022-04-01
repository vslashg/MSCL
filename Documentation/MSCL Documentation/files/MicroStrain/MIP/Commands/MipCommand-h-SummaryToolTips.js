NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/MipCommand.h",{1544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1544\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_responseExpected(fn == MipTypes::FunctionSelector::READ_BACK_CURRENT_SETTINGS)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector</div></div>",1545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1545\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">vals</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_data(vals), m_responseExpected(fn == MipTypes::FunctionSelector::READ_BACK_CURRENT_SETTINGS)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector with specified data</div></div>",1546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::shared_ptr&lt;GenericMipCommand::Response&gt; createResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1547\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1548\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues getGenericResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1549\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",1550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1550\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFunctionSelectors supportedFunctionSelectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1551\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> supportsFunctionSelector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1552\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1553\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1554\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",1555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1555\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isKnownCommand() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">checks whether the command name is defined to determine if this command is defined in MSCL</div></div>"});