//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class MipChannelIdentifier : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal MipChannelIdentifier(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(MipChannelIdentifier obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~MipChannelIdentifier() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_MipChannelIdentifier(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public MipChannelIdentifier() : this(msclPINVOKE.new_MipChannelIdentifier__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipChannelIdentifier(MipChannelIdentifier.Type identifierType, uint id) : this(msclPINVOKE.new_MipChannelIdentifier__SWIG_1((int)identifierType, id), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipChannelIdentifier(MipChannelIdentifier.Type identifierType, uint id, uint specifier) : this(msclPINVOKE.new_MipChannelIdentifier__SWIG_2((int)identifierType, id, specifier), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipChannelIdentifier.Type identifierType() {
    MipChannelIdentifier.Type ret = (MipChannelIdentifier.Type)msclPINVOKE.MipChannelIdentifier_identifierType(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public uint id() {
    uint ret = msclPINVOKE.MipChannelIdentifier_id(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public bool hasSpecifier() {
    bool ret = msclPINVOKE.MipChannelIdentifier_hasSpecifier(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public uint specifier() {
    uint ret = msclPINVOKE.MipChannelIdentifier_specifier(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public string name(bool standardizedFormat) {
    string ret = msclPINVOKE.MipChannelIdentifier_name__SWIG_0(swigCPtr, standardizedFormat);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public string name() {
    string ret = msclPINVOKE.MipChannelIdentifier_name__SWIG_1(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public enum Type {
    GNSS_RECEIVER_ID,
    GNSS_BASE_STATION_ID,
    GNSS_CONSTELLATION,
    GNSS_SATELLITE_ID,
    GNSS_SIGNAL_ID,
    AIDING_MEASUREMENT_TYPE,
    SBAS_SYSTEM,
    SBAS_SATELLITE_ID,
    GNSS_RF_BAND
  }

  public enum AidingMeasurementTypes {
    GNSS = 0x01,
    DUAL_ANTENNA = 0x02,
    HEADING = 0x03,
    PRESSURE = 0x04,
    MAGNETOMETER = 0x05,
    SPEED = 0x06
  }

  public enum GnssConstellationIds {
    UNKNOWN_CONSTELLATION = 0,
    GPS = 1,
    GLONASS = 2,
    GALILEO = 3,
    BEIDOU = 4
  }

  public enum GnssSignalIds {
    UNKNOWN_SIGNAL = 0,
    GPS_L1CA = 1,
    GPS_L1P = 2,
    GPS_L1Z = 3,
    GPS_L2CA = 4,
    GPS_L2P = 5,
    GPS_L2Z = 6,
    GPS_L2CL = 7,
    GPS_L2CM = 8,
    GPS_L2CML = 9,
    GPS_L5I = 10,
    GPS_L5Q = 11,
    GPS_L5IQ = 12,
    GPS_L1CD = 13,
    GPS_L1CP = 14,
    GPS_L1CDP = 15,
    GLONASS_G1CA = 32,
    GLONASS_G1P = 33,
    GLONASS_G2C = 34,
    GLONASS_G2P = 35,
    GALILEO_E1C = 64,
    GALILEO_E1A = 65,
    GALILEO_E1B = 66,
    GALILEO_E1BC = 67,
    GALILEO_E1ABC = 68,
    GALILEO_E6C = 69,
    GALILEO_E6A = 70,
    GALILEO_E6B = 71,
    GALILEO_E6BC = 72,
    GALILEO_E6ABC = 73,
    GALILEO_E5BI = 74,
    GALILEO_E5BQ = 75,
    GALILEO_E5BIQ = 76,
    GALILEO_E5ABI = 77,
    GALILEO_E5ABQ = 78,
    GALILEO_E5ABIQ = 79,
    GALILEO_E5AI = 80,
    GALILEO_E5AQ = 81,
    GALILEO_E5AIQ = 82,
    SBAS_L1CA = 96,
    SBAS_L5I = 97,
    SBAS_L5Q = 98,
    SBAS_L5IQ = 99,
    QZSS_L1CA = 128,
    QZSS_LEXS = 129,
    QZSS_LEXL = 130,
    QZSS_LEXSL = 131,
    QZSS_L2CM = 132,
    QZSS_L2CL = 133,
    QZSS_L2CML = 134,
    QZSS_L5I = 135,
    QZSS_L5Q = 136,
    QZSS_L5IQ = 137,
    QZSS_L1CD = 138,
    QZSS_L1CP = 139,
    QZSS_L1CDP = 140,
    BEIDOU_B1I = 160,
    BEIDOU_B1Q = 161,
    BEIDOU_B1IQ = 162,
    BEIDOU_B3I = 163,
    BEIDOU_B3Q = 164,
    BEIDOU_B3IQ = 165,
    BEIDOU_B2I = 166,
    BEIDOU_B2Q = 167,
    BEIDOU_B2IQ = 168
  }

  public enum SbasSystemIds {
    UNKNOWN_SBAS_SYSTEM = 0,
    WAAS = 1,
    EGNOS = 2,
    MSAS = 3,
    GAGAN = 4
  }

  public enum GnssRfBands {
    UNKNOWN_RF_BAND = 0,
    RF_BAND_L1 = 1,
    RF_BAND_L2 = 2,
    RF_BAND_L5 = 5
  }

}

}
