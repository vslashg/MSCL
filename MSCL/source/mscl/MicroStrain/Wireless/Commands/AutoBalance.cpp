/*****************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the included
LICENSE.txt file for a copy of the full GNU General Public License.
*****************************************************************************/
#include "stdafx.h"
#include "AutoBalance.h"

namespace mscl
{
	ByteStream AutoBalance::buildCommand(NodeAddress nodeAddress, uint8 channelNumber, uint16 targetValue)
	{
		//build the command ByteStream
		ByteStream cmd;
		cmd.append_uint8(0x62);				//Command ID
		cmd.append_uint16(nodeAddress);		//Node address	(2 bytes)
		cmd.append_uint8(channelNumber);	//channel number
		cmd.append_uint16(targetValue);		//target balance value

		return cmd;
	}
}