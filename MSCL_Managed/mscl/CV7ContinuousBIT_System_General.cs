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

public class CV7ContinuousBIT_System_General : ContinuousBIT_System_General {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;

  internal CV7ContinuousBIT_System_General(global::System.IntPtr cPtr, bool cMemoryOwn) : base(msclPINVOKE.CV7ContinuousBIT_System_General_SWIGUpcast(cPtr), cMemoryOwn) {
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(CV7ContinuousBIT_System_General obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  protected override void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_CV7ContinuousBIT_System_General(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
      base.Dispose(disposing);
    }
  }

  public CV7ContinuousBIT_System_General() : this(msclPINVOKE.new_CV7ContinuousBIT_System_General__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public CV7ContinuousBIT_System_General(byte bits) : this(msclPINVOKE.new_CV7ContinuousBIT_System_General__SWIG_1(bits), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

}

}
