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

public class ContinuousBIT_IMU : Bitfield {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;

  internal ContinuousBIT_IMU(global::System.IntPtr cPtr, bool cMemoryOwn) : base(msclPINVOKE.ContinuousBIT_IMU_SWIGUpcast(cPtr), cMemoryOwn) {
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(ContinuousBIT_IMU obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  protected override void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_ContinuousBIT_IMU(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      base.Dispose(disposing);
    }
  }

  public uint flags() {
    uint ret = msclPINVOKE.ContinuousBIT_IMU_flags(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static readonly byte RESPONSE_OFFSET = msclPINVOKE.ContinuousBIT_IMU_RESPONSE_OFFSET_get();
  public static readonly uint GENERAL_FLAGS = msclPINVOKE.ContinuousBIT_IMU_GENERAL_FLAGS_get();
  public static readonly uint SENSORS_FLAGS = msclPINVOKE.ContinuousBIT_IMU_SENSORS_FLAGS_get();
}

}
