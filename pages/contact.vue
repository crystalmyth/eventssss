<template>
  <main class="contact-us">
    <div class="contact-us-header">
      <div class="container-fluid">
        <div class="contact-us-top">
          <h2>Don’t hesitate to contact us if you need help.</h2>
          <p>
            Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accu santium olorem que laud antium id
            est laborum.
          </p>
        </div>
        <div class="contact-us-list">
          <div
            v-for="(contact, index) in contactUsList"
            :key="`contact-${index}`"
            class="contact-us-list-box"
          >
            <div class="contact-us-list-box-title">
              <i :class="contact.icon"></i>
              {{ contact.title }}
            </div>
            <p
              v-for="detail in contact.content"
              :key="`contact-content-${detail}`"
            >
              {{ detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us-body">
      <div class="container-fluid shadow">
        <div class="contact-us-body-form">
          <h3>Got Any Questions?</h3>
          <p>Use the form below to get in touch with the sales team</p>
          <form action class="form">
            <div class="form-group">
              <input type="text" placeholder="Name *" class="form-control" />
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="Contact *"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <textarea
                name
                id
                cols="30"
                rows="10"
                class="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-submit">
              <div class="btn btn-primary">
                Send Your Message
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </form>
        </div>
        <div class="contact-us-body-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1043551816033!2d77.05506670806535!3d28.443124204065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861de9d7bb9%3A0xe403eb9336f57e45!2sUNITECH%20CYBER%20PARK%2C%20Durga%20Colony%2C%20Sector%2039%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1661364046794!5m2!1sen!2sin"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const contactUsList = [
  {
    title: "Address",
    icon: "fa-solid fa-location-dot",
    content: ["70 Washington Square South New York, NY 10012, United States"],
  },
  {
    title: "Call Us",
    icon: "fa-solid fa-phone",
    content: ["(877) 834-1434", "(877) 834-1255"],
  },
  {
    title: "Openning",
    icon: "fa-solid fa-clock",
    content: ["Monday – Friday: 8am – 4pm", "Saturday – Sunday: 9am – 5pm"],
  },
  {
    title: "Contact",
    icon: "fa-solid fa-envelope",
    content: ["ziggy@example.com", "info@example.com"],
  },
];
</script>

<style lang="scss">
.contact-us {
  &-header {
    padding: 5rem 0rem;
    background-color: #f6f2f2;
  }
  &-top {
    display: grid;
    grid-template-columns: 33% calc(67% - 4rem);
    grid-gap: 4rem;
    padding: 3rem 0rem;

    @media only screen and (orientation: portrait) {
      display: flex;
      flex-direction: column;
    }
    h2 {
      font-weight: bolder;
      text-align: left !important;
    }
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin: 3rem 0rem;

    @media only screen and (orientation: portrait) {
      grid-template-columns: repeat(2, 1fr);
    }

    &-box {
      font-size: 0.7rem;
      padding: 1rem;
      border-radius: 0.5rem;
      &-title {
        display: flex;
        align-items: center;
        font-size: 2rem;
        grid-gap: 1rem;
        font-weight: bold;
        margin-bottom: 1rem;
        i {
          height: 3rem;
          width: 3rem;
          background-color: $orange;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $white;
        }
      }

      p {
        color: $light-dark;
      }

      &:hover {
        background-color: $orange;
        color: #fff;
        .contact-us-list-box-title i {
          background-color: $white;
          color: $orange;
        }
        p {
          color: $white;
        }
      }
    }
  }

  &-body {
    position: relative;

    .container-fluid {
      position: relative;
      top: -5rem;
      background-color: $white;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
      width: 90%;
      margin: 0 auto;
      padding: 4rem;
      border-radius: 0.7rem;
      @media only screen and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    &-form {
      h3 {
        font-size: 3rem;
        font-weight: bold;
      }
      p {
        color: $light-dark;
        margin-bottom: 3rem;
      }
    }
    .form {
      &-group {
        margin-bottom: 1rem;
      }
      &-control {
        font-size: 1.6rem;
        border-radius: 0rem;
        padding: 1rem;
      }
      &-submit {
        .btn {
          position: relative;
          font-size: 1.6rem;
          background-color: $purple;
          border-color: $purple;
          padding: 1rem 3rem;
          position: relative;
          border-radius: 3rem;
          overflow: hidden;

          i {
            position: absolute;
            top: 50%;
            transform: translateY(-50%) translateX(150%);
            right: 0.5rem;
            height: 2rem;
            width: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $white;
            border-radius: 100%;
            color: $purple;
          }
        }
        &:hover {
          i {
            transform: translateY(-50%) translateX(0%);
          }
        }
      }
    }
    &-map {
      width: 100%;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
