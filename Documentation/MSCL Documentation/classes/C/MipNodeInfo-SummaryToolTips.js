NDSummary.OnToolTipsLoaded("CClass:MipNodeInfo",{2014:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2014\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNodeInfo</div></div></div><div class=\"TTSummary\">Contains basic information about a MipNode.</div></div>",2016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2016\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",2017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2017\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipNodeInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDeviceInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">supportedDescriptors,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRates&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sensorRates,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRates&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">gnssRates,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRates&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">estFilterRates,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRates&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">displacementRates</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipNodeInfo object.</div></div>",2019:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNode_Impl* m_node</div><div class=\"TTSummary\">The MipNode_Impl to use for lazy loading of values.</div></div>",2020:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2020\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;MipDeviceInfo&gt; m_deviceInfo</div><div class=\"TTSummary\">The MipDeviceInfo of the Node (lazy loaded).</div></div>",2021:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2021\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&gt; m_descriptors</div><div class=\"TTSummary\">A vector of descriptors supported by the Node (lazy loaded).</div></div>",2022:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2022\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SampleRates&gt; m_ahrsImuSampleRates</div><div class=\"TTSummary\">Contains the sample rates for the Sensor group (lazy loaded).</div></div>",2023:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2023\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SampleRates&gt; m_gnssSampleRates</div><div class=\"TTSummary\">Contains the sample rates for the GNSS group (lazy loaded).</div></div>",2024:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2024\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SampleRates&gt; m_estfilterSampleRates</div><div class=\"TTSummary\">Contains the sample rates for the Estimation Filter group (lazy loaded).</div></div>",2025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2025\" class=\"NDPrototype NoParameterForm\">Utils::Lazy&lt;SampleRates&gt; m_displacementSampleRates</div><div class=\"TTSummary\">Contains the sample rates for the Displacement group (lazy loaded).</div></div>",2027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2027\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDeviceInfo&amp; deviceInfo() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipDeviceInfo of the Node.</div></div>",2028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2028\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&amp; descriptors() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a vector of the descriptors supported by the Node.</div></div>",2029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2029\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRates&amp; supportedSampleRates(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the SampleRates supported by the Node for the given MipTypes::DataClass.</div></div>"});