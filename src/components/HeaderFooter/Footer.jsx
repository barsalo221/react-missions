import React from "react";
import '../HeaderFooter/Footer.css'

const Footer = () => {
    return(
        <div className="margin-t">
            <footer class="bg-black rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800">
                <p class="mb-4 text-sm text-center text-white dark:text-gray-400 sm:mb-0">
                    &copy; 2022-2023 All rights reserved Bar Salomon.
                </p>
                {/* <div class="flex justify-center items-center space-x-1"></div> */}
            </footer>
        </div>
    );
}
export default Footer