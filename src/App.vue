<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <!-- Contact information -->
      <div class="h-screen bg-primary py-10 px-6 sm:px-10 xl:p-12">
        <img src="./assets/logo.png" class="w-2/3 mx-auto" />
        <p class="mt-6 max-w-3xl text-base text-indigo-50">
          We'd love to hear from you! Whether you’re curious about features, a
          free trial, or even press—we’re ready to answer any and all questions.
        </p>
        <dl class="mt-8 space-y-6">
          <dt><span class="sr-only">Phone number</span></dt>
          <dd class="flex text-base text-indigo-50">
            <PhoneIcon
              class="h-6 w-6 flex-shrink-0 text-secondary"
              aria-hidden="true"
            />
            <span class="ml-3">+44 1632 960557</span>
          </dd>
          <dt><span class="sr-only">Email</span></dt>
          <dd class="flex text-base text-indigo-50">
            <EnvelopeIcon
              class="h-6 w-6 flex-shrink-0 text-secondary"
              aria-hidden="true"
            />
            <span class="ml-3">hello@techbox.co.uk</span>
          </dd>
        </dl>
        <ul role="list" class="mt-8 flex space-x-12">
          <li>
            <a class="text-secondary hover:text-indigo-100" href="#">
              <span class="sr-only">Facebook</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a class="text-secondary hover:text-indigo-100" href="#">
              <span class="sr-only">GitHub</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a class="text-secondary hover:text-indigo-100" href="#">
              <span class="sr-only">Twitter</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div class="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.415198506002!2d-2.2488156340972463!3d53.478910830007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c241e07889%3A0xf3f536a36a55a5da!2sLloyd%20St%2C%20Manchester%20M2%205WA!5e0!3m2!1sen!2suk!4v1662987471247!5m2!1sen!2suk"
            class="w-full h-72"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact form -->
      <div class="flex flex-col justify-center items- lg:col-span-2">
        <div class="px-6 sm:px-10 xl:p-12">
          <h3 class="text-2xl font-bold text-secondary">Send us a message</h3>
          <form
            action="#"
            method="POST"
            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-secondary"
                >Name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-secondary"
              >
                Email
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                />
              </div>
            </div>
            <div>
              <label
                for="way-to-contact"
                class="block text-sm font-medium text-secondary"
              >
                Preferred way to contact
              </label>
              <select
                v-model="selected"
                class="mt-1 h-12 block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
              >
                <option>Email</option>
                <option>Phone</option>
                <option>Post</option>
              </select>
            </div>

            <div v-show="selected === 'Phone'">
              <label
                for="phone"
                class="block text-sm font-medium text-secondary"
              >
                Phone
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="phone"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                  aria-describedby="phone"
                />
              </div>
            </div>
            <div v-show="selected === 'Post'">
              <label
                for="address"
                class="block text-sm font-medium text-secondary"
              >
                Address
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autocomplete="address"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                  aria-describedby="address"
                />
              </div>
            </div>
            <div v-show="selected === 'Post'">
              <label
                for="postcode"
                class="block text-sm font-medium text-secondary"
              >
                Postcode
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  autocomplete="postcode"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                  aria-describedby="postcode"
                />
              </div>
            </div>
            <div v-show="selected === 'Post'">
              <label
                for="country"
                class="block text-sm font-medium text-secondary"
              >
                Country
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="country"
                  id="country"
                  autocomplete="country"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-secondary shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                  aria-describedby="country"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="message"
                  class="block text-sm font-medium text-secondary"
                >
                  Message
                </label>
                <span id="message-max" class="text-sm text-gray-500">
                  Max. 500 characters
                </span>
              </div>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="block w-full rounded-md border border-gray-100 py-3 px-4 text-gray-900 shadow-sm focus:border-primaryDark focus:ring-primaryDark"
                  aria-describedby="message-max"
                />
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button
                type="submit"
                class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";
</script>
