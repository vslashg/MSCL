NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/SyncNodeConfig.h",{4388:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4388\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNodeConfig</div></div></div><div class=\"TTSummary\">A helper class for reading and writing values used for Synchronized Sampling configuration</div></div>",4390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4390\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SyncNetworkInfo&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">networkInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNodeConfig object</div></div>",4392:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SyncNetworkInfo* m_networkInfo</div><div class=\"TTSummary\">The SyncNetworkInfo object containing information on the Node in the Sync Sampling network.</div></div>",4393:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4393\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper to use in reading and writing eeproms.</div></div>",4395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4395\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the node.</div></div>",4396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4396\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels()</div><div class=\"TTSummary\">Gets the ChannelMask of the node.</div></div>",4397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> activeChannelCount()</div><div class=\"TTSummary\">Gets the number of active channels on the node for use in Sync Sampling formulas.&nbsp; Note: this does not necessarily return the true active channel count, as some channels on some nodes don\'t count towards active channels in Sync Sampling formulas.</div></div>",4398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4398\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol commProtocol()</div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the Node.</div></div>",4399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4399\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat dataFormat()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat of the node.</div></div>",4400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4400\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod collectionMethod()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod of the node.</div></div>",4401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4401\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sweepsPerSession()</div><div class=\"TTSummary\">Gets the number of sweeps per session of the node.</div></div>",4402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4402\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode samplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode ofthe node.</div></div>",4403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4403\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sensorDelay()</div><div class=\"TTSummary\">Gets the value stored in eeprom for the sensor delay of the node.</div></div>",4404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4404\" class=\"NDPrototype NoParameterForm\">TimeSpan timeBetweenBursts()</div><div class=\"TTSummary\">Gets the time between bursts of the node.</div></div>",4405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4405\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime filterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the WirelessTypes::SettlingTime of the node for a specific channel number.</div></div>",4406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4406\" class=\"NDPrototype NoParameterForm\">DataModeMask dataMode()</div><div class=\"TTSummary\">Gets the DataModeMask of the node.</div></div>",4407:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4407\" class=\"NDPrototype NoParameterForm\">SampleRate derivedDataRate()</div><div class=\"TTSummary\">Gets the derived data rate as a SampleRate object.</div></div>",4408:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4408\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelMask derivedChannelMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the channel mask for the specified WirelessTypes::DerivedCategory as a ChannelMask.</div></div>",4409:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4409\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> diagnosticInterval()</div><div class=\"TTSummary\">Gets the diagnostic interval set on the Node.</div></div>",4410:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4410\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the transmissions per group to the node.</div></div>",4411:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4411\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the group size to the node.</div></div>",4412:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4412\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the TDMA address to the node.</div></div>",4413:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4413\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> retransmission(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">NodeRetransmission&nbsp;</td><td class=\"PName last\">reTx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the retransmission value to the node.</div></div>",4414:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4414\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> maxRetransPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxReTxPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the maximum retransmissions per burst to the node.</div></div>",4415:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4415\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyEepromChanges()</div><div class=\"TTSummary\">Resets the radio/power on the Node to apply eeprom changes that have been made.</div></div>"});