import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

function ContactSection() {
  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // CONTACT
        </div>
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">
          <TextAnimate animation="slideLeft" by="character">
            Let's Work Together
          </TextAnimate>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Have a project in mind? I'd love to hear about it. Let's discuss how
          we can bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600">devndchill@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600">+91 9714731681</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                <span className="text-gray-600"> India</span>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold text-black mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div> */}

          {/* <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-black mb-3">Quick Response</h4>
            <p className="text-sm text-gray-600 mb-4">
              I typically respond to messages within 24 hours. For urgent
              projects, feel free to call directly.
            </p>
            <Button
              variant="outline"
              className="border-2 border-dashed border-black text-black hover:bg-black hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent"
            >
              Schedule a Call
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
