NDSummary.OnToolTipsLoaded("CClass:SyncSamplingNetwork",{2160:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2160\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncSamplingNetwork</div></div></div><div class=\"TTSummary\">Used to configure and start a Synchronized Sampling network of wireless nodes.</div></div>",2161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2161\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> SyncSamplingNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">networkBaseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncSamplingNetwork object used to configure and start a Synchronized Sampling network.</div></div>",2162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2162\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",2163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pendingConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",2164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2164\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a WirelessNode from the Sync Sampling network, if it exists in the network.</div></div>",2165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentBandwidth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total percent bandwidth for the Sync Sampling Network.&nbsp; This includes nodes that could not find TDMA slots, but does not include nodes who failed to communicate (status of &lt;status_PoorCommunication&gt;).</div></div>",2166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2166\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ok() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Sync Sampling Network is OK (true), or has problems such as exceeding bandwidth (false).</div></div>",2167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> refresh()</div><div class=\"TTSummary\">Refreshes the Sync Sampling Network.&nbsp; This function must be called when any WirelessNode has changed its configuration after being added to the network!</div></div>",2168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2168\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> lossless() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the lossless option is enabled or not for the entire network (default of enabled).&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This does, however, have a possible increase in latency, especially in poor RF environments.</div></div>",2169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2169\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> lossless(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or Disables the lossless option for the entire network. If changed, refresh will be called.&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This can, however, cause a possible increase in latency, especially in poor RF environments.</div></div>",2170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2170\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol that is set for the network.&nbsp; This setting initially gets loaded from the protocol that the BaseStation is configured for when the network is first created.</div></div>",2171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> communicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::CommProtocol for the network.&nbsp; The initial communicationProtocol is set to whichever mode the BaseStation was configured for when the network was first created.&nbsp; Changing this setting will call refresh and the network calculations (such as percentBandwidth) will be updated.&nbsp; Note: Changing this does not actually change the protocol of the BaseStation or Nodes in the network. All devices must be changed to the same WirelessTypes::CommProtocol that the network is set to before applyConfiguration is called, or else an exception will be thrown.</div></div>",2172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyConfiguration()</div><div class=\"TTSummary\">Applies the Sync Sampling network settings to all of the nodes in the network.&nbsp; This action is required before starting a Sync Sampling network. The network status must be OK before this can be called.&nbsp; Calling this function repeatedly will only affect the node\'s that haven\'t had their configuration applied successfully. This can be useful if some nodes successfully apply, while others fail to communicate.&nbsp; Note: This will clear any &quot;pending&quot; configurations that any nodes have in the network.&nbsp; You must manually apply those configuration templates to the nodes if you want them to actually be applied to the devices.</div></div>",2173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2173\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling()</div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the current system time.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",2174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2174\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startSampling(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Timestamp&nbsp;</td><td class=\"PName last\">startTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the given Timestamp.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",2175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling_noBeacon()</div><div class=\"TTSummary\">Sends the start command to each node in the network. The beacon is not started. Note: The nodes will not actually start sampling until they hear a beacon.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate.</div></div>",2176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNetworkInfo&amp; getNodeNetworkInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the SyncNetworkInfo object containing network information on the specified WirelessNode within the Sync Sampling network.</div></div>"});