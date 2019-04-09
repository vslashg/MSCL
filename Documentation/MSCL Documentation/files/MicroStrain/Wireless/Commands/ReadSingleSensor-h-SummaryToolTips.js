NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/ReadSingleSensor.h",{2720:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2720\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadSingleSensor</div></div></div><div class=\"TTSummary\">Contains logic for the Read Single Sensor Node command</div></div>",2722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2722\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the ReadSingleSensor command packet.</div></div>",2723:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2723\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the ReadSingleSensor node command</div></div>",2725:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2725\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_sensorValue</div><div class=\"TTSummary\">The value read from the sensor.</div></div>",2727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2727\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadSingleSensor Response object</div></div>",2728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2728\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the response pattern from their current read position</div></div>",2729:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2729\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sensorValue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sensor value that was in the response to the read single sensor command.</div></div>"});