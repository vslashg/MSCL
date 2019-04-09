NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Features/BaseStationFeatures.h",{1033:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1033\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",1034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1034\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this BaseStation.</div></div>",1035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1035\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsCommunicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::CommProtocol is supported by this BaseStation.</div></div>",1036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsButtons() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Button configuration.</div></div>",1037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1037\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAnalogPairing() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Analog Pairing configuration.</div></div>",1038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1038\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsBeaconStatus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the beaconStatus command.</div></div>",1039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1039\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports RF Sweep Mode.&nbsp; Note: This checks if the standard RF sweep mode across the BaseStation\'s supported operating frequencies is supported.&nbsp; Use supportsCustomRfSweepMode to check if customizing the frequencies to be scanned is supported.</div></div>",1040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1040\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCustomRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the Custom RF Sweep Mode (providing custom frequency ranges).</div></div>",1041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1041\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> buttonCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of buttons that are supported.</div></div>",1042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1042\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> analogPortCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of analog ports that are supported.</div></div>",1043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1043\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation, for the specified WirelessTypes::CommProtocol.&nbsp; Note: This list is dependent on the &lt;WirelessTypes::RegionCode&gt; of the device. If this changes, this function should be called again.</div></div>",1044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1044\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation, for the given &lt;WirelessTypes::RegionCode&gt; and WirelessTypes::CommProtocol.</div></div>",1045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1045\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::CommProtocols commProtocols() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of WirelessTypes::CommProtocols that are supported by this BaseStation.</div></div>",1046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1046\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower maxTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>",1047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1047\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower minTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>"});