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

public class NmeaMessageFormat : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal NmeaMessageFormat(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(NmeaMessageFormat obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~NmeaMessageFormat() {
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
          msclPINVOKE.delete_NmeaMessageFormat(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public static SampleRate MAX_FREQUENCY {
    get {
      global::System.IntPtr cPtr = msclPINVOKE.NmeaMessageFormat_MAX_FREQUENCY_get();
      SampleRate ret = (cPtr == global::System.IntPtr.Zero) ? null : new SampleRate(cPtr, false);
      if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
      return ret;
    } 
  }

  public NmeaMessageFormat() : this(msclPINVOKE.new_NmeaMessageFormat(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void sentenceType(NmeaMessageFormat.SentenceType type) {
    msclPINVOKE.NmeaMessageFormat_sentenceType__SWIG_0(swigCPtr, (int)type);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public NmeaMessageFormat.SentenceType sentenceType() {
    NmeaMessageFormat.SentenceType ret = (NmeaMessageFormat.SentenceType)msclPINVOKE.NmeaMessageFormat_sentenceType__SWIG_1(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void talkerId(NmeaMessageFormat.Talker id) {
    msclPINVOKE.NmeaMessageFormat_talkerId__SWIG_0(swigCPtr, (int)id);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public NmeaMessageFormat.Talker talkerId() {
    NmeaMessageFormat.Talker ret = (NmeaMessageFormat.Talker)msclPINVOKE.NmeaMessageFormat_talkerId__SWIG_1(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void sourceDataClass(MipTypes.DataClass dataClass, ushort baseRate) {
    msclPINVOKE.NmeaMessageFormat_sourceDataClass__SWIG_0(swigCPtr, (int)dataClass, baseRate);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void sourceDataClass(MipTypes.DataClass dataClass) {
    msclPINVOKE.NmeaMessageFormat_sourceDataClass__SWIG_1(swigCPtr, (int)dataClass);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public MipTypes.DataClass sourceDataClass() {
    MipTypes.DataClass ret = (MipTypes.DataClass)msclPINVOKE.NmeaMessageFormat_sourceDataClass__SWIG_2(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public void sampleRate(SampleRate rate, ushort baseRate) {
    msclPINVOKE.NmeaMessageFormat_sampleRate__SWIG_0(swigCPtr, SampleRate.getCPtr(rate), baseRate);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public void sampleRate(SampleRate rate) {
    msclPINVOKE.NmeaMessageFormat_sampleRate__SWIG_1(swigCPtr, SampleRate.getCPtr(rate));
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public SampleRate sampleRate() {
    SampleRate ret = new SampleRate(msclPINVOKE.NmeaMessageFormat_sampleRate__SWIG_2(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static bool talkerIdRequired(NmeaMessageFormat.SentenceType sentenceType) {
    bool ret = msclPINVOKE.NmeaMessageFormat_talkerIdRequired((int)sentenceType);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static bool dataClassSupported(MipTypes.DataClass dataClass, NmeaMessageFormat.SentenceType sentenceType) {
    bool ret = msclPINVOKE.NmeaMessageFormat_dataClassSupported((int)dataClass, (int)sentenceType);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static MipDataClasses supportedDataClasses(NmeaMessageFormat.SentenceType sentenceType) {
    MipDataClasses ret = new MipDataClasses(msclPINVOKE.NmeaMessageFormat_supportedDataClasses((int)sentenceType), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static MipFieldValues toCommandParameters(NmeaMessageFormats nmeaFormats) {
    MipFieldValues ret = new MipFieldValues(msclPINVOKE.NmeaMessageFormat_toCommandParameters(NmeaMessageFormats.getCPtr(nmeaFormats)), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static readonly byte MAX_MESSAGES = msclPINVOKE.NmeaMessageFormat_MAX_MESSAGES_get();
  public enum SentenceType {
    GGA = 0x01,
    GLL = 0x02,
    GSV = 0x03,
    RMC = 0x04,
    VTG = 0x05,
    HDT = 0x06,
    ZDA = 0x07,
    PKRA = 0x81,
    PKRR = 0x82
  }

  public enum Talker {
    IGNORED = 0,
    GNSS = 1,
    GPS = 2,
    GALILEO = 3,
    GLONASS = 4
  }

}

}
